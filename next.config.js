/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');
dotenv.config();

const withMDX = require('@next/mdx')();

// This would let mdx be treated as pages by next
// const withMDX = require('@next/mdx')({
//     extension: /\.mdx?$/,
// });

module.exports = withMDX({
    env: {
        AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
        AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
        AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
        AUTH0_SCOPE: 'openid profile',
        REDIRECT_URI:
            process.env.REDIRECT_URI || 'http://localhost:3000/api/callback',
        POST_LOGOUT_REDIRECT_URI:
            process.env.POST_LOGOUT_REDIRECT_URI || 'http://localhost:3000/',
        SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
        SESSION_COOKIE_LIFETIME: 7200, // 2 hours
    },
    poweredByHeader: false,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
});
