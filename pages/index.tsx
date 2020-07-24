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
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                tundera (material)
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
                </Box>
            </Container>
        </Layout>
    );
};

export default Home;
