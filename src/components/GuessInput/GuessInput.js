import React, { useState } from "react";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";

const GuessInput = ({
	handleSubmitGuess,
	gameStatus,
	numOfGuesses,
	answer,
}) => {
	const [guess, setGuess] = useState("");

	const makeGuess = (e) => {
		e.preventDefault();

		if (guess.length !== 5) {
			alert("Please enter a 5-letter word.");
			return;
		}

		handleSubmitGuess(guess);
		setGuess("");
	};

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
				disabled={gameStatus !== "running"}
			/>
			{gameStatus === "won" && (
				<HappyBanner numOfGuesses={numOfGuesses} />
			)}
			{gameStatus === "lost" && <SadBanner answer={answer} />}
		</form>
	);
};

export default GuessInput;
