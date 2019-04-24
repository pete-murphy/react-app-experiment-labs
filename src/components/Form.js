import React, { useState, useEffect } from 'react';
import Question from './Question';
import './Form.scss';

export default function Form({ questions: _qs }) {
  const [step, setStep] = useState(1);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(_qs.map(q => ({ ...q, selected: null })));
  }, [_qs]);

  const handleAnswer = questionIx => optionIx => _e => {
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
  };

  const handleNext = _e => {
    step === questions.length ? handleFormEnd() : setStep(step + 1);
  };

  const handleFormEnd = () => {};

  return (
    <div className="form-container">
      <form>
        {questions.map((q, ix) => (
          <Question
            key={ix}
            questionIx={ix}
            show={step === ix + 1}
            handleAnswer={handleAnswer(ix)}
            handleNext={handleNext}
            {...q}
          />
        ))}
      </form>
    </div>
  );
}
