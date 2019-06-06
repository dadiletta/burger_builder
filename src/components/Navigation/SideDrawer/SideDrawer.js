import React from 'react';
import styled from 'styled-components';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Drawer = styled.div `
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;

    @media (min-width: 500px){
        display: none;
    }

    &.open {
        transform: translateX(0);
    }

    &.close {
        transform: translateX(-100%);
    }


`;

export default (props) => {
    // ... 
    return (
        <Drawer>
            <Logo/>
            <nav>
                <NavigationItems />
            </nav>
        </Drawer>
    );
}