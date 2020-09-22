import React, { useState } from 'react'
import { useTheme } from './../../hooks/theme/useTheme'

const ThemeSelection = () => {
	const [user, setUser] = useState({ 'theme': 'light' })

	const { setTheme } = useTheme()

	const themes: any = ['Light', 'Dark']

	const changeTheme = (selectedTheme: React.FormEvent<HTMLSelectElement>) => {
		setTheme(selectedTheme.currentTarget.value.toLowerCase())
    
		document.documentElement.className = '';
		document.documentElement.classList.add(`theme-${user.theme}`);
	}

	return (
		<select defaultValue={user.theme} onChange={e => changeTheme(e)}>
			{
				themes.map((theme: string, index: number) =>
					<option value={theme} key={index}>{theme}</option>
				)
			}
		</select>
	)
}

export default ThemeSelection
