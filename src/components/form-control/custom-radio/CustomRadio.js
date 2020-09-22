import React from 'react'
/**
 * @author Alex Hodson
 * @description the {@link CustomRadio} component provides the user interface for the custom radio buttons
 * @param id the id of the radio button
 * @param name the name of the radio button group
 * @param text the radio button text
 * @param handleChange the change event to be run
 * @param checked whether the radio button should be checked initially
 * @param state the state member linked with the radio button
 * @return {JSX.Element} the user interface for the custom radio button
 * @constructor
 */
const CustomRadio = ({ id, name, text, handleChange = () => {}, state }) => (
	<div className="custom-control custom-radio">
		<input
			type="radio"
			id={id}
			name={name}
			className="custom-control-input"
			onChange={() => handleChange(text)}
			checked={state === text}
		/>
		<label className="custom-control-label" htmlFor={id}>{text}</label>
	</div>
)

export default CustomRadio
