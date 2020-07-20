import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  display: grid;
  grid-template-columns: 700px;
  align-items: center;
`;

export const Page = styled.div`
  display: grid;
  height: 70vh;
  border-radius: 6px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  align-content: start;
  grid-template-rows: auto 1fr 80px;
  align-items: start;
  overflow: hidden;
`;

export const Title = styled.h1`
  margin: 20px 0 20px;
  font-size: 24px;
  color: #666;
  text-align: center;
`;

export const MessagesBlock = styled.div`
  overflow: auto;
  max-height: 100%;
`;

export const MessagesList = styled.div`
  display: grid;
  grid-row-gap: 8px;
  justify-items: start;
  padding: 15px 20px;
  margin-bottom: 45px;
`;

export const ItemMessage = styled.div`
  background-color: #eeeeee;
  padding: 12px 15px 10px 10px;
  border-radius: 0 5px 5px;
  max-width: 70%;
  position: relative;

  font-size: 14px;
  color: #666;

  ${(props) =>
    props.left &&
    css`
      &:before {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 0;
        border-color: transparent #eeeeee transparent transparent;
        position: absolute;
        top: 0;
        left: -9px;
      }
    `};

  ${(props) =>
    props.right &&
    css`
      background-color: #fff700;
      justify-self: end;
      border-radius: 5px 0px 5px 5px;

      &:after {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 0;
        border-color: transparent #fff700 transparent transparent;
        position: absolute;
        top: 0;
        right: -9px;
        transform: rotate(-90deg);
      }
    `}
`;

export const Footer = styled.div`
  display: grid;
  align-items: center;
  background-color: #eeeeee;
  height: 50px;
  padding: 15px 10px;
`;

export const Button = styled.button`
  border: none;
  padding: 10px 40px;
  border-radius: 30px;
  background-color: rgb(176, 177, 189);
  cursor: pointer;
`;

export const ListOptions = styled.div`
  display: grid;
  grid-row-gap: 10px;
  padding: 30px 25px;
`;

export const CircleOption = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: solid 1px #666;

  ${(props) =>
    props.active &&
    css`
      background-color: #666;
      border-color: transparent;
    `}
`;

export const OptionItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 25px;
  align-items: center;

  background-color: #eeeeee;
  padding: 15px 10px;
  transition: background-color 0.5s ease;
  border-radius: 5px;
  color: #666;
  cursor: pointer;

  &:hover {
    background-color: #dedede;
  }
`;
