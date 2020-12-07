import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, TabsContainer, TabItem, TabText,
} from './styles';

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
      <TabItem>
          <Icon name="api" size={28} color="#FFF" />
          <TabText>Pix</TabText>
        </TabItem>
        <TabItem>
          <Icon name="qr-code" size={28} color="#FFF" />
          <TabText>Pagar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="person-add-alt" size={28} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-circle-up" size={28} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-circle-down" size={28} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={28} color="#FFF" />
          <TabText>Empréstimos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="credit-card" size={28} color="#FFF" />
          <TabText>Cartão virtual</TabText>
        </TabItem>
        <TabItem>
          <Icon name="smartphone" size={28} color="#FFF" />
          <TabText>Recarga de celular</TabText>
        </TabItem>
        <TabItem>
          <Icon name="tune" size={28} color="#FFF" />
          <TabText>Ajustar limite</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={28} color="#FFF" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
        <TabItem>
          <Icon name="speaker-notes" size={28} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="favorite-border" size={28} color="#FFF" />
          <TabText>Doação</TabText>
        </TabItem>
        <TabItem>
          <Icon name="help-outline" size={28} color="#FFF" />
          <TabText>Me ajuda</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
