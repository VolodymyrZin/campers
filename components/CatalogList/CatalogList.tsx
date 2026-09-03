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
  const handlers = {
    location: (value: string) =>
      setFilters(prev => ({
        ...prev,
        location: value,
      })),
    form: (value: CamperForm | undefined) =>
      setFilters(prev => ({
        ...prev,
        form: value,
      })),
    transmission: (value: Transmission | undefined) =>
      setFilters(prev => ({
        ...prev,
        transmission: value,
      })),
    engine: (value: Engine | undefined) =>
      setFilters(prev => ({
        ...prev,
        engine: value,
      })),
  };
  const campers = data?.pages.flatMap(page => page.campers) ?? [];

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className={css.container}>
      <LoaderModal
        isLoading={isLoading || (isFetching && !isFetchingNextPage)}
      />
      <div className={css.catalog}>
        <aside className={css.sidebar}>
          <Filters
            location={filters.location}
            form={filters.form}
            engine={filters.engine}
            transmission={filters.transmission}
            onLocationChange={handlers.location}
            onFormChange={handlers.form}
            onTransmissionChange={handlers.transmission}
            onEngineChange={handlers.engine}
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
