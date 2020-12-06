/* eslint-disable*/
import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import ListHeading from "./components/ListHeading";
import List from "./components/List";
import SearchSecond from "./components/SearchSecond";
import FavoritHeading from "./components/FavoritHeading";
import FavoriteList from "./components/FavoriteList";
import { Navbar, Button, ListGroup } from "react-bootstrap";

function App() {
    let [recipe, setRecipe] = useState([]);
    let [searchingredients, setSearchingredients] = useState("");
    let [searchQuery, setSearchQuery] = useState("");
    let [explain, setExplain] = useState(false);
    let [favorite, setFavorite] = useState([]);
    let [moreButton, setMoreButton] = useState(1);

    async function getRecipeRequest(searchingredients, searchQuery, moreButton) {
        const url = `http://www.recipepuppy.com/api/?i=${searchingredients}&q=${searchQuery}&p=${moreButton}`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.results) {
            setRecipe(responseJson.results);
        }
    }

    function addFavorite(recipe) {
        const newList = [...favorite, recipe];
        setFavorite(newList);
    }

    function removeFavorite(recipe) {
        const newList = favorite.filter((favorite) => favorite.href !== recipe.href);
        setFavorite(newList);
    }

    useEffect(() => {
        getRecipeRequest(searchingredients, searchQuery, moreButton);
    }, [searchingredients, searchQuery, moreButton]);

    return (
        <div className="App">
            <div className="container">
                <Navbar bg="dark" variant="dark" className="row d-flex align-items-center mt-4 mb-4">
                    <Navbar.Brand href="#home">
                        <ListHeading heading="Recipe" />
                    </Navbar.Brand>
                    <SearchBox searchingredients={searchingredients} setSearchingredients={setSearchingredients} />
                    <SearchSecond searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </Navbar>
                <ListGroup variant="flush" className="row">
                    <List recipe={recipe} explain={explain} setExplain={setExplain} addFavorite={addFavorite} />
                </ListGroup>
                <Navbar bg="dark" variant="dark" className="row d-flex align-items-center mt-4 mb-4">
                    <Navbar.Brand href="#home">
                        <FavoritHeading heading="Favorite Recipe" />
                    </Navbar.Brand>
                </Navbar>
                <ListGroup variant="flush" className="row">
                    <FavoriteList recipe={favorite} removeFavorite={removeFavorite} />
                </ListGroup>
                <Button
                    variant="primary"
                    onClick={() => {
                        setMoreButton(moreButton + 1);
                    }}
                >
                    Next Page
                </Button>
            </div>
        </div>
    );
}

export default App;
