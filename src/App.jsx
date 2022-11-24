import React from 'react';
import './App.scss';

function App() {
	return (
		<div className="app">
			<h1>Animated Text Generator</h1>
			<h3>Type text into the form and hit submit</h3>
			<input className="input-field" />
			<button type="button" className="submit-btn">
				Submit
			</button>
		</div>
	);
}
export default App;
