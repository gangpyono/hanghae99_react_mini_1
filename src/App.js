import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Cards from './Cards';
import Create from './Create';

const App = (props) => {
  const [list, setList] = React.useState([
    {
      name: '조예',
      des: '학문이나,예술,기술 따위의 분야에 대한 지식이나 경험이 깊은 경지에 이른 정도.',
      ex: '그는 문학에 조예가 깊다.',
    },
    {
      name: '주식',
      des: '(경제) 주식회사의 자본을 구성하는 단위.',
      ex: '주식에 투자하다.',
    },
    {
      name: '무역',
      des: '나라 간의 물건을 사고팔고 교환하는 일. 상품뿐만 아니라 기술과 서비스 분야 및 자본의 이동까지 포함한다.',
      ex: '무역을 통해 물건을 살 수 있어',
    },
  ]);

  const history = useHistory();

  return (
    <>
      <Route path="/" exact>
        <h1>나만의 사전</h1>
        <button
          onClick={() => {
            history.push('/Create');
          }}
        >
          단어추가
        </button>
        <ul>
          <Cards list={list} />
        </ul>
      </Route>
      <Route path="/Create" exact>
        <Create />
      </Route>
    </>
  );
};

export default App;
