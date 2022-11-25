import React from 'react';
export const InCompleteTodos = ({ todos, onClickComplete, onClickDelete }) => {
  return (
    <div className='incomplete-area'>
      <p className='title'>未完了のTODO</p>
      <ul className='incomplete-lists'>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className='list incomplete-list'>
              <p className='description'>{todo}</p>
              <button className='button complete-button' onClick={() => onClickComplete(index)}>
                完了
              </button>
              <button className='button delete-button' onClick={() => onClickDelete(index)}>
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
