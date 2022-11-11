import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Stack,
    Divider,
    CardActionArea,
} from "@mui/material"
import { Link } from "react-router-dom";

const Recipe = ({ recipe: { id, picture, title, servings, preparationTime, cookingTime }, bookmarked, setBookmarked }) => (
        <Card>
            <CardActionArea component={Link} to={`/recipes/${id}`}>
                <CardMedia 
                    component="img"
                    height="140"
                    src={picture}
                    alt="pasta"
                />
                <CardContent>
                    <Typography variant="h4">
                        {title}
                    </Typography>
                    <Stack spacing={0.5} divider={<Divider orientation="vertical" flexItem/>} direction="row">
                        <Typography >
                            Servings {servings}
                        </Typography>
                        <Typography color="text.secondary">
                            Prep {preparationTime}min
                        </Typography>
                        <Typography color="text.secondary">
                            Cook {cookingTime}min
                        </Typography>
                    </Stack>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button>
                    Share
                </Button>
                <Button variant={bookmarked.includes(id) ? 'outlined' : 'contained'} onClick={() => {
                    if (bookmarked.includes(id)) {
                        const index = bookmarked.indexOf(id)
                        setBookmarked([...bookmarked.slice(0, index), ...bookmarked.slice(index + 1)])
                    } else {
                        setBookmarked([...bookmarked, id])
                    }
                }}>
                    {bookmarked.includes(id) ? 'Bookmarked' : 'Bookmark'}
                </Button>
            </CardActions>
        </Card>
    );

export default Recipe;