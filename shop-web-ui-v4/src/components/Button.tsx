import styled from "styled-components";

const Button = styled.button`
  background-color: tomato;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  ${(props: any) => {
    if (props.disabled) {
      return `
        background-color: #DEF;
        cursor: not-allowed;
      `;
    }
  }}
`;

export default Button;
