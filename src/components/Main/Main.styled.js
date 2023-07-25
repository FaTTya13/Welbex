import styled from 'styled-components';

export const Container = styled.div`
    width: 285px;
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    color: #E4E5EA;
    background-color: #0E1014;
    background-image: url(${require('../../assets/images/bg-mobile.png')});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Inter', sans-serif;

    @media (min-width: 1170px) {
        width: 1140px;
        padding: 0;
        justify-content: space-between;
        background-color: transparent;
        background-image: none;
    }
`;

export const Btn = styled.button`
    width: 262px;
    height: 61px;
    margin-top: 40px;
    align-self: end;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #E4E5EA;
    background-color: #4077F3;
    border: none;
    cursor: pointer;

    @media (max-width: 1170px) {
        display: none;
    }
`

export const TaglineText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 400;
    
    @media (max-width: 1170px) {
        &:not(:first-of-type) {
            display: none;
        }
    }
`;
    
export const Bonuses = styled.div`
    @media (min-width: 1170px) {
        width: 344px;
        display: flex;
        flex-direction: column;
        text-align: right
    }
`;

export const Wrapper = styled.div`
    @media (min-width: 1170px) {
        display: flex;   
        justify-content: space-between; 
    }
`
export const Promo = styled.div`
    display: flex;
    flex-direction: column;
`

export const HeaderText = styled.h1`
    margin: 0;
    font-size: 36px;
    font-weight: 400;

    @media (min-width: 1170px) {
        font-size: 48px;      
    }
`;

export const GradientText = styled.p`
    margin: 0;
    font-size: 36px;
    font-weight: 900;
    color: transparent;
    background-image: linear-gradient(92deg, #FCB045 27.14%, #FF3F78 121.36%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    @media (min-width: 1170px) {
        font-size: 48px;      
    }
`;

export const GradientTextSm = styled(GradientText)`
    margin: 0;
    font-size: 18px;
    font-weight: 700;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 400;

    @media (min-width: 1170px) {
        justify-content: space-between;
        font-family: Inter, sans-serif;
        font-size: 18px;
        font-weight: 500;
    }
`;

export const ListItem = styled.li`
    margin: 0 15px 10px 20px;
    text-transform: uppercase;
    &::before {
        position: relative;
        top: 12px;
        left: -15px;
        content: url(${require('../../assets/images/line.png')});
    }

    @media (min-width: 1170px) {
        margin: 0 0 20px 0;
        max-width: 160px;
        &::before {
            content: "";
        }

        ${TaglineText} {
            margin: 10px 0 0 0;
            font-family: Montserrat;
            font-size: 16px;
            font-weight: 400;
        }
    }
`;

export const Text = styled.p`
    margin: 0;
    font-weight: 500;
`;

export const HideOnLrgScreen = styled.div`
  @media (max-width: 1170px) {
    display: none;
  }
`;

export const HideOnMinScreen = styled.div`
  @media (min-width: 1171px) {
    display: none;
  }
`;