import React from 'react';
import './styles.scss';

function Input({ placeholder, onClick, onChange, className }) {
  return (
    <div className="search-container">
      <div className="text-input">
        <input
          type="text"
          name="input-text"
          onChange={onChange}
          required
          className={className}
        />

        <label htmlFor="input-text">
          <span className="text-placeholder">{placeholder}</span>
        </label>
      </div>
      <input
        type="submit"
        value="Enviar"
        className="submit-text"
        onClick={onClick}
      />
    </div>
  );
}

export default Input;
