import React from "react";
import { Container, Link, Text, Img, Navbar, LogoBlock, ContactsBlock, HideOnLrgScreen } from "./Header.styled";
import { Socials} from "../Footer/Footer.styled";
const telegram = require('../../assets/images/Telegram.png');
const viber = require('../../assets/images/Viber.png');
const whatsup = require('../../assets/images/WhatsUp.png');
const logo = require('../../assets/images/logo_welbex.png');

function Header() {
  return (
    <Container>
      <LogoBlock>
        <Img src={logo} alt="logo-welbex" />
        <Text>крупный интегратор CRM <br />в Росcии и ещё 8 странах</Text>
      </LogoBlock>
      <Navbar>
        <Link href="#">Услуги</Link>
        <Link href="#">Виджеты</Link>
        <Link href="#">Интеграции</Link>
        <Link href="#">Кейсы</Link>
        <HideOnLrgScreen>
          <Link href="#">Сертификаты</Link>
        </HideOnLrgScreen>
      </Navbar>
      <ContactsBlock>
        <Link href="tel:+75555555555">+7 555 555-55-55</Link>
        <Socials>
          <Link href="#"><img src={telegram} alt="telegram icon"/></Link>
          <Link href="#"><img src={viber} alt="viber icon"/></Link>
          <Link href="#"><img src={whatsup} alt="whatsup icon"/></Link>
        </Socials>
      </ContactsBlock>
    </Container>
  );
}

export default Header;