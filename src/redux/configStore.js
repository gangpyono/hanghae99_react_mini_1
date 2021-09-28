//configStore.js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // 미들웨어

import word from './modules/word.js';

// 미들웨어들을 묶어준다.
const middlewares = [thunk];
// 리듀서들을 묶어준다.
const rootReducer = combineReducers({ word });
// 리듀서말고 옵셔널하게 추가해주는것들의 모음
const enhancer = applyMiddleware(...middlewares);
// 스토어를 만든다.
const store = createStore(rootReducer, enhancer);

export default store;
// firebase에서 데이터를 가져오는건 리덕스에서함.
// 서버에 데이터를 달라고 요청하고 응답을 받는과정에서 비동기 통신이 발생한다.
