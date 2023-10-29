import { useDarkMode } from 'usehooks-ts';
import { Switch } from '@nextui-org/react';
import { MoonIcon } from './Icons/MoonIcon';
import { SunIcon } from './Icons/SunIcon';

const DarkModeSwitcher = () => {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <Switch
      onChange={toggle}
      defaultSelected={isDarkMode}
      size='lg'
      color='default'
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
    ></Switch>
  );
};

export default DarkModeSwitcher;
