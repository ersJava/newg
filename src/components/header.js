import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header>
            <div className={headerStyles.container}>
                <Link className= {headerStyles.logo} to="#Home">Beth</Link>
                    <nav className= {headerStyles.nav}>
                        <ul className= {headerStyles.ul}>
                            <li className= {headerStyles.li}>
                                <Link to="#About">About</Link>
                            </li>
                            <li className= {headerStyles.li}>
                                <Link to="#Portfolio">Portfolio</Link>
                            </li>
                            <li className= {headerStyles.li}>
                                <Link to="#Contact">Contact</Link>
                            </li>
                        </ul>    
                    </nav> 
                </div>     
            </header>
    )
}

export default Header