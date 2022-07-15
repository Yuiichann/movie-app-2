import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import userImage from '../../images/user.png';

const Header = ({ onSearch }) => {
    const [key, setKey] = useState('')

    const handleKeyUp = e => {
        if (e.which == 13) 
            onSearch(key)
    }

    return (
        <div className="header">
            <Link to="/">
                <div className="logo">Movie App</div>
            </Link>

            <div className="input-search">
                <input
                    type="search"
                    value={key}
                    onChange={e => setKey(e.target.value)}
                    onKeyUp={handleKeyUp}
                />
                <button onClick={() => onSearch(key)}>Search</button>
            </div>

            <div className="user-image">
                <img src={userImage} alt="user" />
            </div>
        </div>
    );
};

export default Header;