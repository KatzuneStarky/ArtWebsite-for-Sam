import { Send } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const SubmitButton = () => {
  return (    
      <Button
        variant='contained'
        endIcon = { <Send /> }
        type= "submit"
      >
          Confirmar
      </Button>
  )
}

export default SubmitButton