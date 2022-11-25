import React, { useState } from 'react';

function App() {
  const [inCompleteTodos, setInCompleteTodos] = useState(['ああああ', 'いいいい']);
  const [completeTodos, setCompleteTodos] = useState(['うううう']);

  return (
    <>
      <div className='input-box'>
        <input className='input-area' type='text' placeholder='TODOを入力' />
        <button className='button'>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul className='incomplete-lists'>
          {inCompleteTodos.map(todo => {
            return (
              <li key={todo} className='list incomplete-list'>
                <p className='description'>{todo}</p>
                <button className='button complete-button'>完了</button>
                <button className='button delete-button'>削除</button>
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
}

export default App;
