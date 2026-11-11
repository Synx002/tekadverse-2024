import { useEffect, useRef } from "react";
import logo from "../../assets/logo.svg";
import logoShadow from "../../assets/logo-shadow.svg";

const TICKER_ITEMS = [
    "DIGITAL ARTIST",
    "STORY WRITER",
    "COMIC LOVERS",
    "ILLUSTRATOR",
    "MANGA ARTIST",
    "3D ARTIST",
];

const HeroSection = () => {
    const heroRef = useRef<HTMLElement>(null);
    const shadowRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const hero = heroRef.current;
        const shadow = shadowRef.current;
        if (!hero || !shadow) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = hero.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const offsetX = e.clientX - centerX;
            const offsetY = e.clientY - centerY;
            shadow.style.transform = `translate3d(${-offsetX / 15}px, ${-offsetY / 15}px, 0)`;
        };

        hero.addEventListener("mousemove", handleMouseMove);
        return () => {
            hero.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="hero-section flex flex-col items-center justify-center bg-black"
        >
            <div className="image-container w-full max-w-[661px] aspect-[661/376]">
                <img src={logo} alt="Logo" className="main-logo absolute inset-0 w-full h-full object-contain" />
                <img
                    ref={shadowRef}
                    src={logoShadow}
                    className="shadow absolute inset-0 w-full h-full object-contain"
                    alt="Logo shadow"
                />
            </div>
            <div className="stock-ticker mt-10 w-full text-[16px] md:text-[2rem]">
                <ul>
                    {TICKER_ITEMS.map((item, idx) => (
                        <li key={`ticker-1-${idx}`}>
                            <span>
                                <img
                                    src="/assets/star.svg"
                                    alt=""
                                    className="w-[8px] md:w-[15px]"
                                />
                            </span>
                            <span>
                                <h1 className="bricolage-grotesque font-extrabold">{item}</h1>
                            </span>
                        </li>
                    ))}
                </ul>
                <ul aria-hidden="true">
                    {TICKER_ITEMS.map((item, idx) => (
                        <li key={`ticker-2-${idx}`}>
                            <span>
                                <img
                                    src="/assets/star.svg"
                                    alt=""
                                    className="w-[8px] md:w-[15px]"
                                />
                            </span>
                            <span>
                                <h1 className="bricolage-grotesque font-extrabold">{item}</h1>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HeroSection;
