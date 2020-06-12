import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { TextField, makeStyles } from "@material-ui/core";

import "./_media-player.scss";
import MusicTrack from "../../components/MusicTrack/MusicTrack";
import MusicView from "../../components/MusicView/MusicView";
import Modal from "../../components/Modal/Modal";
import { MusicPlayerContext } from "../../context/musicPlayer-context";
import AddTrack from "../../components/AddTrack/AddTrack";
import Filter from "../../components/Filter/Filter";

const useStyles = makeStyles((theme) => ({
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: "100%",
		display: "flex",
		"& .MuiInput-underline:after": {
			borderBottomColor: "#a237f3",
		},
	},
}));

const MediaPlayer = () => {
	const classes = useStyles();

	const [state, dispatch] = useContext(MusicPlayerContext);
	const [showModal, setShowModal] = useState(false);
	const [tracksBySearch, setTracksBySearch] = useState(state.tracks);

	useEffect(() => {
		if (state.status === "out-of-sync") {
			axios
				.get("http://localhost:3001/api/track")
				.then(({ data }) => {
					dispatch({ type: "START" });
					dispatch({ type: "EMPTY_TRACKS" });
					dispatch({ type: "GET_TRACKS", payload: data.track });
					dispatch({ type: "SYNCED" });
					dispatch({ type: "COMPLETE" });
					setTracksBySearch(data.track);
				})
				.catch((err) => {
					throw err;
				});
		}
		if (state.filterUsed && !state.searchUsed) {
			setTracksBySearch(state.tracks);
			dispatch({ type: "FILTER_USED", payload: false });
		}
	}, [
		dispatch,
		state.status,
		state.tracks,
		state.filterUsed,
		state.searchUsed,
	]);

	const triggerModal = (triggerModal = true) => {
		const modalEl = document.querySelector("#modal");
		if (modalEl && triggerModal) {
			modalEl.classList.add("active");
			setShowModal(triggerModal);
		}

		if (modalEl && !triggerModal) {
			modalEl.classList.remove("active");
			setShowModal(triggerModal);
		}
	};

	const handleSearch = (event) => {
		const query = event.target.value;
		if (!query) {
			dispatch({ type: "SEARCH_USED", payload: false });
			setTracksBySearch(state.tracks);
		} else {
			let tracks = state.tracks.filter(
				(track) => track.label.toLowerCase() === query.toLowerCase()
			);
			dispatch({ type: "SEARCH_USED", payload: true });
			dispatch({ type: "SEARCHED_TRACKS", payload: tracks });
			setTracksBySearch(tracks);
		}
	};
	return (
		<div className="media-player__wrapper">
			<div className="media-player__wrapper__heading">
				<Grid container spacing={2}>
					<Grid item xs={12} md={8}>
						<div className="media-player__wrapper__heading__title">
							Music Player
						</div>
					</Grid>
					<div className="media-player__wrapper__heading__search">
						<TextField
							id="standard-search"
							label="Search track"
							type="Standard"
							InputLabelProps={{
								style: { color: "#000" },
							}}
							className={classes.textField}
							margin="normal"
							onChange={handleSearch}
						/>
					</div>
				</Grid>
				<Grid container spacing={2} style={{ alignItems: "flex-end" }}>
					<Grid item xs={12} style={{ padding: 0 }}>
						<div className="media-player__wrapper__heading__add-track-heading">
							<Filter />
							<AddTrack onClick={triggerModal} />
						</div>
					</Grid>
				</Grid>
			</div>
			<div className="media-player__wrapper__music-player">
				<Grid container spacing={2}>
					<Grid item xs={12} md={7} lg={7}>
						<MusicView
							title={
								state.currentTrack.title ||
								"Please select a track"
							}
							album={
								state.currentTrack.album ||
								"Please select a track"
							}
						/>
					</Grid>
					<Grid item xs={12} md={5} lg={5}>
						<div className="media-player__wrapper__music-player__tracks">
							{!state.loading &&
								tracksBySearch.length > 0 &&
								tracksBySearch.map((track) => {
									return (
										<MusicTrack
											key={track._id}
											title={track.label}
											album={track.album}
											{...track}
										/>
									);
								})}
						</div>
					</Grid>
				</Grid>

				{showModal && <Modal onDismiss={() => triggerModal(false)} />}
			</div>
		</div>
	);
};

export default MediaPlayer;
