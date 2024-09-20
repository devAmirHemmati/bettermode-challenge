'use client';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { PostListQueryVariables } from '@/gql/generated';

interface IPostListState {
  isInitial: boolean;
  isLoadingMore: boolean;
  variables?: PostListQueryVariables;
}

interface IPostListContext extends IPostListState {
  handleLoadMore(): void;
  handleFinishLoadMore(): void;
  handleSetVariables(variables: PostListQueryVariables): void;
}

const initial: IPostListState = {
  isInitial: false,
  isLoadingMore: false,
  variables: {
    offset: 0,
    limit: 10,
    orderByString: 'createdAt',
    reverse: true,
  },
};

const postListContext = createContext<IPostListContext>({
  ...initial,
  handleLoadMore() {},
  handleFinishLoadMore() {},
  handleSetVariables() {},
});

export function usePostListContext() {
  const state = useContext(postListContext);

  return state;
}

function PostListContextProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<IPostListState>(initial);

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      isInitial: true,
    }));
  }, []);

  const handleLoadMore = () => {
    setState(prevState => ({
      ...prevState,
      isLoadingMore: true,
    }));
  };

  const handleFinishLoadMore = () => {
    setState(prevState => ({
      ...prevState,
      isLoadingMore: false,
    }));
  };

  const handleSetVariables = (variables: PostListQueryVariables) => {
    setState(prevState => ({
      ...prevState,
      variables,
    }));
  };

  return (
    <postListContext.Provider
      value={{
        ...state,
        handleFinishLoadMore,
        handleLoadMore,
        handleSetVariables,
      }}
    >
      {children}
    </postListContext.Provider>
  );
}

export default PostListContextProvider;
