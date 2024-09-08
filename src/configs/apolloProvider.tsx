'use client';

import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';

function makeClient() {
  const httpLink = new HttpLink({
    uri: 'https://api.bettermode.com/',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IksxOW05dFVWbWYiLCJuZXR3b3JrSWQiOiJLSjBHZ2dnYmxEIiwibmV0d29ya0RvbWFpbiI6ImJhc2ljLTN2bXVtemNzLmJldHRlcm1vZGUuaW8iLCJ0b2tlblR5cGUiOiJVU0VSIiwiZW50aXR5SWQiOm51bGwsInBlcm1pc3Npb25Db250ZXh0IjpudWxsLCJwZXJtaXNzaW9ucyI6bnVsbCwic2Vzc2lvbklkIjoickdXb0F2NEhPakFNbFQ1emdpUDd6cFBXbk1FQWpWQ3dDclZheWRYRDcyZHVQTldTdG8iLCJpYXQiOjE3MjU4MDU3OTUsImV4cCI6MTcyODM5Nzc5NX0.KepcObxMHSLQpMeQIpMgBdn8KY3WErRy0oeiusK66f0',
    },
    fetchOptions: { cache: 'no-store' },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

function ApolloProvider({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

export default ApolloProvider;
