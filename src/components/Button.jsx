import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => (props.primary ? '#007bff' : '#6c757d')};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.primary ? '#0056b3' : '#5a6268')};
  }
`;
