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
  background-color: #333;
  display: grid;
  height: 70vh;
  border-radius: 6px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  align-content: start;
  grid-template-rows: auto 1fr 50px;
  align-items: start;
`;

export const Title = styled.h1`
  margin: 20px 0 20px;
  font-size: 24px;
  color: #fff;
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
`;

export const ItemMessage = styled.div`
  background-color: #eeeeee;
  padding: 12px 15px 10px 10px;
  border-radius: 0 5px 5px;
  max-width: 70%;
  position: relative;

  font-family: "Courier";
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
  background-color: #fff700;
  height: 50px;
  border-top: solid 1px #666;
  padding: 15px 10px;
`;
