import { Close } from '@mui/icons-material'
import { Dialog, DialogTitle, IconButton } from '@mui/material'
import React from 'react'
import { useAuth } from '../../context/AuthContext'

const Modal = () => {
    const {modal, setModal} = useAuth()
    const handleClose = () =>{
        setModal({...modal, isOpen: false})
    }
    return (
        <Dialog open={modal.isOpen} onClose={handleClose}>
            <DialogTitle>
                {modal.title}
                <IconButton
                    aria-label='cerrar'
                    onClick={handleClose}
                    sx = {{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        color: (theme) => theme.palette.grey[500] 
                    }}
                >
                    <Close />
                </IconButton>
            </DialogTitle>
            {modal.content}
        </Dialog>
    )
}

export default Modal