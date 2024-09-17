'use client';

import { ApolloError, ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support';
import { toast } from 'react-toastify';

import APP_DATA from '@/data/app';

function makeClient() {
  const httpLink = new HttpLink({
    uri: APP_DATA.GRAPHQL_URI,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IksxOW05dFVWbWYiLCJuZXR3b3JrSWQiOiJLSjBHZ2dnYmxEIiwibmV0d29ya0RvbWFpbiI6ImJhc2ljLTN2bXVtemNzLmJldHRlcm1vZGUuaW8iLCJ0b2tlblR5cGUiOiJVU0VSIiwiZW50aXR5SWQiOm51bGwsInBlcm1pc3Npb25Db250ZXh0IjpudWxsLCJwZXJtaXNzaW9ucyI6bnVsbCwic2Vzc2lvbklkIjoiTGRhbXFNVkpjUEZyem5ibmdzbEp4ak5yeXd0bnhCbzRFanBBM0Y3d2JOWlprd0xKUXkiLCJpYXQiOjE3MjY1Nzg5NTQsImV4cCI6MTcyOTE3MDk1NH0.aTDjW2SWgeJofNeNRVXAmOAqCiWrtBobAq6onf4Etf4',
    },
    fetchOptions: { cache: 'no-store' },
  });
  const link =
    typeof window === 'undefined'
      ? ApolloLink.from([
          new SSRMultipartLink({
            stripDefer: true,
          }),
          httpLink,
        ])
      : httpLink;

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });
}

export function apolloOnError(error: ApolloError) {
  if (!error.message) return;

  toast(error.message, { type: 'error' });
}

function ApolloProvider({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

export default ApolloProvider;
