'use client';

import { useMyAwesomePostsSuspenseQuery } from '../../generated/graphql';

export function ClientChild() {
  const { data } = useMyAwesomePostsSuspenseQuery();

  console.log('Data: ', data);
  return (
    <div>
      <h1>{data.posts.totalCount}</h1>
    </div>
  );
}
