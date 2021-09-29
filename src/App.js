import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';
import Vocabulary from './Vocabulary';
import Create from './Create';
import Update from './Update';

const App = () => {
  const history = useHistory();
  console.log('APP');
  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <Title>나만의 사전</Title>
          <Button
            variant="contained"
            onClick={() => {
              history.push('/Create');
            }}
          >
            단어추가
          </Button>
          <CardContainer>
            <Vocabulary />
          </CardContainer>
        </Route>

        <Route path="/Create" exact>
          <Create />
        </Route>

        <Route path="/Update/:index">
          <Update />
        </Route>
      </Switch>
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  margin: auto;
  padding: 30px;
  background: #b3e5fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 60px;
`;

const Title = styled.h1`
  font-size: 50px;

  background: #e6ffff;
  padding: 20px;
  border-radius: 20px;
`;

const CardContainer = styled.ul`
  width: 80%;
  height: 50vh;
  list-style: none;
  padding: 40px;
  margin-top: 30px;
  background: #e1f5fe;
  border-radius: 15px;
  overflow: auto;
`;

export default App;
