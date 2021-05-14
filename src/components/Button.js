import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
    background-color: #000d1a;
    color: #fff;

    white-space: nowrap;
    outline: none;

    min-width: 100px;
    max-width: 200px;
    max-height: 70px;

    cursor: pointer;

    text-decoration: none;
    transition: .3s;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 16px 48px;
    font-size: 20px;

    &:hover{
        transform: translateY(-2px);
    }
`;

export default Button
