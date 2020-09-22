import React, { useState } from 'react'

const ThemeSelection = () => {
	const [user, setUser] = useState({ 'theme': 'light' })

	const themes: any = ['Light', 'Dark']

	const changeTheme = (selectedTheme: React.FormEvent<HTMLSelectElement>) => {
		setUser({ 'theme': selectedTheme.currentTarget.value.toLowerCase() })
    
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
