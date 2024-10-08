import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';

import APP_DATA from '@/data/app';

export const { query, PreloadQuery, getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://api.bettermode.com/',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IksxOW05dFVWbWYiLCJuZXR3b3JrSWQiOiJLSjBHZ2dnYmxEIiwibmV0d29ya0RvbWFpbiI6ImJhc2ljLTN2bXVtemNzLmJldHRlcm1vZGUuaW8iLCJ0b2tlblR5cGUiOiJVU0VSIiwiZW50aXR5SWQiOm51bGwsInBlcm1pc3Npb25Db250ZXh0IjpudWxsLCJwZXJtaXNzaW9ucyI6bnVsbCwic2Vzc2lvbklkIjoickdXb0F2NEhPakFNbFQ1emdpUDd6cFBXbk1FQWpWQ3dDclZheWRYRDcyZHVQTldTdG8iLCJpYXQiOjE3MjU4MDU3OTUsImV4cCI6MTcyODM5Nzc5NX0.KepcObxMHSLQpMeQIpMgBdn8KY3WErRy0oeiusK66f0',
    },
  });
});

export function makeClient() {
  const httpLink = new HttpLink({
    uri: APP_DATA.GRAPHQL_URI,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IksxOW05dFVWbWYiLCJuZXR3b3JrSWQiOiJLSjBHZ2dnYmxEIiwibmV0d29ya0RvbWFpbiI6ImJhc2ljLTN2bXVtemNzLmJldHRlcm1vZGUuaW8iLCJ0b2tlblR5cGUiOiJVU0VSIiwiZW50aXR5SWQiOm51bGwsInBlcm1pc3Npb25Db250ZXh0IjpudWxsLCJwZXJtaXNzaW9ucyI6bnVsbCwic2Vzc2lvbklkIjoiTGRhbXFNVkpjUEZyem5ibmdzbEp4ak5yeXd0bnhCbzRFanBBM0Y3d2JOWlprd0xKUXkiLCJpYXQiOjE3MjY1Nzg5NTQsImV4cCI6MTcyOTE3MDk1NH0.aTDjW2SWgeJofNeNRVXAmOAqCiWrtBobAq6onf4Etf4',
    },
    fetchOptions: { cache: 'no-store' },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}
