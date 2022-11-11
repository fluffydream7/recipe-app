import React, { useState } from "react";
import {
    BottomNavigation,
    BottomNavigationAction,
} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';    
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, matchPath, useLocation } from 'react-router-dom';

const links = [{
    icon: <HomeIcon />,
    path: '/',
},
{
    icon: <SearchIcon />,
    path: '/recipes',
    match: '/recipes/*'
},
{
    icon: <BookmarkIcon />,
    path: '/bookmarks', 
},
{
    icon: <NotificationsIcon />,
    path: '/notifications',
}
]
const BottomBar = () => {
    const location = useLocation();
    const value = links.findIndex((element) => matchPath(
        { path: element.match || element.path },
        location.pathname))
    return (
        <BottomNavigation
            value={value}
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: 'secondary.main'
            }}
        >
            {links.map((element, index) => (
                <BottomNavigationAction 
                    icon={element.icon}
                    component={Link}
                    to={element.path}
                    value={index}
                />
            ))}
        </BottomNavigation>
    )
}

export default BottomBar;