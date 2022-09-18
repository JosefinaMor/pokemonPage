import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';


const Menu = ({ menuItems }) =>{
  
  return(
    <>
      <MenuList>
        {menuItems.map((item, index) =>(
          <>
            <MenuItem key={index}>
              {item}
            </MenuItem>
            <Divider />
          </>
        ))}
      </MenuList>

    </>
  )
}

export default Menu;