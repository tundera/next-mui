// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../../lib/auth0'
import { useFetchUser } from '../../lib/user';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import ProfileCard from '../components/ProfileCard';

const Profile: NextPage = () => {
    const { user, loading } = useFetchUser({ required: true });

    return (
        <Layout user={user} loading={loading}>
            {loading ? <>Loading...</> : <ProfileCard user={user} />}
        </Layout>
    );
};

export default Profile;
