import styled from "styled-components";
import Button from "../../components/Button";

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h1`
  padding: 15px 10px;
  font-size: 26pt;
  font-weight: 700;
  color: black;
`;

export const ButtonBox = styled.div`
  width: 450px;
  height: 500px;
  border: 1px solid red;
  > ${Button} {
    padding: 10px;
  }
`;

export const ListBox = styled.ul`
  background: lightcyan;
`;
