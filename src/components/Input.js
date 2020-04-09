import React from 'react';

const Input = (props) => {
  return (
      <input 
      type={props.typeInput}
      name={props.nameInput}
      placeholder={props.placeholderInput}
      onChange={props.onChangeInput}
      />
  );
}

export default Input;
