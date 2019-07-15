import themeDefaults from './tokens/theme';
import customTheme from './custom-theme';

const currentTheme = { ...themeDefaults, ...customTheme };

export default currentTheme;
