import React from 'react';

const inputBoxStyle = {
  backgroundColor: '#c1ffff',
  width: '400px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
};

const inputAreaStyle = {
  borderRadius: '16px',
  padding: '6px 16px',
  backgroundColor: '#fff',
  outline: 'none',
};

export const InputTodo = ({ inputValue, onChangeInputValue, onClickAdd }) => {
  return (
    <div style={inputBoxStyle}>
      <input
        style={inputAreaStyle}
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
