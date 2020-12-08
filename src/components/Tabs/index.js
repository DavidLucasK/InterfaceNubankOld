import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, TabsContainer, TabItem, TabText, TabItemButton,
} from './styles';

export default function Tabs({ translateY }) {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 30],
          extrapolate: 'clamp',
        }),
      }],
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp',
      }),
    }}
    >
      <TabsContainer>
        <TabItemButton onPress={() => {}}>
          <Icon name="api" size={28} color="#FFF" />
          <TabText>Pix</TabText>
        </TabItemButton>
        <TabItemButton>
          <Icon name="qr-code" size={28} color="#FFF" />
          <TabText>Pagar</TabText>
        </TabItemButton>
        <TabItemButton>
          <Icon name="person-add-alt" size={28} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItemButton>
        <TabItemButton>
          <Icon name="arrow-circle-up" size={28} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItemButton>
        <TabItemButton>
          <Icon name="arrow-circle-down" size={28} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItemButton>
        <TabItemButton>
          <Icon name="arrow-downward" size={28} color="#FFF" />
          <TabText>Empréstimos</TabText>
        </TabItemButton>
        <TabItemButton>
          <Icon name="credit-card" size={28} color="#FFF" />
          <TabText>Cartão virtual</TabText>
        </TabItemButton>
        <TabItemButton>
          <Icon name="smartphone" size={28} color="#FFF" />
          <TabText>Recarga de celular</TabText>
        </TabItemButton>
        <TabItemButton>
          <Icon name="tune" size={28} color="#FFF" />
          <TabText>Ajustar limite</TabText>
        </TabItemButton>
        <TabItemButton>
          <Icon name="lock" size={28} color="#FFF" />
          <TabText>Bloquear cartão</TabText>
        </TabItemButton>
        <TabItemButton>
          <Icon name="speaker-notes" size={28} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItemButton>
        <TabItemButton>
          <Icon name="favorite-border" size={28} color="#FFF" />
          <TabText>Doação</TabText>
        </TabItemButton>
        <TabItemButton>
          <Icon name="help-outline" size={28} color="#FFF" />
          <TabText>Me ajuda</TabText>
        </TabItemButton>
      </TabsContainer>
    </Container>
  );
}
