import React from 'react';
import questions from './questions';
import './App.css';
import Form from './components/Form';

function App() {
  return <Form questions={questions} />;
}

export default App;
