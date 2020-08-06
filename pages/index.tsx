import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Box, Grid } from '@material-ui/core';

import Button from '../src/components/Button';
import Layout from '../src/components/Layout';
import Link from '../src/components/Link';
import { useFetchUser } from '../lib/user';

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
                        <Grid
                            container
                            item
                            alignItems="center"
                            direction="column"
                        >
                            <Grid item>
                                <Typography variant="h4" gutterBottom>
                                    Next.js with Material-UI and Auth0
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item justify="center" spacing={1}>
                            <Grid item>
                                <Typography variant="h6" gutterBottom>
                                    View Profile
                                </Typography>
                            </Grid>
                            <Grid item container justify="center" spacing={2}>
                                <Grid item>
                                    <Button color="primary">
                                        <Link href="/profile">
                                            <a>Client-side</a>
                                        </Link>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button color="primary">
                                        <Link href="/advanced/ssr-profile">
                                            <a>Server-side</a>
                                        </Link>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Layout>
    );
};

export default Home;
