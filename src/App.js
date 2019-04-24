import React from 'react';
import questions from './questions';
import './App.scss';
import Form from './components/Form';

function App() {
  return (
    <div className="container">
      <Form questions={questions} />
    </div>
  );
}

export default App;
