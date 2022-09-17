import { useState } from 'react';
import Menu from './Menu';
import NavBar from "./NavBar";

const Header = () =>{
  const [openMenu, setOpenMenu] = useState(false);

  const openOrCloseSideMenu = (param) =>{
    param ? setOpenMenu(false) : setOpenMenu(true);
  }

  return(
    <>
      <NavBar 
        onClick={()=>openOrCloseSideMenu(openMenu)}
      />
      {openMenu && <Menu />}
    </>
  )
}

export default Header;