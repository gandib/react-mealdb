import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const { mealDetailId } = useParams();
    const [mealDetails, setMealDetails] = useState({});
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetailId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMealDetails(data.meals));
    }, [mealDetailId]);
    console.log(mealDetails)
    return (
        <div>
            <h2>This is meal detail for: {mealDetailId}</h2>
            <h3>Name: {mealDetails[0]?.strMeal}</h3>
            <h3>Source: {mealDetails[0]?.strSource}</h3>
            <h3>Detail: {mealDetails[0]?.strInstructions}</h3>
        </div>
    );
};

export default MealDetail;