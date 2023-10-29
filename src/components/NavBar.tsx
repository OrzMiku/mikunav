import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import DarkModeSwitcher from './DarkModeSwitcher';

const NavBar = () => {
  return (
    <Navbar maxWidth='full'>
      <NavbarContent justify='end'>
        <NavbarItem>
          <DarkModeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
