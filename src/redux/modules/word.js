import { db } from '../../firebase';
import {
  // 데이터를 관리하는 파이어베이스 내장함수
  collection,
  doc,
  // getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

// Actions
const CREATE = 'word/CREATE';
const LOAD = 'word/LOAD';
const UPDATE = 'word/UPDATE';
const DELETE = 'word/DELETE';

//Action Creators
export function createWord(id, word) {
  return { type: CREATE, id: id, word: word };
}

export function loadWord(vocabulary) {
  return { type: LOAD, vocabulary: vocabulary };
}

export function updateWord(id, updatedWord) {
  return { type: UPDATE, id: id, updatedWord: updatedWord };
}

export function deleteWord(id) {
  return { type: DELETE, id: id };
}
//초기값설정
const initialState = {
  vocabulary: [],
  is_loaded: false, // 메인페이지에서 단어를 보여줄떄 데이터가 들어오기전에 렌더링시키는것을 막기위함.
};

//middlewares (fireStore에서 데이터를 가져온다.)
export const loadWordFB = () => {
  return async function (dispatch) {
    // async로 비동기통신 요청
    const vocabulary_data = await getDocs(collection(db, 'vocabulary')); // 전체데이터를 가져올 수있다. // await로 요청에대한 응답값받아온다.(받을떄까지 기다림)
    const vocabulary = [];

    //여기서 forEach는 도큐먼트의 정보들을 하나씩 참조한다.
    vocabulary_data.forEach((word) => {
      vocabulary.push({ id: word.id, ...word.data() });
    });

    dispatch(loadWord(vocabulary));
  };
};
// 파이어베이스에 생성
export const createWordFB = (word) => {
  return async function (dispatch) {
    // firestore에 넣어준후 id값을 가져오기위해.
    const docref = await addDoc(collection(db, 'vocabulary'), word);

    //dispatch(createWord({ id: docref.id, ...word })); 생략
    // 단어를 생성후 메인페이지로 돌아올시 단어를 map으로 생성하는과정에서 생성한 단어도 포함되어 들어가기떄문에
  };
};
// 파이어베이스에 업데이트
export const updateWordFB = (id, updatedWord) => {
  return async function (dispatch) {
    const docref = await doc(db, 'vocabulary', id);
    await updateDoc(docref, {
      name: updatedWord.name,
      des: updatedWord.des,
      ex: updatedWord.ex,
    });
    //dispatch(updateWord(id, updatedWord));
    // 생성단계와 마찬가지이유.
  };
};

//파이어베이스에서 삭제
export const deleteWordFB = (id) => {
  return async function (dispatch) {
    const docref = await doc(db, 'vocabulary', id);
    await deleteDoc(docref);
    dispatch(deleteWord(id)); //화면 업데이트가 발생하지않기떄문에 직접 지워줘야한다.
  };
};

//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'word/LOAD': {
      return { vocabulary: action.vocabulary, is_loaded: true };
    }
    case 'word/CREATE': {
      const word = { id: action.id, ...action.word };
      const new_vocabulary = [...state.vocabulary, word];
      return { ...state, vocabulary: new_vocabulary };
    }
    case 'word/UPDATE': {
      const update_vocabulary = state.vocabulary.map((item) => {
        if (item.id === action.id) {
          item = action.updatedWord;
          return item;
        } else return item;
      });
      return { ...state, vocabulary: update_vocabulary };
    }
    case 'word/DELETE': {
      const filtered_vocabulary = state.vocabulary.filter(
        (item) => item.id !== action.id
      );
      return { ...state, vocabulary: filtered_vocabulary };
    }
    default:
      return state;
  }
}
