import React from 'react'
import Select from 'react-select'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link CustomSelect} method provides the user interface for a custom {@link Select} node
 * @param state the state member to be tied to the node
 * @param options the options to be displayed in the node
 * @param handleChange the method to be called when a selection is made
 * @param label the text to be displayed in the label
 * @param placeholder the selection node's placeholder value
 */
const CustomSelect = ({
	state,
	options,
	handleChange,
	label = 'Available Actions',
	placeholder = 'Please select an action'
}) => (
	<div className="select" data-testid="custom-select">
		<span className="label">{label}</span>
		<Select
			aria-label={label}
			classNamePrefix="list"
			value={state}
			inputProps={{ 'data-testid': 'custom-select' }}
			placeholder={placeholder}
			options={options}
			onChange={handleChange}
		/>
	</div>
)

export default CustomSelect
