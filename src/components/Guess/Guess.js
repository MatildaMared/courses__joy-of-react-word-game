import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
	return <span className={`cell ${status}`}>{letter}</span>;
}

function Guess({ guess, answer }) {
	const validatedGuess = checkGuess(guess, answer);

	return (
		<p className="guess">
			{range(5).map((_, i) => (
				<Cell
					key={i}
					letter={
						validatedGuess ? validatedGuess[i].letter : undefined
					}
					status={
						validatedGuess ? validatedGuess[i].status : undefined
					}
				/>
			))}
		</p>
	);
}

export default Guess;
