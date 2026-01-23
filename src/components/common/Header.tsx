import { useState } from 'react';
import MenuOverlay from './MenuOverlay';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    return (
        <>
            <header className="flex justify-end py-4 bg-transparent px-5 md:px-20">
                <div className="flex">
                    <button
                        id="menuButton"
                        className="flex flex-row text-xl focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <span className="text-lime-green hidden md:block">Menu</span>
                        <div className="hamburger-icon">
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line line-3"></div>
                        </div>
                    </button>
                </div>
            </header>

            <MenuOverlay isOpen={isMenuOpen} onClose={toggleMenu} />
        </>
    );
};
export default Header;