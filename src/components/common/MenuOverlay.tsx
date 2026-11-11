import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuLinks = [
    { label: 'About', target: 'about' },
    { label: 'Artwork', target: 'artwork' },
    { label: 'Service', target: 'service' },
    { label: 'Contact', target: 'contact' },
];

const MenuOverlay = ({ isOpen, onClose }: MenuOverlayProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLinkClick = (e: React.MouseEvent, target: string) => {
        e.preventDefault();
        onClose();

        if (location.pathname === '/') {
            const el = document.getElementById(target);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(`/#${target}`);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black z-50 px-6 md:px-20 text-broken-white flex flex-col justify-between py-12"
                >
                    <div className="flex md:justify-start md:items-start justify-center items-center flex-col gap-10 mt-16">
                        <div className="flex flex-col gap-6 text-lg font-semibold">
                            {menuLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={`#${link.target}`}
                                    className="menu-link text-[42px] md:text-[56px] text-broken-white hover:text-[#DAF7A6] transition-colors"
                                    onClick={(e) => handleLinkClick(e, link.target)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex space-x-12 text-2xl justify-center md:justify-start">
                        <a href="https://www.instagram.com/tekadverse" target="_blank" rel="noopener noreferrer" className="hover:text-broken-white text-[#DAF7A6] text-[26px]">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://youtube.com/@tekadverse3915" target="_blank" rel="noopener noreferrer" className="hover:text-broken-white text-[#DAF7A6] text-[26px]">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://wa.me/6285155353365" target="_blank" rel="noopener noreferrer" className="hover:text-broken-white text-[#DAF7A6] text-[26px]">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MenuOverlay;
