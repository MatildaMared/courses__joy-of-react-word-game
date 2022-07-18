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
	const [guess, setGuess] = useState("");
	const [previousGuesses, setPreviousGuesses] = useState([]);

	const makeGuess = (e) => {
		e.preventDefault();

		if (guess.length !== 5) {
			alert("Please enter a 5-letter word.");
			return;
		}

		console.log(`Guess: ${guess}`);
		setGuess("");
		setPreviousGuesses([...previousGuesses, guess]);
	};

	return (
		<>
			<PreviousGuesses guesses={previousGuesses} />
			<GuessInput
				guess={guess}
				setGuess={setGuess}
				makeGuess={makeGuess}
			/>
		</>
	);
}

export default Game;
