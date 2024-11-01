import {FC} from 'react';

import {HomeContainer} from './Home.styled';

const Home: FC = () => {
  // const {data: wordsData, isLoading, isError} = useGetWordsQuery('');
  // const [addWords] = useAddWordsMutation();
  // const [newWord, setNewWord] = useState('');

  // const handleAddNewWord = useCallback(async () => {
  //   if (newWord) {
  //     await addWords({id: uuidv4(), value: newWord});
  //     setNewWord('');
  //   }
  // }, [addWords, newWord]);

  // if (isError) return <NotFoundPage />;
  return (
    <HomeContainer>
      {/* {isLoading && <LoadingSpinner />}
      <ul>{wordsData?.map(({value}) => <li key={uuidv4()}>{value}</li>)}</ul>
      <input value={newWord} onChange={(e) => setNewWord(e.target.value)} />
      <button
        type='button'
        onClick={() => {
          handleAddNewWord();
        }}>
        add
      </button> */}
    </HomeContainer>
  );
};

export default Home;
