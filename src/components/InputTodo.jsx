import React from 'react';

export const InputTodo = ({ inputValue, onChangeInputValue, onClickAdd }) => {
  return (
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
  );
};
