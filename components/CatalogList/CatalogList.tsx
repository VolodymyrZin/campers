'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getCampers } from '@/lib/api/campers';
import CamperCard from '../../components/CamperCard/CamperCard';
import Filters from '../../components/Filters/Filters';
import css from './CatalogList.module.css';
import { useState } from 'react';
import type { CamperForm, Transmission, Engine } from '@/types/camper';
import NothingFound from '../NothingFound/NothingFound';
import LoaderModal from '../LoaderModal/LoaderModal';

interface FiltersState {
  location: string;
  form?: CamperForm;
  engine?: Engine;
  transmission?: Transmission;
}

const initialFilters: FiltersState = {
  location: '',
  form: undefined,
  engine: undefined,
  transmission: undefined,
};
export default function CatalogList() {
  const [filters, setFilters] = useState<FiltersState>(initialFilters);

  const [appliedFilters, setAppliedFilters] =
    useState<FiltersState>(initialFilters);

  const handleClearFilters = () => {
    setFilters(initialFilters);
    setAppliedFilters(initialFilters);
  };

  const handleViewAll = () => {
    setAppliedFilters(initialFilters);
  };
  const {
    data,
    isLoading,
    isFetching,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['campers', appliedFilters],
    queryFn: ({ pageParam }) =>
      getCampers({
        page: pageParam,
        perPage: 4,
        ...appliedFilters,
      }),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
  });
  const campers = data?.pages.flatMap(page => page.campers) ?? [];
  if (isLoading) {
    return <LoaderModal isLoading />;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className={css.container}>
      <LoaderModal isLoading={isFetching && !isFetchingNextPage} />
      <div className={css.catalog}>
        <aside className={css.sidebar}>
          <Filters
            location={filters.location}
            form={filters.form}
            engine={filters.engine}
            transmission={filters.transmission}
            onLocationChange={value =>
              setFilters(prev => ({
                ...prev,
                location: value,
              }))
            }
            onFormChange={value =>
              setFilters(prev => ({
                ...prev,
                form: value,
              }))
            }
            onTransmissionChange={value =>
              setFilters(prev => ({
                ...prev,
                transmission: value,
              }))
            }
            onEngineChange={value =>
              setFilters(prev => ({
                ...prev,
                engine: value,
              }))
            }
            onSearch={() => setAppliedFilters(filters)}
            onClearFilters={handleClearFilters}
          />
        </aside>
        <section className={css.content}>
          {campers.length === 0 ? (
            <NothingFound
              onViewAll={handleViewAll}
              onClearFilters={handleClearFilters}
            />
          ) : (
            <>
              {campers.map(camper => (
                <CamperCard key={camper.id} camper={camper} />
              ))}

              {hasNextPage && (
                <button
                  className={css.loadMoreButton}
                  type="button"
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                >
                  {isFetchingNextPage ? 'Loading...' : 'Load more'}
                </button>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
}
