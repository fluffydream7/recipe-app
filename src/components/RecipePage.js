import {
    Card, 
    Typography, 
    CardMedia, 
    List, 
    ListItem, 
    ListItemText, 
    Rating, 
    CardContent, 
    Stack, 
    Divider, 
    ListItemAvatar,
    Avatar,
    ListItemButton,
    TextField,
    Button,
    Paper,
    Collapse
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import CheckIcon from '@mui/icons-material/Check';
import data from "../data.json";
import { Box } from "@mui/system";


const RecipePage = () => {
    const [rating, setRating] = useState(0);
    const [steps, setSteps] = useState(new Set());
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const params = useParams();
    const id = Number(params.id)
    const { 
        title, 
        picture, 
        servings, 
        preparationTime, 
        cookingTime, 
        ingredients, 
        instructions 
    } = data.recipes.find((element) => id === element.id);

    return (
        <>
            <Card>
                <Typography variant="h4" textAlign="center">
                    {title}
                </Typography>
                <CardMedia
                    component="img"
                    image={picture}
                    height="250"
                />
                <CardContent>
                    <Stack spacing={0.5} divider={<Divider orientation="vertical" flexItem/>} direction="row">
                        <Rating 
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
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
                    <Typography variant="h5">
                        Ingredients
                    </Typography>
                    <List dense>
                        {ingredients.map(({ name, amount }) => (
                            <ListItem key={name}>
                                <ListItemText 
                                    primary={name}
                                    secondary={amount}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant="h5">
                        Instructions
                    </Typography>
                    <List>
                        {instructions.map((instruction, index) => {
                            const checked = steps.has(index);
                            return(
                            <ListItemButton 
                                key={instruction}
                                onClick={() => {
                                    const newSteps = new Set(steps);
                                    if (newSteps.has(index)) {
                                        newSteps.delete(index);
                                    } else {
                                        newSteps.add(index);
                                    }
                                    setSteps(newSteps);
                                }}
                            >
                                <ListItemAvatar>
                                    <Avatar sx={{ width: 30, height: 30, bgcolor: checked ? 'primary.main' : 'grey.500'}}>
                                        {checked ? <CheckIcon /> : index + 1}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText 
                                    primary={instruction}
                                />
                            </ListItemButton>
                        )})}
                    </List>
                </CardContent>
            </Card>
            <Stack spacing={1} my={1} alignItems="flex-start">
                <Typography variant="subtitle1">User Comments</Typography>
                <Box width={1}>
                    <TransitionGroup>
                        {comments.map((comment) => (
                            <Collapse sx={{ mb: 1 }} key={comment}>
                                <Paper sx={{ p: 0.5 }}>{comment}</Paper>
                            </Collapse>
                        ))}
                    </TransitionGroup>
                </Box>
                <TextField
                    multiline
                    minRows={3}
                    maxRows={5} 
                    label="Comment"
                    variant="filled"
                    fullWidth
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value)
                    }}
                />
                <Button variant="outlined" onClick={() => {
                    setComments([...comments, comment])
                }}>
                    Comment
                </Button>
            </Stack>
        </>
    )
}

export default RecipePage;