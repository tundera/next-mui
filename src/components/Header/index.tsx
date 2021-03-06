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
                <Grid container alignItems="center" justify="space-between">
                    <ul>
                        <Grid container item>
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
                        </Grid>
                    </ul>

                    <ul>
                        {!loading &&
                            (user ? (
                                <Grid container item justify="flex-end">
                                    <Grid item>
                                        <li>
                                            <Link href="/profile">
                                                <a>Profile</a>
                                            </Link>
                                        </li>
                                    </Grid>
                                    <Grid item>
                                        <li>
                                            <a href="/api/logout">Logout</a>
                                        </li>
                                    </Grid>
                                </Grid>
                            ) : (
                                <Grid container item>
                                    <Grid item>
                                        <li>
                                            <a href="/api/login">Login</a>
                                        </li>
                                    </Grid>
                                </Grid>
                            ))}
                    </ul>
                </Grid>
            </nav>

            <style jsx>{`
                header {
                    padding: 0.2rem;
                    color: #fff;
                    background-color: #000;
                }
                nav {
                    max-width: 84rem;
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
