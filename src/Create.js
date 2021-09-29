import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '@mui/material/Button';

import { createWordFB } from './redux/modules/word';

const Create = () => {
  const history = useHistory();
  const name_ref = React.useRef(null);
  const des_ref = React.useRef(null);
  const ex_ref = React.useRef(null);
  console.log('Create');
  const dispatch = useDispatch();
  let date = new Date();
  return (
    <Container>
      <Title>단어 생성하기</Title>

      <>
        <h3>단어</h3>
        <Input type="text" placeholder="단어를 입력하세요" ref={name_ref} />
      </>
      <>
        <h3>뜻</h3>
        <TextArea
          rows="5"
          cols="50"
          placeholder="단어의 뜻을 입력하세요."
          ref={des_ref}
        ></TextArea>
      </>
      <>
        <h3>예시</h3>
        <TextArea
          rows="5"
          cols="33"
          placeholder="단어의 사용예시를 입력하세요."
          ref={ex_ref}
        ></TextArea>
      </>

      <ButtonContainer>
        <Button
          variant="outlined"
          style={{
            background: 'white',
          }}
          onClick={() => {
            const word = {
              date: date,
              name: name_ref.current.value,
              des: des_ref.current.value,
              ex: ex_ref.current.value,
            };
            if (word.name === '' || word.des === '' || word.ex === '') {
              alert('모든 값을 입력해주세요');

              return null;
            }

            dispatch(createWordFB(word));
            history.goBack();
          }}
        >
          단어 추가하기
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  width: 200px;
  margin: auto;
  text-align: center;
  background: #e6ffff;
  padding: 20px;
  border-radius: 20px;
`;

const Input = styled.input`
  width: 150px;
  height: 30px;
  outline: none;
`;

const TextArea = styled.textarea`
  resize: none;
  outline: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export default Create;
