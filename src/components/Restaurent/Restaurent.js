import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurent.css';

const Restaurent = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText]);

    const searchFood = e => {
        // const searchText = e.target.value;
        setSearchText(e.target.value);
        const match = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchText));
        setSearchResult(match);
    }
    return (
        <div>
            <h2>Find the food you want</h2>
            <input onChange={searchFood} type="text" placeholder='Search here...' />
            <h2>Result found: {searchResult.length}</h2>
            <div className='cardGroup'>
                {/* <CardGroup className='cardGroup'> */}
                {
                    searchResult.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
                {/* </CardGroup> */}
            </div>
        </div>
    );
};

export default Restaurent;