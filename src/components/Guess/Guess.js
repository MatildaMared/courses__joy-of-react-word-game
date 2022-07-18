import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {

	return (
		<p className="guess">
			{range(5).map((_, i) => (
				<span key={i} className="cell">
					{guess ? guess[i] : null}
				</span>
			))}
		</p>
	);
}

export default Guess;
