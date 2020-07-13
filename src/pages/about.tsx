// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../../lib/auth0';
import { NextPage } from 'next';

import Layout from '../components/Layout';
import { useFetchUser } from '../../lib/user';

const About: NextPage = () => {
    const { user, loading } = useFetchUser();
    return (
        <Layout user={user} loading={loading}>
            <div>About Page</div>
        </Layout>
    );
};

export default About;
