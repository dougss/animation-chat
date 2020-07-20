import styled from "styled-components";

export const Input = styled.input`
  border: none;
  padding: 10px 5px;
  color: #2e2d33;
  font-size: 20px;
  letter-spacing: 0;
  font-weight: 400;
  background-color: #eeeeee;
  outline: none;
`;

export const InputFormRoot = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 30px;
  align-items: center;
`;

export const BooleanFormRoot = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 30px;
  justify-content: center;
  align-items: center;
`;
