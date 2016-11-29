import * as React from "react";

/*tslint:disable:no-var-requires*/
// require("./textInput.less");
/*tslint:disable:no-var-requires*/

export interface ITextInputProps {
	id: string;
	className: string;
	isInline: boolean;
	label: string;
	onChange?: React.FormEventHandler;
	placeholder?: string;
	value?: string;
	onKeyDown?: React.KeyboardEventHandler;
	disabled?: boolean;
}

export const TextInput = (props: ITextInputProps) => {
	return (
		<div className={`text-input ${props.className}`}>
			{props.isInline ? null : <label htmlFor={props.id}>{props.label}</label>}
			<input
				type="text"
				id={props.id}
				placeholder={props.placeholder}
				onChange={props.onChange}
				onKeyDown={props.onKeyDown}
				className="input"
				value={props.value}
			/>
		</div>
	);
};
