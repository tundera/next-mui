import React from 'react';

interface CardProps {
    user: any;
}

const ProfileCard: React.FC<CardProps> = ({ user }) => {
    return (
        <>
            <h1>Profile</h1>

            <div>
                <h3>Profile (client rendered)</h3>
                <img src={user.picture} alt="user picture" />
                <p>nickname: {user.nickname}</p>
                <p>name: {user.name}</p>
            </div>
        </>
    );
};

export default ProfileCard;
