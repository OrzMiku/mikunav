import { Input, Button } from '@nextui-org/react';
import { FormEvent, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = `https://www.google.com/search?q=${searchValue}`;
  };
  return (
    <div className='flex flex-col justify-center items-center mt-10 w-10/12 max-w-lg'>
      <h1 className='text-4xl mb-6'>MikuNav</h1>
      <form
        className='flex w-full overflow-hidden rounded-lg'
        onSubmit={handleOnSubmit}
      >
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
    </div>
  );
};

export default SearchBar;
