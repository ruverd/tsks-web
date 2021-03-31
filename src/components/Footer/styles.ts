import styled from 'styled-components';

export const Container = styled.footer`
  hr {
    height:0.5px;
    border-width:0;
    color: var(--gray-750);
    background-color: var(--gray-750);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      padding: 1.25rem;
      color: var(--gray-50);
      font-weight: 300;
    }
  }
`;
