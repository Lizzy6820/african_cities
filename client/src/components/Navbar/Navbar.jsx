import React from 'react'
import { AppBar,Typography, CssBaseline, Toolbar } from '@material-ui/core'
import logo from '../../imagez/logo.jpg'

const Navbar = () => {
  return (
    <>
    <AppBar  position="static"  color="white"  elevation={0}  
  sx={{
    display: 'flex',
    position: 'sticky',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    alignItems: 'left',
    backdropFilter: 'blur(8px)'
    
  }} >  
    <CssBaseline />
      <Toolbar >
        <Typography   sx={{ mr: 1, marginTop:'3px',display: {  md: 'flex' } }} variant="h3" align="center">
        <img  src={logo} alt="logo" height="80" style={{borderRadius: '50%', padding: '5px' }}/>
        African Cities
        </Typography>
        </Toolbar>
     
 </AppBar>

    </>
  )
}

export default Navbar