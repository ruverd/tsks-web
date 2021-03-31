import React from 'react';

import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface IHeaderProps {
  onOpenTaskModal: () => void;
}

export function Header({ onOpenTaskModal }: IHeaderProps){
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="tsks." />
        <button type="button" onClick={onOpenTaskModal}>
          New Task
        </button>
      </Content>
    </Container>
  )
}