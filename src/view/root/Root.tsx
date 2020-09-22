import React from "react";
import { useTheme } from './../../hooks/theme/useTheme'
import AppHeader from './../../components/header/AppHeader'

const Root = () => {
	const { theme } = useTheme()

	return (
		<div className={`theme-${theme}`}>
				<div className="root">
					<div className="container app-container">
						<div className="App">
							<AppHeader />
						</div>
					</div>
				</div>
			</div>
	)
}

export default Root
