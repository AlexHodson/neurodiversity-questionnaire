import React, { useState } from 'react'
import CustomSelect from '../form-control/custom-select/CustomSelect'
import { useTheme } from './../../hooks/theme/useTheme'

const ThemeSelection = () => {
	const themes: any = [
		{ 'label': 'Light', 'value': 'light' },
		{ 'label': 'Dark', 'value': 'dark' }
	]

	const [user, setUser] = useState(themes[0])

	const { setTheme } = useTheme()

	const changeTheme = (selectedTheme: any) => {
		setTheme(selectedTheme['value'])
		setUser({ ...selectedTheme })

		document.documentElement.className = '';
		document.documentElement.classList.add(`theme-${user.label}`);
	}

	return (
		<CustomSelect state={user} options={themes} handleChange={changeTheme} label="Theme Options" />
	)
}

export default ThemeSelection
