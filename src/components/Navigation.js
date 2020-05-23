import React, {useState } from 'react'
import {Link} from 'react-router-dom'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const links = [
    {
        title: 'Home',
        route: '/'
    },
    {
        title: 'Blogs',
        route: '/blogs'
    },
    {
        title: 'Create',
        route: '/create'
    },
    {
        title: 'Contact',
        route: '/contact'
    },
    {
        title: 'Login',
        route: '/login'
    },
]



function Navigation() {

    const [menuactive, setmenuactive] = useState(false)
     
    return (
        <nav id="main-navigation">
            <span id="menu-title">
                Blog.py
            </span>
            <div id="menu-container" className={ menuactive ? `active` : undefined}>
                <ul>
                    {
                        links.map((link,index)=> <li key={index}><Link to={link.route} onClick={()=> setmenuactive(!menuactive)}>{link.title}</Link></li>)
                    }
                </ul>
               
            </div>
            <span id="menu-btn" onClick={()=> setmenuactive(!menuactive)} className={menuactive && 'active'}><MenuRoundedIcon/></span>
        </nav>
    )
}

export default Navigation
