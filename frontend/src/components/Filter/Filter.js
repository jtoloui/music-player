import React, { useContext, useState } from "react";
import { Select, InputLabel, MenuItem, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { MusicPlayerContext } from "../../context/musicPlayer-context";
import "./_filter.scss";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		[theme.breakpoints.down("768")]: {
			width: "100%"
		}
	},

	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	select: {
		"&:after": {
			borderColor: "#a237f3",
		},
	},
}));

const Filter = () => {
	const [state, dispatch] = useContext(MusicPlayerContext);
	const classes = useStyles();

	const [filterBy, setFilterBy] = useState("");

	const sortAZ = (array, property) => {
		return array.sort(function (a, b) {
			if (a[property] < b[property]) {
				return -1;
			}
			if (a[property] > b[property]) {
				return 1;
			}
			return 0;
		});
	};
	const handleChange = (event) => {
		let tracks;
		switch (event.target.value) {
			case "trackAZ":
				tracks = sortAZ(state.tracks, "label");
				dispatch({ type: "EMPTY_TRACKS" });
				dispatch({ type: "GET_TRACKS", payload: tracks });
				dispatch({ type: "FILTER_USED", payload: true });
				break;
			case "albumAZ":
				tracks = sortAZ(state.tracks, "album");
				dispatch({ type: "EMPTY_TRACKS" });
				dispatch({ type: "GET_TRACKS", payload: tracks });
				dispatch({ type: "FILTER_USED", payload: true });
				break;
			default:
				tracks = state.tracks;
				break;
		}
		setFilterBy(event.target.value);
	};

	return (
		<div className="music-player__filter">
			<FormControl className={classes.formControl}>
				<InputLabel
					id="music-player__filter__label"
					style={{ color: "#000" }}
				>
					Sort by
				</InputLabel>
				<Select
					labelId="music-player__filter__label"
					id="music-player__filte__select"
					value={filterBy}
					onChange={handleChange}
					className={classes.select}
				>
					<MenuItem value="trackAZ" id="trackAZ">
						Ascending - Track
					</MenuItem>
					<MenuItem value="albumAZ" d="albumAZ">
						Ascending - Album
					</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default Filter;
