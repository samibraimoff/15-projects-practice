import React, { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const SingleQuestion = ({ question }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <div>
        <h2>{question.title}</h2>
        <button onClick={() => setShowInfo((prevState) => !prevState)}>
          {showInfo ? <FaMinusCircle /> : <FaPlusCircle />}
        </button>
      </div>
      <p>{showInfo && question.info}</p>
    </div>
  );
};

export default SingleQuestion;
