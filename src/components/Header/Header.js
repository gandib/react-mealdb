import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my MealDb!</h1>
            <nav>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/restaurent'>Restaurent</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;