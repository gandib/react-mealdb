import Button from 'react-bootstrap/Card';
import React from 'react';
import Card from 'react-bootstrap/Card';
import './Meal.css';
import { useNavigate } from 'react-router-dom';

const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb, idMeal } = props.meal;
    const navigate = useNavigate();
    const showMealDetail = () => {
        navigate('/restaurent/' + idMeal);
    }

    return (
        <Card>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Text>
                    {strInstructions.slice(0, 100)}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                <Button onClick={showMealDetail} className='card-btn'>Show Detail</Button>
            </Card.Footer>
        </Card>
    );
};

export default Meal;