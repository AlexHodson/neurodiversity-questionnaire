import React from 'react'

/**
 * @author Alex Hodson
 * @description the {@link CustomLabel} component provides the user interface for a standard label element
 * @param text the label text
 * @param id the label identifier
 * @return {JSX.Element} the label element
 * @constructor
 */
const CustomLabel = ({ text, id }) => (
	<p className="lead-sm" id={id}>{text}</p>
)

export default CustomLabel
