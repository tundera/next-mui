// This import is only needed when checking authentication status directly from getInitialProps
import auth0 from '../../lib/auth0';
import { NextPage } from 'next';

import Layout from '../components/Layout';

const Profile: NextPage = () => {
    return (
        <Layout>
            <div>About Page</div>
        </Layout>
    );
};

export default Profile;
