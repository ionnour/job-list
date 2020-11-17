import React, { useState } from "react";

import SearchBar from "./SearchBar";
import CardsList from "./CardsList";

const Home = () => {
  const [terms, setTerms] = useState([]);

  const addTerm = term => {
    setTerms([...new Set([...terms, term])]);
  };

  const clear = term => {
    if (term === "") setTerms([]);
    else setTerms(terms.filter(t => t !== term));
  };

  return (
    <div className="Home">
      <div className="header">
        <button className="github">
          <a href="https://github.com/aionnour">Github</a>
        </button>
        <h1>Job List</h1>
      </div>
      <div className="body">
        <SearchBar terms={terms} clear={clear} />
        <CardsList terms={terms} addTerm={addTerm} />
      </div>
    </div>
  );
};

export default Home;
