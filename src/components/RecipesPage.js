import {
  Autocomplete,
  TextField,
  Stack
} from "@mui/material";
import Recipe from "./Recipe";
import CountryFilter from "./CountryFilter";
import data from "../data.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecipesPage = ({ bookmarked, setBookmarked }) => {
    const navigate = useNavigate();
    const [countryFilter, setCountryFilter] = useState(null);
    const recipes = data.recipes.filter((recipe) => {
      if (!countryFilter) {
        return true;
      }
      return recipe.country === countryFilter;
    })
    return (
      <>
        <Autocomplete 
          options={data.recipes}
          renderInput={(params) => <TextField {...params} />}
          getOptionLabel={(element) => element.title}
          onChange={(_event, value) => navigate(`/recipes/${value.id}`)}
        />
        <CountryFilter setFilter={setCountryFilter} currentFilter={countryFilter} />
        <Stack spacing={2}>
            {recipes.map((recipe) => <Recipe recipe={recipe} bookmarked={bookmarked} setBookmarked={setBookmarked} />)}
        </Stack>  
      </>
    )
}

export default RecipesPage;