import {IWord} from '@store/types/word';

import {baseQueryWithReAuth} from '../baseQuery';
import {createCustomApi} from '..';

export const wordsApi = createCustomApi({
  reducerPath: 'wordsApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['getWords', 'addWord', 'deleteWord', 'changeWord'],
  endpoints: (build) => ({
    getWords: build.query<IWord[], string>({
      query: (limit = '') => `words?${limit && `limit=${limit}`}`,
      providesTags: ['getWords'],
    }),
    addWords: build.mutation({
      query: (body: IWord) => ({
        url: `words/${body.id}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['addWord', 'getWords'],
    }),
    deleteWords: build.mutation({
      query: (body: Partial<IWord>) => ({
        url: `words/${body.id}`,
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['deleteWord', 'getWords'],
    }),
    changeWord: build.mutation({
      query: (body: IWord) => ({
        url: `words/${body.id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['changeWord', 'getWords'],
    }),
  }),
});

export const {
  // список слов
  useGetWordsQuery,
  // добавление слова
  useAddWordsMutation,
  // удаление слова
  useDeleteWordsMutation,
  // изменение слова
  useChangeWordMutation,
} = wordsApi;
