import React, { useState } from 'react';

export const TourItem = ({ id, image, info, price, name, removeTour }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <article>
      <img src={image} alt={name} />
      <footer>
        <div className='info'>
          <h4>{name}</h4>
          <h4>{price}</h4>
        </div>
        <p>
          {showMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={(prevState) => setShowMore((prevState) => !prevState)}
          >
            {showMore ? 'Show less' : 'Show more'}
          </button>
        </p>
        <button onClick={() => removeTour(id)}>Remove tour</button>
      </footer>
    </article>
  );
};
