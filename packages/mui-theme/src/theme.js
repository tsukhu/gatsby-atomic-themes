import { createMuiTheme } from '@material-ui/core/styles';
import themeDefaults from './tokens/theme';
import customTheme from './custom-theme';

const currentTheme = {...themeDefaults, ...customTheme }
// A custom theme for this app
const theme = createMuiTheme(currentTheme);

export default theme;
