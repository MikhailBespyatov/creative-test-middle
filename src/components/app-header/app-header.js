import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './app-header.css';

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <nav className="app-header__button-list">
                    <NavLink to="/" exact
                        className="app-header__button "
                        activeClassName="app-header__button--active">Все квартиры</NavLink>
                    <NavLink to="/liked"
                        className="app-header__button"
                        activeClassName="app-header__button--active">Избранные</NavLink>
                </nav>
            </header>
        );
    }
}

export default AppHeader;