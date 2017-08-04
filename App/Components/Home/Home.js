import React from 'react'
import { container, title, slogan } from './styles.css'

const Home = (props) => {
    return (
        <div className={container}>
            <p className={title}>Duckr</p>
            <p className={slogan}>The cute little marketing slogan for how great Duckr is: buzzword, buzzword, buzzword</p>
        </div>
    )
}

export default Home
