import { AppBar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';


const NavBar = ({onClick}) =>{
  
  return(
    <>
      <AppBar>
        <Stack spacing={2} direction="row" p={2} >
          <IconButton>
            <MenuIcon 
              onClick={onClick}
            />
          </IconButton>
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