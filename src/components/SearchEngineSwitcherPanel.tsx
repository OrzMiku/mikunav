import { searchEngineItem, searchEngineList } from '../hooks/useSearchEngine';
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Divider,
  ButtonGroup,
} from '@nextui-org/react';

interface Props {
  searchEngine: searchEngineItem;
  setSearchEngine: (searchEngine: searchEngineItem) => void;
}

const SearchEngineSwitcherPanel = ({
  setSearchEngine,
  searchEngine,
}: Props) => {
  return (
    <Card>
      <CardHeader>搜索引擎选择</CardHeader>
      <Divider />
      <CardBody>
        <ButtonGroup>
          {searchEngineList.map((item) => (
            <Button
              color={item === searchEngine ? 'primary' : 'default'}
              onClick={() => {
                setSearchEngine(item);
              }}
              key={item.id}
            >
              {<item.icon />} {item.name}
            </Button>
          ))}
        </ButtonGroup>
      </CardBody>
    </Card>
  );
};

export default SearchEngineSwitcherPanel;
