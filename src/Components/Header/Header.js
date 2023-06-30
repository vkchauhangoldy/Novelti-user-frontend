import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom';
import logo from '../assets/VK Photo.jpg'
function ColorSchemesExample() {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <img src={logo} alt="VK Chauhan Goldy" />
                <h1>Novelti</h1>
            </div>
            <div className={classes.actions}>
                <Link to='/'>Home</Link>
                <Link to='/main'>All Users</Link>
                <Link to='/'>Add users</Link>
            </div>

        </div>
    );
}

export default ColorSchemesExample;
