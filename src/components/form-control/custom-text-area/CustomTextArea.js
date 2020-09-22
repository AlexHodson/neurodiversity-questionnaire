import React from 'react'
import '../../../style/custom-text-area.css'
import '../../../style/typography.css'

/**
 * @author Alex Hodson
 * @description the {@link CustomTextArea} component provides the user interface for the custom text area entry node.
 * The entry node should have a restricted character length which is displayed underneath the entry node
 * @param {*} state the state member for the custom text area
 * @param {*} id the node identifier for the element
 * @param {*} label the entry node's label text
 * @param {*} handleChange the entry node's on change method
 * @param {*} type the entry node's type value
 * @param {*} maxLength the maximum number of characters allowed in the entry node
 */
const CustomTextArea = ({ state, id, label, placeholder, handleChange, type = 'text', maxLength = '300' }) => (
	<div className="custom-text-area">
		<label className="label" htmlFor={id}>
			{label}
		</label>
		<textarea
			state={state}
			type={type}
			id={id}
			data-testid={id}
			className="text-area"
			placeholder={placeholder}
			onChange={handleChange}
			maxLength={maxLength}
			required
		/>
		<div className="text-area-limit">
			<span>
				{state.length}
				/
				{maxLength}
			</span>
		</div>
	</div>
)

export default CustomTextArea
