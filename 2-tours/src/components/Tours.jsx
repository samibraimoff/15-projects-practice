import React from 'react';
import { TourItem } from './TourItem';

export const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our tours</h2>
      </div>
      <div>
        {tours.length > 0 &&
          tours.map((tour) => (
            <TourItem {...tour} key={tour.id} removeTour={removeTour} />
          ))}
      </div>
    </section>
  );
};
