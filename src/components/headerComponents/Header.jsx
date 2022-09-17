import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Menu from './Menu';
import NavBar from "./NavBar";

const Header = () =>{
  const [anchor, setAnchor] = useState("left");
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    console.log(anchor)
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    console.log(anchor)
    setState({ ...state, [anchor]: open });
  };

  return(
    <>
      <NavBar 
        onClick={toggleDrawer(anchor, true)}
      />
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      > 
        <Box
          sx={{ width:250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <Menu /> 
        </Box>
      </Drawer>
    </>
  )
}

export default Header;