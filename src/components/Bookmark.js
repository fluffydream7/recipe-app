import { Typography, ButtonBase } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Bookmark = ({recipe: { id, title, picture }}) => {
    return (
        <ButtonBase 
            sx={{ 
                backgroundImage: `url(${picture})`, 
                borderRadius: 1, 
                backgroundSize: 'cover', 
                p: 2
            }}
            component={Link} to={`/recipes/${id}`}
        >
            <Typography color="white" variant="h4">
                {title}
            </Typography>
        </ButtonBase>
    )
}

export default Bookmark;