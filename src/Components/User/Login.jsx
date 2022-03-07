import { Google } from '@mui/icons-material'
import { Button, DialogActions, DialogContent, DialogContentText } from '@mui/material'
import React, { useRef, useState } from 'react'
import EmailField from './inputs/EmailField'
import PasswordField from './inputs/PasswordField'
import SubmitButton from './inputs/SubmitButton'

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const [isRegister, setIsRegister] = useState(false)
    return (
    <>
        <form>
            <DialogContent dividers>
                <DialogContentText>
                    Favor de ingresar su email y su contraseña aqui:
                </DialogContentText>  
                <EmailField {...{emailRef}} />
                <PasswordField {...{passwordRef}} />  
                {isRegister && (<PasswordField {...{passwordRef: confirmPasswordRef, id: "confirmPassword", label: "Confirmar Contraseña"}} />)}
            </DialogContent>
            <DialogActions sx={{justifyContent: 'space-between', px: '19px'}}>
                <Button size="small">Olvido su contraseña?</Button>
                <SubmitButton />
            </DialogActions>
        </form>
        <DialogActions sx={{justifyContent: 'left', p: '5px 24px'}}>
            {
            isRegister ?
            'Ya tienes una cuneta? Ingresa ahora' :
            'No tienes una cuenta aun? Crea una ahora'
            }
            <Button onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? 'Iniciar Sesion' : 'Registrarse'}
            </Button>
        </DialogActions>
        <DialogActions sx={{justifyContent: 'center', py: '24px'}}>
            <Button
                variant='outlined'
                startIcon= { <Google /> }
            >
                Ingresar con GOOGLE
            </Button>
        </DialogActions>
    </>
  )
}

export default Login