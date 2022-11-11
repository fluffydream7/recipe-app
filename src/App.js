import {
  Container
} from "@mui/material";
import {
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import RecipePage from "./components/RecipePage";
import RecipesPage from "./components/RecipesPage";
import BottomBar from "./components/BottomBar";
import HomePage from "./components/HomePage";
import { useState } from "react";
import BookmarksPage from "./components/BookmarksPage";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  return (
    <Container sx={{ my: 5 }} maxWidth="sm">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage bookmarked={bookmarked} setBookmarked={setBookmarked}/>} />
        <Route path="recipes" element={<RecipesPage bookmarked={bookmarked} setBookmarked={setBookmarked}/>} />
        <Route path="recipes/:id" element={<RecipePage />} />
        <Route path="bookmarks" element={<BookmarksPage bookmarked={bookmarked} setBookmarked={setBookmarked}/>} />
      </Routes>
      <BottomBar />
    </Container>
  );
}

export default App;
