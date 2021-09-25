import React from 'react';
import { useSelector } from 'react-redux';
const Cards = () => {
  const word_list = useSelector((state) => state.word.vocabulary);
  return (
    <>
      {word_list.map((card, index) => {
        return (
          <li key={index}>
            <h2> 단어 : {card.name}</h2>
            <p>설명 : {card.des}</p>
            <p> 예시 : {card.ex}</p>
          </li>
        );
      })}
    </>
  );
};

export default Cards;
