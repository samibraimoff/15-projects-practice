import React, { useState } from 'react';
import data from './data';

import SingleQuestion from './components/SingleQuestion';

export const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <div>
      <h1>Questions and Answers about login</h1>

      <div>
        {questions.map((question) => (
          <SingleQuestion key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};
