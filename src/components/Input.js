import React, { useState, ChangeEventHandler } from 'react';
import { InputType } from './Input.d';

/** @type{InputType} */
const Input = ({ name, placeholder }) => {
  const [value, setValue] = useState('');
  /** @type{ChangeEventHandler<HTMLInputElement>} */
  const handleChange = e => setValue(e.target.value);
  return (
    <input
      name={name}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
