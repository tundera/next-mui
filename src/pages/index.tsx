import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Box, Grid } from '@material-ui/core';
import Link from '../components/Link';
import { useFetchUser } from '../../lib/user';

import Button from '../components/Button';
import Layout from '../components/Layout';

import { NextPage } from 'next';

const Home: NextPage = () => {
    const { user, loading } = useFetchUser();

    return (
        <Layout user={user} loading={loading}>
            <Container maxWidth="sm">
                <Box my={4}>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                Next.js Starter with Material-UI
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" gutterBottom>
                                View Profile
                            </Typography>
                        </Grid>
                        <Grid container item justify="center" spacing={2}>
                            <Grid item>
                                <Button color="primary">
                                    <Link href="/profile">
                                        <a>
                                            <Typography variant="button">
                                                CSR profile
                                            </Typography>
                                        </a>
                                    </Link>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button color="primary">
                                    <Link href="/advanced/ssr-profile">
                                        <Typography variant="button">
                                            <a>SSR Mode</a>
                                        </Typography>
                                    </Link>
                                </Button>
                            </Grid>
                            ;
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Layout>
    );
};

export default Home;
