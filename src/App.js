import React, {useEffect, useState} from 'react';
import * as axios from "axios";
import Recipe from "./Components/Recipe";
import Alert from "./Components/Alert";
import './App.css';

function App() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    const APP_ID = "4e9f05eb";
    const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async () => {
        if (query !== "") {
            const result = await axios.get(url);
            if (!result.data.more) {
                return setAlert("No food with such name");
            }
            // console.log(result);
            setRecipes(result.data.hits);
            setQuery("");
            setAlert("");
        } else {
            setAlert("Please fill the form");
        }
    };

    const onSubmit = (event) => {
        event.preventDefault()
        getData()
    }
    const onChange = (event) => {
        setQuery(event.target.value)
    }

    return (
        <div className="App">
            <h1>Food Searching App</h1>
            <form onSubmit={onSubmit} className="search-form">
                {alert !== "" && <Alert alert={alert} />}
                <input
                    type="text"
                    name="query"
                    onChange={onChange}
                    value={query}
                    autoComplete="off"
                    placeholder="Search Food"
                />
                <input type="submit" value="Search" />
            </form>
            <div className="recipes">
                {recipes !== [] &&
                recipes.map((recipe, index) => <Recipe key={index} recipe={recipe} />)}
            </div>
        </div>
  );
}

export default App;
