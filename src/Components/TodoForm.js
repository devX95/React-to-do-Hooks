import React, { useState } from 'react';

export default ({ addTodo }) => {
  const [value, setValue] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!value)
      return;
    addTodo(value);
    setValue("");
  };

  return (<form onSubmit={handleSubmit} className="form">
    <input 
      type="text" 
      className="input" 
      value={value} 
      onChange={e => 
      setValue(e.target.value)} />
    <button disabled={value === ""}>ADD</button>
  </form>);
};
