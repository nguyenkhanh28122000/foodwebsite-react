import { useState } from 'react'

import { headerNavs } from '../../data/data1'

import "./header.css"
import "../reponsive.css"

function Header({activeIndex, closeMenu1}) {
    // state Close Menu
    const [closeMenu, setCloseMenu] = useState(false)
    const [isActiveNav, setIsActiveNav] = useState(false)

    // state active Nav Item
    const [activeNavItem, setActiveNavItem] = useState(activeIndex)

    // state search
    const [isSearch, setIsSearch] = useState(false)

    // function handle close Menu
    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu)
        setIsActiveNav(!isActiveNav)
    }

    window.onscroll = () => {
        setCloseMenu(false)
        setIsActiveNav(false)
    }

    return (
        <header>
            <a href="" className="logo"><i class="fa-solid fa-utensils"></i>Resto</a>

            <nav className={`header-nav ${isActiveNav && 'active'}`}>
                {
                    headerNavs.map((headerNav, index) => (
                        <a  href={`#${headerNav.name}`} 
                            className={`nav__item ${activeNavItem === index ? 'active':''}`} 
                            key={index}
                            onClick={() => setActiveNavItem(index)}
                        >
                            {headerNav.name}
                        </a>
                    ))
                }
            </nav>

            <div class="header-icon">
                <i className={`header-icon__item header-icon__bars fa-solid ${closeMenu ? 'fa-xmark':'fa-bars'}`} 
                    onClick={handleCloseMenu}
                ></i>
                <i className="header-icon__item header-icon__search  fa-solid fa-magnifying-glass"
                    onClick={()=> setIsSearch(true)}
                ></i>
                <a href="#" className="header-icon__item  fa-solid fa-heart"></a>
                <a href="#" className="header-icon__item  fa-solid fa-cart-shopping"></a>
            </div>

            <form action="" className={`search ${isSearch ? 'active':''}`}>
                <i className="search-icon__close fa-solid fa-xmark"
                    onClick={()=> setIsSearch(false)}
                ></i> 
                <div className="search-box">
                    <input type="text" placeholder="Search here..."></input>
                </div>
                <i className="search-icon__glass fa-solid fa-magnifying-glass"></i>
            </form>
    </header>
    )
}

export default Header