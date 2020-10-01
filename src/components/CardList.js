import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            firstName={robots[i].firstName}
            lastName={robots[i].lastName}
            email={robots[i].email}
          />
        );
      })}
    </>
  );
};

export default CardList;
