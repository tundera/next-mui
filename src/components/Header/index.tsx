import Link from 'next/link';

import { Grid } from '@material-ui/core';

interface Props {
    user: any;
    loading: boolean;
}

const Header: React.FC<Props> = ({ user, loading }) => {
    return (
        <header>
            <nav>
                <Grid container direction="column" justify="center">
                    <ul>
                        <Grid
                            container
                            item
                            alignItems="center"
                            justify="space-between"
                        >
                            <Grid item>
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                            </Grid>

                            <Grid item>
                                <li>
                                    <Link href="/about">
                                        <a>About</a>
                                    </Link>
                                </li>
                            </Grid>
                            {!loading &&
                                (user ? (
                                    <>
                                        <Grid container justify="flex-start">
                                            <Grid item>
                                                <li>
                                                    <Link href="/profile">
                                                        <a>Profile</a>
                                                    </Link>
                                                </li>
                                            </Grid>
                                            <Grid item>
                                                <li>
                                                    <a href="/api/logout">
                                                        Logout
                                                    </a>
                                                </li>
                                            </Grid>
                                        </Grid>
                                    </>
                                ) : (
                                    <Grid item>
                                        <li>
                                            <a href="/api/login">Login</a>
                                        </li>
                                    </Grid>
                                ))}
                        </Grid>
                    </ul>
                </Grid>
            </nav>

            <style jsx>{`
                header {
                    padding: 0.2rem;
                    color: #fff;
                    background-color: #333;
                }
                nav {
                    max-width: 42rem;
                    margin: 1.5rem auto;
                }
                ul {
                    display: flex;
                    list-style: none;
                    margin-left: 0;
                    padding-left: 0;
                }
                li {
                    margin-right: 1rem;
                }
                li:nth-child(2) {
                    margin-right: auto;
                }
                a {
                    color: #fff;
                    text-decoration: none;
                }
                button {
                    font-size: 1rem;
                    color: #fff;
                    cursor: pointer;
                    border: none;
                    background: none;
                }
            `}</style>
        </header>
    );
};

export default Header;
