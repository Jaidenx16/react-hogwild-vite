import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			 {hogs.map((hog) => (
  <div key={hog.name} className="ui card" aria-label="hog card">
    <h3>{hog.name}</h3>
    <img src={hog.image} alt={`Photo of ${hog.name}`} />
  </div>
))}
		</div>
	);
}

export default App;
