import React from "react";

const GuessInput = () => {
	return (
		<form class="guess-input-wrapper">
			<label for="guess-input">Enter guess:</label>
			<input id="guess-input" type="text" />
		</form>
	);
};

export default GuessInput;
