import React, { useState, useContext } from "react";
import GitContext from "../../context/git/gitContext";


const Search = () => {
  const gitContext = useContext(GitContext);

  const { searchUsers, clearUsers, users } = gitContext;


  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    
      searchUsers(text);
      setText("");
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Chercher..."
          value={text}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Chercher"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Remettre à zéro
        </button>
      )}
    </div>
  );
};

export default Search;
