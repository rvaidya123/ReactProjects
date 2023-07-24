import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    header: {
        backgroundColor: '#212121',
    },
    spacing :{
        paddingLeft: 20,
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none',
    }
  });

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar >
                <NavLink to="/" className={classes.spacing}> Home</NavLink>
                <NavLink to="all" className={classes.spacing}> All Users</NavLink>
                <NavLink to="add" className={classes.spacing}> Add Users</NavLink>
                <NavLink to="allProduct" className={classes.spacing}> All Products</NavLink>
                <NavLink to="addProduct" className={classes.spacing}> Add Products</NavLink>
                <NavLink to="allorder" className={classes.spacing}>Order Details</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;