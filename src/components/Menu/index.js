import React from 'react';

import /*qrcode*/ logo from '~/assets/qrcode.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Top, Logo, Nav, NavItem, NavText, SignOutButton, SignOutButtonText, NavItemButton
} from './styles';


export default function Menu({ translateY }) { 
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}
    >
      <Top>
        <Logo source={logo} />
      </Top>

      <Nav>
        
        <NavItemButton onPress={() => {}}>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItemButton>
        <NavItemButton>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItemButton>
        <NavItemButton>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItemButton>
        <NavItemButton>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItemButton>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  ); 
}