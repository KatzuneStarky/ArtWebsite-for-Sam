import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Delete, MoreVert } from '@mui/icons-material'
import deleteDocument from '../../Firebase/deleteDocument';
import deleteFile from '../../Firebase/deleteFile';

export default function Options({imageId}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const currentUser = {uid: 'userId'}
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async() =>{
      try {
          await deleteDocument('gallery', imageId)
          await deleteFile(`gallery/${currentUser.uid}/${imageId}`)
      } catch (error) {
          alert(error)
          console.log(error)
      }
  }

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title= 'Opciones'>
            <IconButton
                onClick={handleClick}
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    color: 'white',
                    background: 'rgba(0, 0, 0, 0.3)'
                }}
            >
                <MoreVert fontSize='large' />
            </IconButton>
        </Tooltip>  
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
        <MenuItem onClick={handleDelete}>
            <ListItemIcon>
                <Delete />
            </ListItemIcon>
            Borrar          
        </MenuItem>        
      </Menu>
    </React.Fragment>
  );
}
