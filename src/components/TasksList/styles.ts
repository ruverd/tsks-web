import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3.75rem;

  nav {
    button {
      &:nth-child(2) {
        margin-left: 1.5rem;
      }
    }
  }
`;

interface IButtonProps {
  isActive: boolean;
}

export const Button = styled.button<IButtonProps>`
  font-size: 1rem;
  background: var(--gray-750);
  height: 3rem;
  line-height: 1.5rem;
  color: var(--gray-50);
  border: none;
  padding: 0 3rem;
  border-radius: 3rem;
  border: 1px solid var(--gray-750);

  transition: filter .2s;

  &:hover {
    filter: brightness(0.9);
  }

  background: ${props => props.isActive
    ? '#414052'
    : '#181820'
  };

  border-color: ${props => props.isActive
    ? '#181820'
    : '#414052'
  };
`;

export const Task = styled.div`
  margin-top: 3.75rem;
  background: var(--gray-850);
  margin-bottom: 2rem;
  border-radius: 1.25rem;

  header {
    display: flex;
    align-items: center;
    padding: 1.25rem;
    justify-content: space-between;
  }

  section {
    background: var(--gray-900);
    color: var(--gray-50);
    padding: 1.25rem;
    line-height: 2rem;
  }

  footer {
    color: var(--gray-50);
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 300;

    padding: 1.25rem;
  }
`;

export const Checkbox = styled.label`
  display: block;
  position: relative;
  color: var(--gray-50);

  padding-left: 3rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 2rem;
      
  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;

    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;

    height: 25px;
    width: 25px;
    border-radius: 20px;
    background-color: var(--gray-850);
    border: 3px solid var(--purple);

    transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
    }

    &:after {
      content: "";
      position: absolute;
      display: none;

      left: 5px;
      top: 2px;
      width: 5px;
      height: 10px;
      border: solid white;
      
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }

  input:checked ~ .checkmark {
    background-color: #2196F3;
  } 

  input:checked ~ .checkmark:after {
    display: block;
  }
`;

export const NoDataMessage = styled.div`
  margin-top: 3.75rem;
  margin-bottom: 3.75rem;
  color: var(--purple);
  font-size: 2rem;
  font-weight: 600;
`;

