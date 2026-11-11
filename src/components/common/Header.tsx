import { useState } from 'react';
import MenuOverlay from './MenuOverlay';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <>
            <header className="fixed top-0 left-0 w-full flex justify-end py-4 bg-transparent px-5 md:px-20 z-[100] transition-all">
                <div className="flex">
                    <button
                        id="menuButton"
                        type="button"
                        aria-label="Toggle menu"
                        className={`flex flex-row items-center gap-2 text-xl focus:outline-none cursor-pointer ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
                        <span className="text-[#DAF7A6] hidden md:block select-none font-bold">
                            {isMenuOpen ? 'Close' : 'Menu'}
                        </span>
                        <div className="hamburger-icon">
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line line-3"></div>
                        </div>
                    </button>
                </div>
            </header>

            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

export default Header;
