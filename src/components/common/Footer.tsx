const Footer = () => {
    return (
        <footer className="bg-lime-green pt-10 md:pt-40 px-6 md:px-20">
            <div className="flex flex-col md:flex-row md:justify-between items-center max-w-[1376px] mx-auto h-full">
                <div className="text-center md:text-left text-[16px] md:text-[20px] font-medium pb-[30px] md:pb-[0px]">
                    <p>Your best friend on creating digital comic</p>
                </div>
                <div className="flex space-x-6 text-2xl">
                    <a href="https://www.upwork.com/freelancers/~01d16336a235fccdab" className="relative group text-black">
                        <i className="fa-brands fa-upwork align-middle"></i>
                        <span className="tooltip font-bricolage text-lime-green">Upwork</span>
                    </a>
                    <a href="https://www.fiverr.com/fanmud" className="relative group text-black flex items-center">
                        <img src="/assets/fiverr-icon.svg" alt="Fiverr" />
                        <span className="tooltip font-bricolage text-lime-green">Fiverr</span>
                    </a>
                    <a href="https://www.instagram.com/tekadverse" className="relative group text-black">
                        <i className="fab fa-instagram"></i>
                        <span className="tooltip font-bricolage text-lime-green">Instagram</span>
                    </a>
                    <a href="https://youtube.com/@tekadverse3915" className="relative group text-black">
                        <i className="fab fa-youtube"></i>
                        <span className="tooltip font-bricolage text-lime-green">YouTube</span>
                    </a>
                    <a href="https://wa.me/6285155353365" className="relative group text-black">
                        <i className="fab fa-whatsapp"></i>
                        <span className="tooltip font-bricolage text-lime-green">WhatsApp</span>
                    </a>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <img src="/assets/footer.png" alt="Footer" className="w-[1376px] h-auto" />
            </div>
        </footer>
    );
};
export default Footer;