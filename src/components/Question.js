import React, { Fragment } from 'react';

export default function Question({
  show,
  questionIx,
  handleAnswer,
  handleNext,
  content,
  options,
  selected
}) {
  return (
    show && (
      <>
        <h2>For a more precise estimate, please answer the following:</h2>
        <h3>{content}</h3>
        {options.map((option, optionIx) => (
          <Fragment key={optionIx}>
            <input
              type="radio"
              name={questionIx}
              value={optionIx}
              checked={selected === optionIx}
              onChange={handleAnswer(optionIx)}
              id={`${questionIx}${optionIx}`}
            />
            <label htmlFor={`${questionIx}${optionIx}`}>
              <span>{option}</span>
            </label>
          </Fragment>
        ))}
        <div className="btn-group">
          <button type="button" className="skip">
            Skip
          </button>
          <button type="button" className="next" disabled={selected == null}>
            Next
          </button>
        </div>
      </>
    )
  );
}
