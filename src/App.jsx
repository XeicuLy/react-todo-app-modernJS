import React, { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { InCompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

const App = () => {
  const [inCompleteTodos, setInCompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const onChangeInputValue = e => {
    setInputValue(e.target.value);
  };
  const onClickAdd = () => {
    if (inputValue === '') return;
    const newTodos = [...inCompleteTodos, inputValue];
    setInCompleteTodos(newTodos);
    setInputValue('');
  };
  const onClickDelete = index => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  };
  const onClickComplete = index => {
    const newIncompleteTodos = [...inCompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, inCompleteTodos[index]];
    setInCompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickReturn = index => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...inCompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setInCompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        inputValue={inputValue}
        onChangeInputValue={onChangeInputValue}
        onClickAdd={onClickAdd}
      />
      <InCompleteTodos
        todos={inCompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickReturn={onClickReturn} />
    </>
  );
};

export default App;
