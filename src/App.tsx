import { useDarkMode } from 'usehooks-ts';
import NavBar from './components/NavBar';
import MainBox from './components/MainBox';

const App = () => {
  const { isDarkMode } = useDarkMode();
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
