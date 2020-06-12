import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./_add-track.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const AddTrack = (props) => (
	<div className="media-player__add-track">
		<label htmlFor="addTrack">Add a song</label>
		<button
			className="media-player__add-track__button"
			onClick={props.onClick}
			id="media-player__add-track__button addTrack"
		>
			<FontAwesomeIcon id="add-button" icon={faPlus} color="#a237f3" />
		</button>
	</div>
);

export default AddTrack;
