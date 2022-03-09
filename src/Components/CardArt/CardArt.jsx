import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardArt({dibujo}) {
  return (
    <Card sx={{ maxWidth: 445, background: 'rgba(0, 0, 0, 0.5)', margin: '20px' }}>
      <CardMedia
        component="img"
        height="440"    
        image={dibujo.imageUrl}
        alt="Arte del año"
        className='media'
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" sx={{color: '#fff'}}>
          {dibujo.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{color: '#fff'}}>
          {dibujo.descripcion}          
        </Typography>
      </CardContent>
    </Card>
  );
}
