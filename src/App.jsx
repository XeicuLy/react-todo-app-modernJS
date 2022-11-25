import React, { useState } from 'react';

const App = () => {
  const [inCompleteTodos, setInCompleteTodos] = useState(['ああああ', 'いいいい']);
  const [completeTodos, setCompleteTodos] = useState(['うううう']);
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

  return (
    <>
      <div className='input-box'>
        <input
          className='input-area'
          type='text'
          placeholder='TODOを入力'
          value={inputValue}
          onChange={onChangeInputValue}
        />
        <button className='button' onClick={onClickAdd}>
          追加
        </button>
      </div>
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
          {completeTodos.map(todo => {
            return (
              <li key={todo} className='list complete-list'>
                <p className='description'>{todo}</p>
                <button className='button return-button'>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
