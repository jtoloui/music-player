import React, { useState, useRef, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faVolumeUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import { MusicPlayerContext } from "../../context/musicPlayer-context";
import "./_music-track.scss";

const MusicTrack = ({ title, album, ...props }) => {
	const [state, dispatch] = useContext(MusicPlayerContext);
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [removeVisible, setRemoveVisible] = useState("visible");
	const [trackIcon, setTrackIcon] = useState(faPlay);
	const selectedTrack = (value) => {
		dispatch({ type: "PLAY_TRACK", payload: value });
	};
	const buttonRef = useRef();
	const removeButtonRef = useRef();

	useEffect(() => {
		if (state.currentTrack) {
			if (buttonRef.current) {
				if (state.currentTrack._id === buttonRef.current.id) {
					setButtonDisabled(true);
					setTrackIcon(faVolumeUp);
					setRemoveVisible("hidden");
				} else {
					setButtonDisabled(false);
					setTrackIcon(faPlay);
					setRemoveVisible("visible");
				}
			}
		}
	}, [state.currentTrack]);

	const removeTrack = (trackId) => {
		axios
			.delete(`http://localhost:3001/api/track/${trackId}`)
			.then((res) => {
				dispatch({ type: "NOT-SYNCED" });
			})
			.catch((err) => {
				throw err;
			});
	};

	return (
		<div className="media-player__music-player__music-tracks">
			<div className="media-player__music-player__music-tracks__container">
				<div className="media-player__music-player__music-tracks__container__album" />
				<div className="media-player__music-player__music-tracks__container__track-info">
					<div className="media-player__music-player__music-tracks__container__track-info__title">
						{title}
					</div>
					<div className="media-player__music-player__music-tracks__container__track-info__audio-length">
						{album}
					</div>
				</div>
				<button
					className="media-player__music-player__music-tracks__container__remove-button"
					id={props._id}
					onClick={() => {
						removeTrack(removeButtonRef.current.id);
					}}
					disabled={buttonDisabled}
					ref={removeButtonRef}
				>
					<FontAwesomeIcon
						visibility={removeVisible}
						id="play-button"
						icon={faTimes}
						color="grey"
					/>
				</button>
				<button
					className="media-player__music-player__music-tracks__container__play-button"
					id={props._id}
					onClick={() => {
						selectedTrack({ title, album, ...props });
					}}
					disabled={buttonDisabled}
					ref={buttonRef}
				>
					<FontAwesomeIcon
						id="play-button"
						icon={trackIcon}
						color="#a237f3"
					/>
				</button>
			</div>
		</div>
	);
};

export default MusicTrack;
