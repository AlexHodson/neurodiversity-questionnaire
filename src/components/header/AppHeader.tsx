import React from 'react'
import ThemeSelection from '../theme-selection/ThemeSelection'

const AppHeader = () => {
	return (
		<div id="app-header" className="d-flex justify-content-between">
			<div className="header">
				<h1>Neurodiversity Questionnaire</h1>
			</div>
			<div className="options">
				<ThemeSelection />
			</div>
		</div>
	)	
}

export default AppHeader
