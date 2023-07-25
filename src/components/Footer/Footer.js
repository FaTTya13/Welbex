import React from "react";
import { Container, Section, Title, List, ListItem, Menu, Socials, Copyright, Link } from "./Footer.styled";
const telegram = require('../../assets/images/Telegram.png');
const viber = require('../../assets/images/Viber.png');
const whatsup = require('../../assets/images/WhatsUp.png');

function Footer() {
  return (
    <Container>
      <Section>
        <Title>О компании</Title>
        <List>
          <ListItem><Link href="#">Партнёрская программа</Link></ListItem>
          <ListItem><Link href="#">Вакансии</Link></ListItem>
        </List>
      </Section>
      <Section>
        <Title>Меню</Title>
        <Menu>
          <List>
            <ListItem><Link href="#">Расчет cтоимости</Link></ListItem>
            <ListItem><Link href="#">Услуги</Link></ListItem>
            <ListItem><Link href="#">Виджеты</Link></ListItem>
            <ListItem><Link href="#">Интеграции</Link></ListItem>
            <ListItem><Link href="#">Наши клиенты</Link></ListItem>
          </List>
          <List>
            <ListItem><Link href="#">Кейсы</Link></ListItem>
            <ListItem><Link href="#">Благодарность клиентов</Link></ListItem>
            <ListItem><Link href="#">Сертификаты</Link></ListItem>
            <ListItem><Link href="#">Блог на Youtube</Link></ListItem>
            <ListItem><Link href="#">Вопрос / Ответ</Link></ListItem>
          </List>
        </Menu>
      </Section>
      <Section className="contacts">
        <Title>Контакты</Title>
        <List className="contactsInfo">
        <Link href="tel:+75555555555">+7 555 555-55-55</Link>
          <Socials>
            <Link href="#"><img src={telegram} alt="telegram icon"/></Link>
            <Link href="#"><img src={viber} alt="viber icon"/></Link>
            <Link href="#"><img src={whatsup} alt="whatsup icon"/></Link>
          </Socials>
          <ListItem>Москва, Путевой проезд 3с1, к 902</ListItem>
        </List>
        <Copyright>©WELBEX 2022. Все права защищены. <br /> <Link href="#">Политика конфиденциальности</Link></Copyright>
      </Section>
    </Container>
  );
}

export default Footer;