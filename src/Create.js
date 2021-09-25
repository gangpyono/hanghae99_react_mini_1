import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createWord } from './redux/modules/word';
const Create = () => {
  const history = useHistory();
  const name_ref = React.useRef(null);
  const des_ref = React.useRef(null);
  const ex_ref = React.useRef(null);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>단어 생성하기</h1>
      <div>
        <h3>단어</h3>
        <input type="text" ref={name_ref} />
      </div>
      <div>
        <h3>설명</h3>
        <input type="text" ref={des_ref} />
      </div>
      <div>
        <h3>예시</h3>
        <input type="text" ref={ex_ref} />
      </div>
      <button
        onClick={() => {
          const word = {
            name: name_ref.current.value,
            des: des_ref.current.value,
            ex: ex_ref.current.value,
          };
          dispatch(createWord(word));
          history.goBack();
        }}
      >
        단어 추가하기
      </button>
    </div>
  );
};

export default Create;
