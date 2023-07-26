import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    color: #E4E5EA;
    font-family: 'Inter', sans-serif;

    @media (min-width: 1170px) {
        width: 1140px;
        display: flex;
        padding-top: 50px;
        flex-direction: row;
        justify-content: space-between;
        background-color: transparent;
    }
`;

export const Section = styled.div`
    display: flex;
    padding: 0 10px;
    flex-direction: column;
    background-color: #0E1014;
    color: #E4E5EA;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;

    @media (min-width: 1170px) {
        background-color: transparent;

        &.contacts {
            text-align: right;
        }
    }
`;

export const Menu = styled(Section)`
    padding: 0;
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: 1170px) {
        width: 340px;
        background-color: transparent;
    }
`

export const Title = styled.h3`
    margin-bottom: 0;
    color: #656566;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;

    @media (min-width: 1170px) {
        font-size: 14px;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    list-style-type: none;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;

    @media (min-width: 1170px) {
        &.contactsInfo {
            align-items: flex-end;
        }
    }
`;

export const Link = styled.a`
    color: #E4E5EA;
    text-decoration: none;
`;

export const ListItem = styled.li`
    margin-bottom: 5px;

    ${Link} {
        text-decoration: none;
    }
`;

export const Socials = styled(Menu)`
    margin: 5px 0;
    max-width: 80px;

    @media (min-width: 1170px) {
        margin: 5px 0;
        max-width: 80px;
    }
`;

export const Copyright = styled.p`
    color: #E4E5EA;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 40px;

    ${Link} {
        text-decoration: underline;
    }

    @media (min-width: 1170px) {
        margin-top: 40px;
        margin-bottom: 20px;
    }
`;