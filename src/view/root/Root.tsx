import React from "react";
import ThemeSelection from '../../components/theme-selection/ThemeSelection';
import { useTheme } from './../../hooks/theme/useTheme'

const Root = () => {
	const { theme } = useTheme()

	return (
		<div className={`theme-${theme}`}>
				<div className="root">
					<div className="container app-container">
						<div className="App">
							<ThemeSelection />
							<p>Text</p>
						</div>
					</div>
				</div>
			</div>
	)
}

export default Root
