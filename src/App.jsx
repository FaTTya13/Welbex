import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';
const background = require('./assets/images/bg-mobile.png');

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-image: url(${background});
  background-color: #0E1014;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Inter', sans-serif;
`;

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;