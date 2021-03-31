import styled from 'styled-components';

export const Container = styled.header`
  background: none;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    background: var(--purple);
    height: 3rem;
    line-height: 1.5rem;
    color: var(--gray-50);
    border: none;
    padding: 0 3rem;
    border-radius: 3rem;

    transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

