import React from 'react';

export const CompleteTodos = ({ todos, onClickReturn }) => {
  return (
    <div className='complete-area'>
      <p className='title'>完了のTODO</p>
      <ul className='complete-lists'>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className='list complete-list'>
              <p className='description'>{todo}</p>
              <button className='button return-button' onClick={() => onClickReturn(index)}>
                戻す
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
