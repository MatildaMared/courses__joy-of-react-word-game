import React from "react";

import { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [previousGuesses, setPreviousGuesses] = useState([]);

	const handleSubmitGuess = (guess) => {
		setPreviousGuesses([...previousGuesses, guess]);
	};

	return (
		<>
			<PreviousGuesses guesses={previousGuesses} />
			<GuessInput handleSubmitGuess={handleSubmitGuess} />
		</>
	);
}

export default Game;
