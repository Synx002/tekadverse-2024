import { Link } from 'react-router-dom';
import kaboHero from "../../assets/kabo-header.png";
import kitchenLadyHero from "../../assets/kitchen-lady-header.png";
import bravyHero from "../../assets/bravy-hero.png";
import tkd from "../../assets/tkd.png";

const ArtworkSection = () => {
    return (
        <section id="artwork">
            <div className="flex justify-center items-center h-screen bg-[#000]">
                <h1 className="text-[72px] md:text-[240px] font-extrabold leading-[90%] tracking-[-4%] text-broken-white font-extrabold">
                    Artworks
                </h1>
            </div>

            <Link to="/kabo" className="block">
                <div className="parallax-wrap">
                    <div className="parallax-img" style={{ backgroundImage: `url(${kaboHero})` }}></div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-[1]"></div>
                    <div className="content relative z-10 flex items-center justify-center h-full px-4">
                        <h1 className="parallax-section-text bricolage-grotesque leading-[100%] text-center font-extrabold md:text-[160px] text-broken-white">
                            KABO Comic <br /> Series
                        </h1>
                    </div>
                </div>
            </Link>

            <Link to="/kitchen-lady" className="block">
                <div className="parallax-wrap">
                    <div className="parallax-img" style={{ backgroundImage: `url(${kitchenLadyHero})` }}></div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-[1]"></div>
                    <div className="content relative z-10 flex items-center justify-center h-full px-4">
                        <h1 className="parallax-section-text bricolage-grotesque leading-[100%] text-center font-extrabold md:text-[160px] text-broken-white">
                            One Shot Manga<br /> Project <br />Compilation
                        </h1>
                    </div>
                </div>
            </Link>

            <Link to="/bravy" className="block">
                <div className="parallax-wrap">
                    <div className="parallax-img" style={{ backgroundImage: `url(${bravyHero})` }}></div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-[1]"></div>
                    <div className="content relative z-10 flex items-center justify-center h-full px-4">
                        <h1 className="parallax-section-text bricolage-grotesque leading-[100%] text-center font-extrabold md:text-[160px] text-broken-white">
                            Barvy Comic Strip
                        </h1>
                    </div>
                </div>
            </Link>

            <div className="parallax-wrap">
                <div className="parallax-img" style={{ backgroundImage: `url(${tkd})` }}></div>
                <div className="absolute inset-0 bg-black bg-opacity-40 z-[1]"></div>
                <div className="content relative z-10 flex flex-col items-center justify-center h-full px-4">
                    <h4 className="bricolage-grotesque leading-[100%] text-center font-normal text-[24px] md:text-[32px] mb-6 md:mb-10 text-broken-white">
                        and more~
                    </h4>
                    <h1 className="parallax-section-text bricolage-grotesque leading-[100%] text-center font-extrabold text-[36px] md:text-[120px] text-broken-white">
                        want to be the next <br /> on our works?
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default ArtworkSection;
