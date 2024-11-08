import React from 'react';

const FontSelector = ({ setFont }) => {
  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  return (
    <div>
      <label>Escolha uma Fonte: </label>
      <select onChange={handleFontChange}>
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
        <option value="Georgia">Georgia</option>
      </select>
    </div>
  );
};

export default FontSelector;
