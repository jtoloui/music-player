import React from "react";
import { ErrorMessage } from "react-hook-form";

import "./_input.scss";
function InputText({
	label,
	name,
	type,
	labelClass,
	inputClass,
	register,
	validation,
	errors,
	accepts
}) {
	return (
		<div className="media-player__form__input">
			<label
				htmlFor={name}
				className={`media-player__form__input__label ${labelClass}`}
			>
				{label}
			</label>
			<br />
			<input
				type={type}
				name={name}
				className={`media-player__form__input__${type} ${inputClass}`}
				accept={accepts}
				ref={register({ ...validation })}
			/>
			{errors && errors.hasOwnProperty(name) && (
				<div className="media-player__form__input__error-message">
					<ErrorMessage errors={errors} name={name} />
				</div>
			)}
		</div>
	);
}

export default InputText;
