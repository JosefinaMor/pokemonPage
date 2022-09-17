import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';


const NavBar = () =>{
  return(
    <>
      <Stack spacing={2} direction="row" p={2} >
        <IconButton>
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Buscar Pokemon"
          inputProps={{ 'aria-label': 'Buscar pokeAPI' }}
        >
          <SearchIcon />
        </InputBase>
      </Stack>
    </>
  )
}

export default NavBar;