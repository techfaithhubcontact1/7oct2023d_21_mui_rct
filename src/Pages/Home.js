//1. Import Area
import React, { useContext } from 'react';
import { Button, useTheme, Box, Typography } from '@mui/material';
import { ThemeProvider2 } from '..'

//2. Defination and expot areas

export default function Home() {
  const theme = useTheme();
  const color2 = useContext(ThemeProvider2);
  // console.log(color2);
  return (
    <>
       {/* color appied using useTheme  */}
      <Button style={ {color:theme.palette.primary.main} }>Primary</Button>
      <br />
      <br />
      <Button style={ {background:theme.palette.secondary.main} }>Secondary</Button>
      <br />
      <br />
      <Box style={ {background:theme.palette.success.main} }>Box is Material UI Component</Box>
      <br />
      <Typography style={ {color:theme.palette.secondary.main} }>Typography is Material UI Component</Typography>
      <br />
      <br />

      {/* color apied using usContext funcrion  */}
      <Button style={ {background:color2} }>useContext</Button>
    </>
  )
}
