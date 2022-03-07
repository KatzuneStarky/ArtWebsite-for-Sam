import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { Lock } from '@mui/icons-material'

export default function ImgNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

//   const [currentUser, setModal] = useAuth()

//   const openLogin = () =>{
//       setModal({ isOpen: true, title: 'Iniciar Sesion', content: <Login /> })
//   }

  const [currentUser, setCuurrentUser] = React.useState({
      email: 'test@test.com',
      displayName: 'Katzune',
      phtoURL: ''
  });

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          {!currentUser ? (<Button startIcon={<Lock />}>Login</Button>) : (
            <Tooltip>
            <IconButton  size="small" sx={{ ml: 2 }}>
                <Avatar sx={{ width: 32, height: 32 }} src={process.env.PUBLIC_URL + "/images/Samiithedarki_logo.png"}>
                    {
                        currentUser?.displayName?.charAt(0)?.toUpperCase() ||
                        currentUser?.email?.charAt(0)?.toUpperCase()
                    }    
                </Avatar>
            </IconButton>
            </Tooltip>
          )}    
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Perfil
        </MenuItem>        
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Configuracion
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Salir
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
