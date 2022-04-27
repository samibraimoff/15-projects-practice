import React from 'react';
import styles from './Item.module.css';

export const Item = ({ person }) => {
  const { id, name, age, image } = person;

  return (
    <div className={styles.person}>
      <img src={image} alt={name} />
      <div className={styles.info}>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};
