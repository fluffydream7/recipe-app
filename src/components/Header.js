import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    arial-label="menu"
                >
                    <MenuIcon fontSize="large"/>
                </IconButton>
                <Typography
                    variant="h4"
                    component="div"
                >
                    LOGO
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;