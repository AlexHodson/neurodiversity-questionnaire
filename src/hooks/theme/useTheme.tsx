import { useContext } from 'react';
import { ThemeContext } from '../context/useUserContext'

export const useTheme = (): any =>useContext(ThemeContext);
