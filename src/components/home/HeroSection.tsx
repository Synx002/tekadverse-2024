import logo from "../../assets/logo.svg";
import logoShadow from "../../assets/logo-shadow.svg";

const HeroSection = () => {
    return (
        <section className="hero-section flex flex-col items-center justify-center bg-black">
            <div className="image-container">
                <img src={logo} alt="Logo" className="main-logo h-auto max-w-full" />
                <img src={logoShadow} className="shadow h-auto max-w-full" alt="Logo shadow" />
            </div>
            <div className="stock-ticker mt-10 w-full text-[16px] md:text-[2rem]">
                <ul>
                    <li><span><img src="/assets/star.svg" alt="" className="w-[8px] md:w-[15px]" /></span></li>
                    <li><span><h1 className="font-bricolage font-extrabold">DIGITAL ARTIST</h1></span></li>
                    <li><span><img src="/assets/star.svg" alt="" className="w-[8px] md:w-[15px]" /></span></li>
                    <li><span><h1 className="font-bricolage font-extrabold">STORY WRITER</h1></span></li>
                    <li><span><img src="/assets/star.svg" alt="" className="w-[8px] md:w-[15px]" /></span></li>
                    <li><span><h1 className="font-bricolage font-extrabold">COMIC LOVERS</h1></span></li>
                    <li><span><img src="/assets/star.svg" alt="" className="w-[8px] md:w-[15px]" /></span></li>
                    <li><span><h1 className="font-bricolage font-extrabold">ILLUSTRATOR</h1></span></li>
                    <li><span><img src="/assets/star.svg" alt="" className="w-[8px] md:w-[15px]" /></span></li>
                    <li><span><h1 className="font-bricolage font-extrabold">MANGA ARTIST</h1></span></li>
                    <li><span><img src="/assets/star.svg" alt="" className="w-[8px] md:w-[15px]" /></span></li>
                    <li><span><h1 className="font-bricolage font-extrabold">3D ARTIST</h1></span></li>
                </ul>
                <ul aria-hidden="true">
                    {/* Duplicate for infinite scroll effect */}
                </ul>
            </div>
        </section>
    );
};
export default HeroSection;