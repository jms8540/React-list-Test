import Button from "../../components/Button";

import * as S from "./styled";

import listDate from "../.././listData";

console.log(arrlist);
function List() {
  const arrlist = [...listDate].sort((a, b) => a.id - b.id);
  return (
    <S.Container>
      <S.Title>React List</S.Title>
      <S.ButtonBox>
        <Button>ID 오름차</Button>
        <Button>ID 내림차</Button>
        <Button>Level</Button>
        <Button>이름 오름차</Button>
        <Button>이름 내림차</Button>
      </S.ButtonBox>
      <S.ListBox>
        {arrlist.map((list) => (
          <li key={list.id}>{list.name}</li>
        ))}
      </S.ListBox>
    </S.Container>
  );
}

export default List;
