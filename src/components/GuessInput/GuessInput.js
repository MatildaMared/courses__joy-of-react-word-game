import React from "react";

const GuessInput = ({ guess, setGuess, makeGuess }) => {
	return (
		<form className="guess-input-wrapper" onSubmit={makeGuess}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				required
				minLength={5}
				maxLength={5}
				id="guess-input"
				type="text"
				value={guess}
				onChange={(e) => setGuess(e.target.value.toUpperCase())}
			/>
		</form>
	);
};

export default GuessInput;
