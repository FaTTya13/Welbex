import styled from 'styled-components';
import { Socials } from '../Footer/Footer.styled';
const purpleBall = require('../../assets/images/purpleBall.png');
const redBall = require('../../assets/images/redBall.png');

export const Container = styled.div`
    height: 55px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #0E1014;
    color: #E4E5EA;
    font-family: 'Inter', sans-serif;

    @media (min-width: 1170px) {
        width: 1140px;
        height: 165px;
        margin: 50px 0 0 0;
        padding: 0;
        align-items: flex-start;
        justify-content: space-between;
        background-color: transparent;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: -50px;
            left: 740px;
            width: 60px;
            height: 60px;
            background-image: url(${purpleBall});
            background-size: cover;
        }
        &::after {
            content: '';
            position: absolute;
            top: 15px;
            left: 420px;
            width: 83px;
            height: 83px;
            background-image: url(${redBall});
            background-size: cover;
        }
    }
`;

export const Navbar = styled.div`
    @media (min-width: 1170px) {
        width: 500px;
        display: flex;
        justify-content: space-between;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 470px;
            left: 500px;
            width: 28px;
            height: 28px;
            background-image: url(${redBall});
            background-size: cover;
        }
    }
`

export const LogoBlock = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 1170px) {
        display: none;
    }
`

export const Link = styled.a`
    color: #E4E5EA;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 8px;

    @media (min-width: 1170px) {
        font-size: 16px;
    }

`;

export const ContactsBlock = styled.div`
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (min-width: 1170px) {
        width: 305px;
        justify-content: initial;

        ${Socials} {
            width: 150px;
            margin: 0;
    
            ${Link} {
                padding: 0 15px;
            }
        }
    }

    @media (max-width: 1170px) {
        display: none;
    }
`

export const Text = styled.p`
    color: #E4E5EA;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 300;
`;

export const HideOnLrgScreen = styled.div`
  @media (max-width: 1170px) {
    display: none;
  }
`;

export const Img = styled.img``