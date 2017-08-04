import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { container, navContainer, link } from './styles.css'

const NavLinks = (props) => {
    return props.isAuthed === true
            ? <ul>
                <li className={link}><Link to='/'>Home</Link></li>
            </ul>
            : null
}


const ActionLinks = (props) => {
    return props.isAuthed === true
        ? <ul>
            <li className={link}>NEW DUCK</li>
            <li className={link}><Link to='/logout'>Logout</Link></li>
        </ul>
        : <ul>
            <li className={link}><Link to='/'>Home</Link></li>
            <li className={link}><Link to='/auth'>Authenticate</Link></li>
        </ul>

}


const Navigation = (props) => {
    return (
        <div className={container}>
            <nav className={navContainer}>
                <NavLinks isAuthed={props.isAuthed}/>
                <ActionLinks isAuthed={props.isAuthed}/>
            </nav>
        </div>
    )
}

Navigation.propTypes = ActionLinks.propTypes = NavLinks.propTypes = {
    isAuthed : PropTypes.bool.isRequired
}

export default Navigation
