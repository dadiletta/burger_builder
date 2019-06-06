import React from 'react';
import styled from 'styled-components';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

const StyledBurger = styled.div`
    width: 90%;
    margin: auto;
    height: 350px;
    overflow-y: auto;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;

    @media (min-width: 400px) and (min-height: 400px) {
        width: 350px;
        height: 300px; 
    }
    @media (min-width: 500px) and (min-height: 401px) {
        width: 450px;
        height: 400px; 
    }

    @media (min-width: 1000px) {
        width: 700px;
        height: 600px; 
    }
`

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients.</p>
    }
    return (
        <StyledBurger>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </StyledBurger>
    )
};

export default burger;