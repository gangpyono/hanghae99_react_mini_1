// Actions
const CREATE = 'word/CREATE';

//Action Creators
export function createWord(word) {
  return { type: CREATE, word: word };
}

const initialState = {
  vocabulary: [
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
  ],
};

//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'word/CREATE': {
      const word = action.word;
      const new_vocabulary = [...state.vocabulary, word];
      return { vocabulary: new_vocabulary };
    }

    default:
      return state;
  }
}
