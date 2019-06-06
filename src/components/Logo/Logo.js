import React from 'react';
import styled from 'styled-components';

import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = styled.div `
    background-color:white;
    padding: 8px;
    height: 60%;
    border-radius:15px;
    box-shadow: 2px 2px 9px 0px rgba(0,0,0,0.5);
    transition: all 0.1s ease-in-out;

    img {
        height: 90%;
        
    }

    :hover {
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.5);
    }
`

export default (props) => (
    <Logo>
        <img src={burgerLogo} alt="MyBurger"/>
    </Logo>
);