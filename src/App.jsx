import React, { useState } from 'react';

import { InputTodo } from './components/InputTodo';

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
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul className='incomplete-lists'>
          {inCompleteTodos.map((todo, index) => {
            return (
              <li key={todo} className='list incomplete-list'>
                <p className='description'>{todo}</p>
                <button
                  className='button complete-button'
                  onClick={() => {
                    onClickComplete(index);
                  }}
                >
                  完了
                </button>
                <button
                  className='button delete-button'
                  onClick={() => {
                    onClickDelete(index);
                  }}
                >
                  削除
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul className='complete-lists'>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo} className='list complete-list'>
                <p className='description'>{todo}</p>
                <button
                  className='button return-button'
                  onClick={() => {
                    onClickReturn(index);
                  }}
                >
                  戻す
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
