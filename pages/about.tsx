// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../../lib/auth0';
import { NextPage } from 'next';

import { Typography, Container, Box } from '@material-ui/core';
import Copyright from '../src/components/Copyright';
import Link from '../src/components/Link';
import ProTip from '../src/components/ProTip';
import Layout from '../src/components/Layout';
import { useFetchUser } from '../lib/user';

const About: NextPage = () => {
    const { user, loading } = useFetchUser();

    return (
        <Layout user={user} loading={loading}>
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
        </Layout>
    );
};

export default About;
