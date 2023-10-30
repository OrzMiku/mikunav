import { Input, Button } from '@nextui-org/react';
import { FormEvent, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import useSearchEngine, { searchEngineItem } from '../hooks/useSearchEngine';
import SearchEngineSwitcherPanel from './SearchEngineSwitcherPanel';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { searchEngine, setSearchEngine } = useSearchEngine();
  const [isSwitching, setIsSwitching] = useState<boolean>(false);
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = searchEngine + searchValue;
  };
  const handleOnClickSwitchBtn = () => {
    setIsSwitching(!isSwitching);
  };
  const handleOnSwitch = (searchEngine: searchEngineItem) => {
    setSearchEngine(searchEngine);
    handleOnClickSwitchBtn();
  };
  return (
    <div className='flex flex-col justify-center items-center mt-10 w-10/12 max-w-lg'>
      <h1 className='text-4xl mb-6'>MikuNav</h1>
      <form
        className='flex w-full overflow-hidden rounded-lg'
        onSubmit={handleOnSubmit}
      >
        <Button
          onClick={handleOnClickSwitchBtn}
          isIconOnly
          className='text-xl'
          radius={`none`}
        >
          {<searchEngine.icon />}
        </Button>
        <Input
          onValueChange={setSearchValue}
          value={searchValue}
          radius={`none`}
          placeholder={`Search Here!`}
        />
        <Button type='submit' isIconOnly className='text-xl' radius={`none`}>
          <BiSearchAlt />
        </Button>
      </form>
      {isSwitching && (
        <div className='w-full mt-4'>
          <SearchEngineSwitcherPanel
            searchEngine={searchEngine}
            setSearchEngine={handleOnSwitch}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
