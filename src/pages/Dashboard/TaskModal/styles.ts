import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--gray-50);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input, textarea {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    border-radius: 0.25rem;
    background: var(--gray-850);
    border: none;
    border-radius: 1rem;
    color: var(--gray-50);

    font-size: 1rem;

    &::placeholder {
      color: #777777
    }

    & + textarea {
      margin-top: 1.25rem;
    }
  }

  textarea {
    height: 10rem;
    resize: none;
    padding-top: 1.25rem;
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    background-color: var(--purple);

    margin-top: 1.5rem;

    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--gray-50);

    border-radius: 1rem;
    border: none;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }    
  }
`;
