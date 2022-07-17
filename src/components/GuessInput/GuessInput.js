import React, { useState } from "react";

const GuessInput = () => {
	const [guess, setGuess] = useState("");

	return (
		<form className="guess-input-wrapper">
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				value={guess}
				onChange={(e) => setGuess(e.target.value.toUpperCase())}
			/>
		</form>
	);
};

export default GuessInput;
