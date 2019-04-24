import React, { useState, useEffect } from 'react';
import Question from './Question';

export default function Form({ questions: _qs }) {
  const [step, setStep] = useState(1);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(_qs.map(q => ({ ...q, selected: null })));
  }, [_qs]);

  const handleSetQuestions = questionIx => optionIx => _e => {
    setQuestions(
      questions.map((q, ix) =>
        ix === questionIx
          ? {
              ...q,
              selected: optionIx
            }
          : q
      )
    );

    step === questions.length ? handleFormEnd() : setStep(step + 1);
  };
  const handleFormEnd = () => {};

  return (
    <form>
      {questions.map((q, ix) => (
        <Question
          key={ix}
          questionIx={ix}
          show={step === ix + 1}
          handleChange={handleSetQuestions(ix)}
          {...q}
        />
      ))}
    </form>
  );
}
