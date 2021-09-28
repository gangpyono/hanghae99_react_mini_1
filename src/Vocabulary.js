import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';

// 폰트어썸 아이콘 불러오기
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import { deleteWordFB, loadWordFB } from './redux/modules/word';
const Vocabulary = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log('voca');
  React.useEffect(() => {
    dispatch(loadWordFB());
    console.log('파이어베이스에서 불러옴');
  }, []);

  const word = useSelector((state) => state.word);
  if (!word.is_loaded) return null;

  const vocabulary = word.vocabulary.sort(
    // 최신순으로 정렬
    (a, b) => a.date.seconds - b.date.seconds
  );

  return (
    <>
      {vocabulary.map((card, index) => {
        return (
          <Card key={index}>
            <Head>
              <span> 단어 : {card.name}</span>
              <Buttons>
                <Button
                  onClick={() => {
                    history.push('/Update/' + index);
                  }}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button
                  onClick={() => {
                    dispatch(deleteWordFB(card.id));
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </Buttons>
            </Head>
            <p>설명 : {card.des}</p>
            <Example> 예시 : {card.ex}</Example>
            <Line />
          </Card>
        );
      })}
    </>
  );
};

const Card = styled.li`
  margin: 20px;
`;

const Head = styled.div`
  justify-content: space-between;
  display: flex;
`;
const Buttons = styled.div`
  display: inline-block;
`;

const Button = styled.button`
  margin: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Line = styled.div`
  margin-top: 10px;
  border: solid 1px #bcbcbc;
  width: 100%;
`;

const Example = styled.p`
  color: #8d8d8d;
`;

export default Vocabulary;
