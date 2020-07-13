// import { createMuiTheme } from '@material-ui/core/styles';

// // Create a theme instance.
// const theme = createMuiTheme({
//     palette: {
//         primary: {
//             main: '#88D6BA',
//         },
//         secondary: {
//             main: '#D688A3',
//         },
//         background: {
//             default: '#fff',
//         },
//     },
// });

// export default theme;

import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;
