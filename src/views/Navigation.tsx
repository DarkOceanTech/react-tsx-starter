import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (): JSX.Element => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark app-bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">Logo</Link>

                    <div>
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"
                            >
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item"
                            >
                                <Link className="nav-link" to="/community">
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="navbar-nav mx-auto">
                            <li className="btn text-white">Sign up
                            </li>

                            <li className="btn text-secondary">Sign in
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navigation;