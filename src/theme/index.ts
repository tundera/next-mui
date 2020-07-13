import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#88D6BA',
        },
        secondary: {
            main: '#D688A3',
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;
