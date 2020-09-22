import React from 'react'

import '../../../style/custom-input.css'

/**
 * @author Alex Hodson
 * @description the {@link CustomInput} component provides the user interface for a custom input field
 * @param label the input field's label
 * @param id the input field's id
 * @param handleChange the onChange method to be run when the input changes
 * @param icon an icon to be rendered with the input field
 * @param type the type of input field to be rendered
 * @param floating whether the input field should have a floating label
 * @param disabled whether the input field should be disabled
 * @return {JSX.Element} the user interface for a custom input field
 * @constructor
 */
const CustomInput = ({ state, label, id, handleChange, icon, type = 'text', floating = true, disabled = false }) => (
	<div className="custom-input">
		{ !floating && <span className="label">{label}</span> }
		<div className={floating ? 'form-label-group' : ''}>
			<input
				value={state}
				type={type}
				id={id}
				data-testid={id}
				className="form-control"
				placeholder={label}
				onChange={handleChange}
				disabled={disabled}
				required
			/>
			{ floating && (
				<label htmlFor={id}>
					{label}
					{ typeof icon !== 'undefined' && (
						<div className="control-icon">
							{icon}
						</div>
					)}
				</label>
			)}
		</div>
	</div>
)

export default CustomInput
