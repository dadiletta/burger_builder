import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    }

    :first-of-type {
    margin-left: 0;
    padding-left: 0;
    }
`

export const Success = styled(Button)`
    color: #5C9210;
`

export const Danger = styled(Button)`
    color: #944317;
`

export default Button;