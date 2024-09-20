'use client';
import { PropsWithChildren } from 'react';

import PostListContextProvider from './postList';

function ContextProvider({ children }: PropsWithChildren) {
  return <PostListContextProvider>{children}</PostListContextProvider>;
}

export default ContextProvider;
