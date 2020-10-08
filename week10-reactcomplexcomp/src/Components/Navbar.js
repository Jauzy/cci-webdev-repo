import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

import MenuIcon from '@material-ui/icons/Menu';

const Navbar = props => {
    return (
        <AppBar position="static">
            <Toolbar style={{ display: 'flex' }}>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ marginRight: 'auto' }}>
                    News
                </Typography>
                <Button>Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar