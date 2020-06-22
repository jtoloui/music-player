import React, { useContext, useState, useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IdleTimer from "react-idle-timer";
import { faPlay, faPause, faRandom } from "@fortawesome/free-solid-svg-icons";

import "./_music-view.scss";
import { MusicPlayerContext } from "../../context/musicPlayer-context";

function MusicView({ title, album }) {
	const [state, dispatch] = useContext(MusicPlayerContext);
	const selectedTrack = (value) => {
		dispatch({ type: "PLAY_TRACK", payload: value });
	};

	const [pauseDisabled, setPauseDisabled] = useState(true);
	const [playDisabled, setPlayDisabled] = useState(false);
	const [showIdleWarning, setShowIdleWarning] = useState(false);
	const [audioTime, setAudioTime] = useState(0.0);

	const playIconColour = playDisabled ? "grey" : "#a237f3";
	const pauseIconColour = pauseDisabled ? "grey" : "#a237f3";

	const audioTrack = useRef();
	const progressBar = useRef();
	const idleTimerRef = useRef();

	const playMusic = () => {
		setPlayDisabled(true);
		setPauseDisabled(false);
		setShowIdleWarning(false);
		audioTrack.current.play();
	};
	const pauseMusic = () => {
		setPauseDisabled(true);
		setPlayDisabled(false);
		audioTrack.current.pause();
	};
	const audioTrackTiming = (audioTiming) => {
		// convert seconds to miliseconds
		const milieseconds = audioTiming * 1000;
		const minutes = milieseconds ? Math.floor(milieseconds / 60000) : "-";
		const seconds = milieseconds
			? ((milieseconds % 60000) / 1000).toFixed(0)
			: "--";
		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};

	const currentTiming = audioTrackTiming(audioTime);
	const trackDuration = audioTrackTiming(state.currentTrack.duration);
	const audioProgressBar = document.querySelector("progress");
	// attach event for seek audio
	useEffect(() => {
		audioProgressBar &&
			audioProgressBar.addEventListener("click", audioSeek);
	}, [audioProgressBar]);
	useEffect(() => {
		audioTrack.current.onloadedmetadata = (e) => {
			dispatch({
				type: "SET_TRACK_DURATION",
				payload: audioTrack.current.duration,
			});
		};
		audioTrack.current.ontimeupdate = () => {
			updateAudioTime();
		};

		if (!state.currentTrack.duration) {
			setPauseDisabled(true);
			setPlayDisabled(true);
		} else {
			setPauseDisabled(true);
			setPlayDisabled(false);
		}
	}, [dispatch, state.currentTrack.duration]);

	const updateAudioTime = () => {
		setAudioTime(audioTrack.current.currentTime);
	};

	function audioSeek(e) {
		const percent = e.offsetX / this.offsetWidth;
		if (audioTrack.current.currentTime > 0) {
			audioTrack.current.currentTime =
				percent * audioTrack.current.duration;
			progressBar.current.value = percent / 100;
		}
	}

	const shuffle = () =>
		state.tracks[Math.floor(Math.random() * state.tracks.length)];

	const handleShuffle = () => {
		const shuffledObj = shuffle();
		if (shuffledObj._id) {
			selectedTrack({
				title: shuffledObj.label,
				album: shuffledObj.album,
				...shuffledObj,
			});
			setPlayDisabled(false);
		}
	};
	const onIdle = () => {
		if (
			state.currentTrack &&
			state.currentTrack.fileLocation &&
			!pauseDisabled
		) {
			setShowIdleWarning(true);
			idleTimerRef.current.reset();
			pauseMusic();
		}
	};

	return (
		<div className="media-player__music-player__music-view">
			<div className="media-player__music-player__music-view__container">
				<Grid container spacing={2}>
					<Grid item xs={12} md={3} lg={2}>
						<div className="media-player__music-player__music-view__container__album" />
					</Grid>
					<Grid item xs={12} md={9} lg={10}>
						<div className="media-player__music-player__music-view__container__track-info">
							<div className="media-player__music-player__music-view__container__track-info__title">
								{title}
							</div>
							<div className="media-player__music-player__music-view__container__track-info__subtitle">
								{album}
							</div>
							{state.tracks && state.tracks.length > 1 && (
								<FontAwesomeIcon
									style={{ marginTop: "1rem" }}
									icon={faRandom}
									color="#a237f3"
									onClick={handleShuffle}
								/>
							)}

							<Grid item md={12}>
								<progress
									ref={progressBar}
									className="media-player__music-player__music-view__container__track-info__progress-bar"
									id="audio-progress"
									value={audioTime}
									max={
										state.currentTrack.duration &&
										state.currentTrack.duration
									}
								/>
								<audio
									className="media-player__music-player__music-view__container__track-info__audio"
									src={
										state.currentTrack.fileLocation &&
										`https://jt-music-player.herokuapp.com/${state.currentTrack.fileLocation}`
									}
									ref={audioTrack}
									type={
										state.currentTrack.fileType &&
										state.currentTrack.fileType
									}
								/>
							</Grid>
							<div className="media-player__music-player__music-view__container__track-info__timing">
								<Grid item xs={6}>
									<div className="media-player__music-player__music-view__container__track-info__timing__minutes">
										{currentTiming}
									</div>
								</Grid>
								<Grid item xs={6}>
									<div className="media-player__music-player__music-view__container__track-info__timing__seconds">
										{trackDuration}
									</div>
								</Grid>
							</div>
							{showIdleWarning && (
								<div className="media-player__music-player__music-view__container__track-info__idle-warning">
									You have been idle for 30 seconds or longer
									so we have just paused your track for you
								</div>
							)}
						</div>
					</Grid>
					<hr />
					<Grid item xs={12}>
						<div className="media-player__music-player__music-view__container__controls">
							<button
								disabled={playDisabled}
								className="media-player__music-player__music-view__container__controls__play"
								onClick={() => playMusic()}
							>
								<FontAwesomeIcon
									icon={faPlay}
									color={playIconColour}
								/>
							</button>

							<button
								disabled={pauseDisabled}
								className="media-player__music-player__music-view__container__controls__pause"
								onClick={() => pauseMusic()}
							>
								<FontAwesomeIcon
									icon={faPause}
									color={pauseIconColour}
								/>
							</button>
							<IdleTimer
								ref={idleTimerRef}
								element={document}
								timeout={30000}
								onIdle={onIdle}
							/>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default MusicView;
