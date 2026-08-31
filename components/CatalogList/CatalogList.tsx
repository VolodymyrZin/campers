'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getCampers } from '@/lib/api/campers';

export default function CatalogList() {
  const { data, isLoading, isError } = useInfiniteQuery({
    queryKey: ['campers'],
    queryFn: ({ pageParam }) =>
      getCampers({
        page: pageParam,
        perPage: 4,
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
      {data?.pages.flatMap(page =>
        page.campers.map(camper => <p key={camper.id}>{camper.name}</p>)
      )}
    </div>
  );
}
