import { Typography, Stack } from "@mui/material";
import React from "react";
import Recipe from "./Recipe";
import data from "../data.json";

const HomePage = ({ bookmarked, setBookmarked }) => {
    const recipe = data.recipes[0]
    return (
        <Stack spacing={2} mt={10}>
            <Typography variant="h1" color="primary.main">
                Welcome !
            </Typography>
            <Typography variant="h4" fontSize={26}>
                Featured Recipe:
            </Typography>
            <Recipe recipe={recipe} bookmarked={bookmarked} setBookmarked={setBookmarked}/>
        </Stack>
    )
}

export default HomePage;