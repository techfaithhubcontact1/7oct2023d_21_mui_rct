import { Button } from '@mui/material';
import React from 'react'

export default function About(abclr) {
  console.log(abclr);
  return (

    // Color Apylied using Porp Driling 
    <Button style={ {background:abclr.getclr} }>About Page</Button>
  )
}
