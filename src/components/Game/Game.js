import React from "react";
import { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [previousGuesses, setPreviousGuesses] = useState([]);
	const [gameStatus, setGameStatus] = useState("running");

	const handleSubmitGuess = (guess) => {
		setPreviousGuesses([...previousGuesses, guess]);

		if (guess === answer) {
			setGameStatus("won");
		} else if (previousGuesses.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus("lost");
		}
	};

	return (
		<>
			<GuessResults guesses={previousGuesses} answer={answer} />
			<GuessInput
				handleSubmitGuess={handleSubmitGuess}
				gameStatus={gameStatus}
				answer={answer}
				numOfGuesses={previousGuesses.length}
			/>
		</>
	);
}

export default Game;
