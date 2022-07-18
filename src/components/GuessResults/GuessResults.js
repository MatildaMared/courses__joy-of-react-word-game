import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults() {
	return (
		<div className="guess-results">
			{range(NUM_OF_GUESSES_ALLOWED).map((_, i) => (
				<p className="guess" key={i}>
					<span className="cell">F</span>
					<span className="cell">I</span>
					<span className="cell">R</span>
					<span className="cell">S</span>
					<span className="cell">T</span>
				</p>
			))}
		</div>
	);
}

export default GuessResults;
