import React, { useState } from "react";

export default function Research() {
  const [input, setInput] = useState<string>("");
  const [button, setButton] = useState<boolean>(true);

  const hadleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleButtonChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
      setButton(prev => !prev);
  };

  return (
    <div className="research_part">
      <span className="blog">Блог</span>
      <input
        className="research"
        type="text"
        name="text"
        onChange={hadleChange}
        placeholder="Поиск"
      ></input>
      <button
        className={`filter ${button ? 'active' : 'inactive'}`}
        type="button"
        onClick={handleButtonChange}
      >
        {button ? "Фильтр" : "Скрыть фильтр"}
      </button>
    </div>
  );
}
