import React from 'react';
import styled from 'styled-components';
import NavItem from './NavigationItem/NavigationItem';

const NavList = styled.ul `
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    height: 100%;

    li {
        margin: 0;
        box-sizing: border-box;
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
    }

    li a {
        color: white;
        text-decoration: none;
        height: 100%;
        padding: 16px 10px;
        border-bottom: 4px solid transparent;
        box-sizing: border-box;
        display: block;
        font-size:.9em;
        text-align: center;
    }

    li a:hover,
    li a:active,
    li a.active {
        background-color: #8F5C2C;
        border-bottom: 4px solid #40A4C8;
        color: white;
    }
`

export default () => (
    <NavList>
        <NavItem link="/" active>Builder</NavItem>
        <NavItem link="/">Checkout</NavItem>
    </NavList>
);