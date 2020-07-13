import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Box, Grid } from '@material-ui/core';

import Button from '../components/Button';
import { NextPage } from 'next';

const Home: NextPage = () => {
    return (
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
                    <Grid item>
                        <Button color="primary">
                            <Typography variant="button">
                                <a href="https://google.com/">Click Me</a>
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Home;
