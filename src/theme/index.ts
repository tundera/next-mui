import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#eee',
        },
        secondary: {
            main: '#006ac7',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#a8a8a8',
        },
    },
});

export default theme;
