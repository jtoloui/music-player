import React from "react";

import "./_input-file.scss";
function InputFile({
	name,
	label,
	accept,
	register,
	labelClass,
	validation,
	onChange
}) {
	const inputs = document.querySelector(".media-player__form__file-input");

	React.useEffect(() => {
		if (inputs) customInput(inputs);
	}, [inputs]);

	function customInput(el) {
		const fileInput = el.querySelector('[type="file"]');
		const label = el.querySelector("[data-js-label]");

		fileInput.onchange = fileInput.onmouseout = function() {
			if (!fileInput.value) return;
			const value = fileInput.value.replace(/^.*[\\/]/, "");
			fileInput.setAttribute(
				"value",
				fileInput.value.replace(/C:\\fakepath\\/g, "")
			);
			el.className += " -chosen";
			label.innerText = value;
		};
	}

	return (
		<div className="media-player__form__file-input">
			<label
				htmlFor={name}
				className={`media-player__form__input__label ${labelClass}`}
			>
				{label}
			</label>
			<br />
			<input
				type="file"
				name={name}
				id="track"
				accept={accept}
				ref={register({ ...validation })}
				onChange={onChange}
			/>
			<span className="button">Choose</span>
			<span className="label" data-js-label>
				No file selected
			</span>
		</div>
	);
}

export default InputFile;
