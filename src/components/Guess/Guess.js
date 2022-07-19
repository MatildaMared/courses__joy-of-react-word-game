import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
	const validatedGuess = checkGuess(guess, answer);

	return (
		<p className="guess">
			{range(5).map((_, i) => {
				let className = "";

				if (validatedGuess && validatedGuess.length > 0) {
					className = validatedGuess[i].status;
				}

				return (
					<span key={i} className={`cell ${className}`}>
						{guess ? guess[i] : null}
					</span>
				);
			})}
		</p>
	);
}

export default Guess;
