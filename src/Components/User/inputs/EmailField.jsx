import { TextField } from '@mui/material'
import React from 'react'

const EmailField = ({emailRef, defaultValue = ''}) => {
  return (
    <TextField 
        autoFocus
        margin='normal'
        variant='standard'
        id='email'
        label= 'Correo Electronico'
        type="email"
        fullWidth
        required
        inputRef={emailRef}
        defaultValue = {defaultValue}
    />
  )
}

export default EmailField