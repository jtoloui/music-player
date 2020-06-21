import React, { useContext } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import { useForm, Controller } from "react-hook-form";

import "./_modal.scss";
import InputText from "../Form/Input";
import InputFile from "../Form/InputFile";
import { MusicPlayerContext } from "../../context/musicPlayer-context";

const Modal = ({ onDismiss }) => {
	const { register, control, handleSubmit, errors } = useForm({
		mode: "onChange",
	});
	const [, dispatch] = useContext(MusicPlayerContext);

	const onSubmit = (data) => {
		const bodyFormData = new FormData();
		bodyFormData.set("label", data.label);
		bodyFormData.set("album", data.album);
		bodyFormData.append("track", data.track[0]);
		axios
			.post(
				"https://jtoloui-testing.herokuapp.com/api/track",
				bodyFormData,
				{
					headers: { "Content-Type": "multipart/form-data" },
				}
			)
			.then((res) => {
				dispatch({ type: "NOT-SYNCED" });
				onDismiss();
			})
			.catch((err) => console.log(err));
	};

	const keyPressStop = (event) => {
		let eventKeyCode = event.keyCode ? event.keyCode : event.which;
		if (eventKeyCode === 13) {
			event.preventDefault();
		}
	};
	return ReactDOM.createPortal(
		<form onSubmit={handleSubmit(onSubmit)} onKeyPress={keyPressStop}>
			<div className="media-player__modal">
				<div className="media-player__modal__content">
					<div className="media-player__modal__content__heading">
						Upload a new Track
					</div>
					<Grid container>
						<Grid item xs={12} md={6}>
							<Grid item xs={12}>
								<Controller
									as={InputText}
									name="label"
									label="Track Name"
									type="text"
									control={control}
									defaultValue=""
									labelClass="media-player__modal__content__track-label"
									inputClass="media-player__modal__content__track-label__input"
									register={register}
									validation={{
										required: "Please provide a track name",
									}}
									errors={errors}
								/>
								<Controller
									as={InputText}
									control={control}
									defaultValue=""
									type="text"
									label="Album name"
									name="album"
									labelClass="media-player__modal__content__track-album"
									inputClass="media-player__modal__content__track-album__input"
									register={register}
								/>
							</Grid>
						</Grid>
						<Grid item xs={12} md={6}>
							<Grid item xs={12}>
								<div className="media-player__modal__content__uploader__container">
									<Controller
										label="Please choose your track"
										as={InputFile}
										control={control}
										defaultValue=""
										type="file"
										name="track"
										id="track"
										accept="audio/*"
										register={register}
										labelClass="media-player__modal__content__track-file"
									/>
								</div>
							</Grid>
							<div className="media-player__modal__content__buttons">
								<button
									onClick={() => onDismiss()}
									className="media-player__modal__content__buttons__close"
								>
									Cancel
								</button>
								<button className="media-player__modal__content__buttons__upload">
									Upload
								</button>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		</form>,
		document.querySelector("#modal")
	);
};

export default Modal;
