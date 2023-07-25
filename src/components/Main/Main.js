import React from "react";
import { Container,Btn, Wrapper, Promo, HeaderText, Bonuses, Text, GradientText, TaglineText, GradientTextSm, List, ListItem, HideOnLrgScreen, HideOnMinScreen} from "./Main.styled";

function Main() {
  return (
    <Container>
      <Wrapper>
        <Promo>
          <HeaderText>Зарабатывайте <br /> больше</HeaderText>
          <GradientText>с WELBEX</GradientText>
          <TaglineText>Развиваем и контролируем продажи за вас</TaglineText>
        </Promo>
        <Bonuses>
          <TaglineText>Вместе с <GradientTextSm as="span">бесплатной консультацией</GradientTextSm> мы дарим:</TaglineText>
          <List>
            <ListItem>
              <Text>Виджеты</Text>
              <TaglineText>30 готовых решений</TaglineText>
            </ListItem>
            <ListItem>
              <Text>Dashboard</Text>
              <TaglineText>с показателями вашего бизнеса</TaglineText>
            </ListItem>
            <ListItem>
              <Text>Skype аудит</Text>
              <TaglineText>отдела продаж и CRM системы</TaglineText>
            </ListItem>
            <ListItem>
              <HideOnLrgScreen>
                <Text>35 дней</Text>
                <TaglineText>использования CRM</TaglineText>
              </HideOnLrgScreen>
              <HideOnMinScreen>
                <Text>месяц AMOCRM</Text>
              </HideOnMinScreen>
            </ListItem>
          </List>
        </Bonuses>
      </Wrapper>
        <Btn>Получить консультацию</Btn>
    </Container>
  );
}

export default Main;