import React, { Fragment } from 'react';

export default function Question({
  address,
  show,
  questionIx,
  handleChange,
  content,
  options,
  selected
}) {
  return (
    show && (
      <>
        <h4>{address}</h4>
        <h2>For a more precise estimate, please answer the following:</h2>
        <h3>{content}</h3>
        {options.map((option, optionIx) => (
          <Fragment key={optionIx}>
            <input
              type="radio"
              name={questionIx}
              value={optionIx}
              checked={selected === optionIx}
              onChange={handleChange(optionIx)}
              id={`${questionIx}${optionIx}`}
            />
            <label htmlFor={`${questionIx}${optionIx}`}>
              <span>{option}</span>
            </label>
          </Fragment>
        ))}
      </>
    )
  );
}
