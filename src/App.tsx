import { useDarkMode, useDocumentTitle } from 'usehooks-ts';
import NavBar from './components/NavBar';
import MainBox from './components/MainBox';
import { useState } from 'react';

const App = () => {
  const { isDarkMode } = useDarkMode();
  const [title] = useState<string>('MikuNav');
  useDocumentTitle(title);
  return (
    <main
      className={`w-full h-full ${
        isDarkMode ? 'dark' : 'light'
      } text-foreground bg-background`}
    >
      <NavBar />
      <MainBox />
    </main>
  );
};

export default App;
