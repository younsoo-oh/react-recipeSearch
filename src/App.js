/* eslint-disable*/
import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import ListHeading from "./components/ListHeading";
import List from "./components/List";
import SearchSecond from "./components/SearchSecond";

function App() {
    let [recipe, setRecipe] = useState([]);
    let [searchingredients, setSearchingredients] = useState("");
    let [searchQuery, setSearchQuery] = useState("");

    async function getRecipeRequest(searchingredients, searchQuery) {
        const url = `http://www.recipepuppy.com/api/?i=${searchingredients}&q=${searchQuery}&p=1`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.results) {
            setRecipe(responseJson.results);
        }
    }

    useEffect(() => {
        getRecipeRequest(searchingredients, searchQuery);
    }, [searchingredients, searchQuery]);

    return (
        <div className="App">
            <div className="container">
                <div className="row d-flex align-items-center mt-4 mb-4">
                    <ListHeading heading="Recipe" />
                    <SearchBox searchingredients={searchingredients} setSearchingredients={setSearchingredients} />
                    <SearchSecond searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </div>
                <div className="row">
                    <List recipe={recipe} />
                </div>
            </div>
        </div>
    );
}

export default App;
