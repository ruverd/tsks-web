import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0rem 1rem;

  h1 {
    color: var(--gray-50);
  }

  img {
    cursor: pointer;

    transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
