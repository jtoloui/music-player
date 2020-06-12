import React, { useReducer, createContext } from "react";

export const MusicPlayerContext = createContext();

const initialState = {
	tracks: [],
	searchedTracks: [],
	currentTrack: {},
	loading: false,
	status: "out-of-sync",
	error: null,
	filterUsed: false,
	searchUsed: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_TRACKS":
			state = {
				...state,
				tracks: state.tracks.concat(action.payload),
			};
			break;
		case "EMPTY_TRACKS":
			state = {
				...state,
				tracks: initialState.tracks,
			};
			break;
		case "PLAY_TRACK":
			state = {
				...state,
				currentTrack: { ...action.payload },
			};
			break;
		case "SET_TRACK_DURATION":
			state = {
				...state,
				currentTrack: {
					...state.currentTrack,
					duration: action.payload,
				},
			};
			break;
		case "START":
			state = {
				...state,
				loading: true,
			};
			break;
		case "COMPLETE":
			state = {
				...state,
				loading: false,
			};
			break;
		case "SYNCED":
			state = {
				...state,
				status: "synced",
			};
			break;
		case "NOT-SYNCED":
			state = {
				...state,
				status: "out-of-sync",
			};
			break;
		case "FILTER_USED":
			state = {
				...state,
				filterUsed: action.payload,
			};
			break;
		case "SEARCH_USED":
			state = {
				...state,
				searchUsed: action.payload,
			};
			break;
		case "SEARCHED_TRACKS":
			state = {
				...state,
				searchedTracks: [...action.payload],
			};
			break;
		default:
			state = {...state};
			break;
	}
	return {
		...state,
	};
};

export const MusicPlayerContextProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<MusicPlayerContext.Provider value={[state, dispatch]}>
			{props.children}
		</MusicPlayerContext.Provider>
	);
};
