'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getCampers } from '@/lib/api/campers';
import CamperCard from '../../components/CamperCard/CamperCard';
import Filters from '../../components/Filters/Filters';
import { useState } from 'react';
import type { CamperForm, Transmission, Engine } from '@/types/camper';

interface FiltersState {
  location: string;
  form?: CamperForm;
  engine?: Engine;
  transmission?: Transmission;
}

export default function CatalogList() {
  const [filters, setFilters] = useState<FiltersState>({
    location: '',
    form: undefined,
    transmission: undefined,
    engine: undefined,
  });

  const [appliedFilters, setAppliedFilters] = useState<FiltersState>({
    location: '',
    form: undefined,
    transmission: undefined,
    engine: undefined,
  });
  const {
    data,
    isLoading,
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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <div>
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
        onEngineChange={value =>
          setFilters(prev => ({
            ...prev,
            engine: value,
          }))
        }
        onTransmissionChange={value =>
          setFilters(prev => ({
            ...prev,
            transmission: value,
          }))
        }
        onSearch={() => setAppliedFilters(filters)}
      />
      {data?.pages.flatMap(page =>
        page.campers.map(camper => (
          <CamperCard key={camper.id} camper={camper} />
        ))
      )}

      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}
