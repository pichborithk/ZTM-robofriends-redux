import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <>
      <div>
        {robots.map((index) => {
          return (
            <Card
              key={index.id}
              name={index.name}
              id={index.id}
              email={index.email}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardList;
