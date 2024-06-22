import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#0ABAB5', // Tiffany color
    onPrimary: 'rgb(0, 0, 0)', // Black text on primary
    primaryContainer: '#7AE2E0',
    onPrimaryContainer: '#003D3B',
    secondary: '#00796B', // A darker teal
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: '#4DB6AC',
    onSecondaryContainer: '#004D40',
    background: '#E0F7F4', // Light background
    onBackground: 'rgb(0, 0, 0)', // Black text
    surface: '#FAFAFA', // Same as background
    onSurface: 'rgb(0, 0, 0)', // Black text
    error: 'rgb(176, 0, 32)',
    onError: 'rgb(255, 255, 255)',
    surfaceVariant: '#D0E4E3',
    onSurfaceVariant: '#4F6362',
    outline: '#8DAAAA',
    outlineVariant: '#B4D3D3',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: '#2D3333',
    inverseOnSurface: '#E5EAEA',
    inversePrimary: '#A4EDEB',
    elevation: {
      level0: 'transparent',
      level1: '#E0F7F6',
      level2: '#C4EFEF',
      level3: '#A8E8E8',
      level4: '#8CE1E1',
      level5: '#70DAD9',
    },
    surfaceDisabled: 'rgba(0, 0, 0, 0.12)',
    onSurfaceDisabled: 'rgba(0, 0, 0, 0.38)',
    backdrop: 'rgba(0, 0, 0, 0.4)',
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#0ABAB5', // Tiffany color
    onPrimary: 'rgb(0, 0, 0)', // Black text on primary
    primaryContainer: '#005F5C',
    onPrimaryContainer: '#7AE2E0',
    secondary: '#4DB6AC', // Lighter teal for dark mode
    onSecondary: 'rgb(0, 0, 0)',
    secondaryContainer: '#004D40',
    onSecondaryContainer: '#4DB6AC',
    background: '#121212', // Dark background
    onBackground: 'rgb(255, 255, 255)', // White text
    surface: '#121212', // Same as background
    onSurface: 'rgb(255, 255, 255)', // White text
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    surfaceVariant: '#4F6362',
    onSurfaceVariant: '#B4D3D3',
    outline: '#8DAAAA',
    outlineVariant: '#4F6362',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: '#E5EAEA',
    inverseOnSurface: '#2D3333',
    inversePrimary: '#0ABAB5',
    elevation: {
      level0: 'transparent',
      level1: '#1E2828',
      level2: '#243232',
      level3: '#2A3C3C',
      level4: '#304646',
      level5: '#365050',
    },
    surfaceDisabled: 'rgba(255, 255, 255, 0.12)',
    onSurfaceDisabled: 'rgba(255, 255, 255, 0.38)',
    backdrop: 'rgba(0, 0, 0, 0.4)',
  },
};
