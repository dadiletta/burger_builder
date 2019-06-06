import React, {Fragment} from 'react';
import styled from 'styled-components';
import Button, {Success, Danger} from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                    </li>);
            });
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <Success onClick={props.purchaseContinue}>Proceed</Success><Danger onClick={props.purchaseCancel}>Cancel</Danger>
        </Fragment>
    );
};

export default orderSummary;