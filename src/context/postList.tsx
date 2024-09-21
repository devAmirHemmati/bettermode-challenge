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
  handleStartLoadingMore(): void;
  handleFinishLoadingMore(): void;
  handleSetVariables(variables: PostListQueryVariables): void;
}

const initial: IPostListState = {
  isInitial: false,
  isLoadingMore: false,
  variables: {
    offset: 0,
    limit: 15,
    orderByString: 'createdAt',
    reverse: true,
  },
};

const postListContext = createContext<IPostListContext>({
  ...initial,
  handleStartLoadingMore() {},
  handleFinishLoadingMore() {},
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

  const handleStartLoadingMore = () => {
    setState(prevState => ({
      ...prevState,
      isLoadingMore: true,
    }));
  };

  const handleFinishLoadingMore = () => {
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
        handleFinishLoadingMore,
        handleStartLoadingMore,
        handleSetVariables,
      }}
    >
      {children}
    </postListContext.Provider>
  );
}

export default PostListContextProvider;
