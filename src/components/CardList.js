import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <Fragment>
      {
        robots.map((user, i) => {
          return (
            <Card 
              key={robots[i].id} 
              id={robots[i].id} 
              firstName={robots[i].firstName}
              lastName={robots[i].lastName}
              email={robots[i].email}
            />
          );
        })
      }
    </Fragment>
  );
}

export default CardList;