/* eslint-disable react/no-array-index-key */
import {FC, useCallback, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import LoadingSpinner from '@features/Loading/LoadingSpinner';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';
import {
  useAddWordsMutation,
  useGetWordsQuery,
} from '@src/store/api/wordsApi/wordsApi';

import {HomeContainer} from './Home.styled';

const Home: FC = () => {
  const {data: wordsData, isLoading, isError} = useGetWordsQuery('');
  const [addWords] = useAddWordsMutation();
  const [newWord, setNewWord] = useState('');

  const handleAddNewWord = useCallback(async () => {
    if (newWord) {
      await addWords({id: uuidv4(), value: newWord});
      setNewWord('');
    }
  }, [addWords, newWord]);

  if (isError) return <NotFoundPage />;
  return (
    <HomeContainer>
      {isLoading && <LoadingSpinner />}
      <ul>{wordsData?.map(({id, value}) => <li key={id}>{value}</li>)}</ul>
      <input value={newWord} onChange={(e) => setNewWord(e.target.value)} />
      <button
        type='button'
        onClick={() => {
          handleAddNewWord();
        }}>
        add
      </button>
    </HomeContainer>
  );
};

export default Home;
