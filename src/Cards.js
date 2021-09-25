import React from 'react';

const Cards = (props) => {
  return (
    <>
      {props.list.map((card, index) => {
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
