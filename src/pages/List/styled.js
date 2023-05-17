import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 750px;
  height: 100vh;
  margin: 0 auto;
  padding: 16px;
`;

export const ListBox = styled.ul`
    width: 100%
    list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
  width: 300px;
`;

export const ButtonBox = styled.div`
  display: flex;
  border: 1px solid black;
`;

export const Button = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 4px 8px;
  border: none;
  cursor: pointer;
`;

export const Desc = styled.div`
  display: flex;
  align-items: center;
`;
