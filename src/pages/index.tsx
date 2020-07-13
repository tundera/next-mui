import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

import Button from '../components/Button';
import Layout from '../components/Layout';
import { useFetchUser } from '../../lib/user';
import { NextPage } from 'next';

const Home: NextPage = () => {
    const { user, loading } = useFetchUser();

    return (
        <Layout user={user} loading={loading}>
            <Container maxWidth="sm">
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Next.js Starter with Material-UI
                    </Typography>

                    <Button color="primary">
                        <Typography variant="button">
                            <a href="https://google.com/">Click Me</a>
                        </Typography>
                    </Button>
                </Box>
            </Container>
        </Layout>
    );
};

export default Home;
