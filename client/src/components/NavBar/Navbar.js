import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";

import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

export const Navbar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        history.push('/');
        setUser(null)
    }

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = jwt_decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">

            <Link to='/' className={classes.brandContainer}>
                <img src={'https://img.icons8.com/color/96/000000/blog.png'} className={classes.image} alt="main icon" width='50' height="50" />
                <Typography className={classes.heading} variant="h2" align="center">Book of Charles</Typography>
            </Link>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} varient="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>)}
            </Toolbar>
        </AppBar>
    )
}