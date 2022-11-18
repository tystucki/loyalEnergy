import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@mui/icons-material';
import logo from '../NavBar/logo.png'
import useStyles from './Styles'

const NavBar = () => {
    const classes = useStyles();
  return (
    <>
        <AppBar position='fixed' className={classes.AppBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                    <Link to='/'><img src={logo} alt='Products.js' height='100px' classname={classes.image}/></Link>
                    SHOP
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label='Show cart items' color='inherit'>
                        <Badge badgeContent={1} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>

            </Toolbar>
        </AppBar>

    </>
  )
}

export default NavBar