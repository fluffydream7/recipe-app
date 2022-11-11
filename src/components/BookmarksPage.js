import { Stack } from "@mui/system";
import React from "react";
import Bookmark from "./Bookmark";
import data from "../data.json";

const BookmarksPage = ({bookmarked, setBookmarked}) => {
    const recipes = data.recipes.filter(({id}) => bookmarked.includes(id));
    return (
        <Stack spacing={2}>
            {recipes.map((recipe) => <Bookmark recipe={recipe} bookmarked={bookmarked} setBookmarked={setBookmarked} />)}
        </Stack>
    )
}

export default BookmarksPage;