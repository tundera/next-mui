import React from 'react';

import { useTheme } from '@material-ui/core/styles';
import { Button } from '../components/Button';
import Layout from '../components/Layout';
import { useFetchUser } from '../lib/user';

const Home = () => {
    const theme = useTheme();
    const hello = 'Hello';

    const { user, loading } = useFetchUser();

    return (
        <Layout user={user} loading={loading}>
            <div style={{ color: theme.palette.primary.main, display: 'flex' }}>
                {hello}
                <div
                    style={{
                        flex: 'auto',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Button name="Click Me" color="primary" />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
