// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../../lib/auth0';
import { NextPage } from 'next';

import { Typography, Container, Box } from '@material-ui/core';
import Copyright from '../components/Copyright';
import Link from '../components/Link';
import ProTip from '../components/ProTip';

const About: NextPage = () => {
    return (
        <Container maxWidth="sm">
            <Typography variant="h2">About Page</Typography>;
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js with TypeScript example
                </Typography>
                <Link href="/">Go to the main page</Link>
                <ProTip />
                <Copyright />
            </Box>
        </Container>
    );
};

export default About;
