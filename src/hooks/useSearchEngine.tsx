import { useState } from 'react';
import { IconType } from 'react-icons';
import {
  BiLogoBaidu,
  BiLogoGoogle,
  BiLogoBing,
  BiLogoYahoo,
} from 'react-icons/bi';
import { GiDuck } from 'react-icons/gi';
import { useLocalStorage } from 'usehooks-ts';

export interface searchEngineItem {
  id: number;
  name: string;
  url: string;
  icon: IconType;
}

export const searchEngineList: searchEngineItem[] = [
  {
    id: 0,
    name: '谷歌',
    url: 'https://www.google.com/search?q=',
    icon: BiLogoGoogle,
  },
  {
    id: 1,
    name: '百度',
    url: 'https://www.baidu.com/s?wd=',
    icon: BiLogoBaidu,
  },
  {
    id: 2,
    name: '必应',
    url: 'https://www.bing.com/search?q=',
    icon: BiLogoBing,
  },
  {
    id: 3,
    name: 'DuckDuckGo',
    url: 'https://duckduckgo.com/?q=',
    icon: GiDuck,
  },
  {
    id: 4,
    name: '雅虎',
    url: 'https://search.yahoo.com/search?p=',
    icon: BiLogoYahoo,
  },
];

const useSearchEngine = () => {
  const [searchEngineLocal, setSearchEngineLocal] = useLocalStorage<number>(
    'searchEngine',
    0
  );

  const [searchEngine, setSearchEngine] = useState<searchEngineItem>(
    searchEngineList[searchEngineLocal]
  );

  return {
    searchEngine,
    setSearchEngine: (searchEngine: searchEngineItem) => {
      setSearchEngine(searchEngine);
      setSearchEngineLocal(searchEngine.id);
    },
  };
};

export default useSearchEngine;
