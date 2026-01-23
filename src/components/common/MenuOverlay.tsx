import { motion, AnimatePresence } from 'framer-motion';
interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}
const menuLinks = [
    { label: 'About', href: '#about' },
    { label: 'Artwork', href: '#artwork' },
    { label: 'Service', href: '#service' },
    { label: 'Contact', href: '#contact' },
];
const MenuOverlay = ({ isOpen, onClose }: MenuOverlayProps) => {
    const handleLinkClick = () => {
        onClose();
    };
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-100 z-20 px-6 md:px-20 text-broken-white"
                >
                    <div className="flex md:justify-start md:items-start justify-center items-center flex-col gap-20">
                        <div className="flex flex-col gap-10 text-lg font-semibold mt-28">
                            {menuLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="menu-link text-[56px] text-broken-white hover:text-lime-green"
                                    onClick={handleLinkClick}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <div className="flex space-x-12">
                            <a href="https://www.instagram.com/tekadverse" className="hover:text-broken-white text-lime-green text-[26px]">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://youtube.com/@tekadverse3915" className="hover:text-broken-white text-lime-green text-[26px]">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="https://wa.me/6285155353365" className="hover:text-broken-white text-lime-green text-[26px]">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default MenuOverlay;