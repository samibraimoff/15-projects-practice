import React from 'react';
import { Item } from './Item';

export const List = ({ people }) => {
  const renderList = () => {
    return people.map((person) => <Item key={person.id} person={person} />);
  };
  return <div>{people.length > 0 && renderList()}</div>;
};
