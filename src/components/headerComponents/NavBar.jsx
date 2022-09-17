import { AppBar } from '@mui/material';
import { useState } from 'react';
import Menu from './Menu';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';


const NavBar = () =>{
  const [openMenu, setOpenMenu] = useState(false);

  const openOrCloseSideMenu = (param) =>{
    param ? setOpenMenu(false) : setOpenMenu(true);
  }
  return(
    <>
      <AppBar>
        <Stack spacing={2} direction="row" p={2} >
          <IconButton>
            <MenuIcon 
              onClick={()=>openOrCloseSideMenu(openMenu)}
            />
          </IconButton>
          {openMenu && <Menu />}
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar Pokemon"
            inputProps={{ 'aria-label': 'Buscar pokeAPI' }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon color='primary'/>
                </IconButton>
              </InputAdornment>
            }
          >
          </InputBase>
        </Stack>
      </AppBar>
    </>
  )
}

export default NavBar;