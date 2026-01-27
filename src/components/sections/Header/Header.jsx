import { useState, useEffect } from 'react';
import './Header.css';
import '../../ui/HeaderEffect.css';
import logo from '../../../assets/mini-logo.png';

function Header({ children, mobileContent }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className={`header-component-wrapper ${scrolled ? 'scrolled' : ''}`}>
            <div className={`header-effect-wrapper ${scrolled ? 'scrolled' : ''}`}>
                <div className="header-content-container">
                    <header className="header-container">
                        <img src={logo} alt="CliniCare Logo" className="header-logo"/>
                        {children}
                    </header>
                </div>
            </div>

            <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="menu-icon__line"></div>
                <div className="menu-icon__line"></div>
                <div className="menu-icon__line"></div>
            </div>

            <div className={`backdrop ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

            <nav className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
                {mobileContent && mobileContent(closeMenu)}
            </nav>
        </div>
    );
} export default Header;