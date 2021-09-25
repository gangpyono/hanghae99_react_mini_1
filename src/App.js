import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Cards from './Cards';
import Create from './Create';

const App = (props) => {
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
          <Cards />
        </ul>
      </Route>
      <Route path="/Create" exact>
        <Create />
      </Route>
    </>
  );
};

export default App;
