import kaboHero from "../../assets/kabo-header.png";
import kitchenLadyHero from "../../assets/kitchen-lady-header.png";
import bravyHero from "../../assets/bravy-hero.png";
import tkd from "../../assets/tkd.png";

const ArtworkSection = () => {
    return (
        <section id="artwork">
            <div className="flex justify-center items-center h-screen bg-[#000]">
                <h1 className="text-[72px] md:text-[240px] font-extrabold leading-[90%] tracking-[-4%] text-broken-white font-extrabold">Artworks</h1>
            </div>
            <a href="pages/kabo.html">
                <div className="parallax">
                    <img src={kaboHero} alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="content relative z-10 flex items-center justify-center h-full">
                        <h1 className="parallax-section-text bricolage-grotesque leading-[100%] text-center font-extrabold md:text-[160px] text-broken-white">
                            KABO Comic  Series
                        </h1>
                    </div>
                </div>
            </a>
            <a href="pages/kitchen-lady.html">
                <div className="parallax">
                    <img src={kitchenLadyHero} alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="content relative z-10 flex items-center justify-center h-full">
                        <h1 className="parallax-section-text bricolage-grotesque leading-[100%] text-center font-extrabold md:text-[160px] text-broken-white">One Shot Manga Project Compilation</h1>
                    </div>
                </div>
            </a>

            <a href="pages/bravy.html">
                <div>
                    <img src={bravyHero} alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="content relative z-10 flex items-center justify-center h-full">
                        <h1 className="parallax-section-text bricolage-grotesque leading-[100%] text-center font-extrabold md:text-[160px] text-broken-white">Barvy Comic Strip</h1>
                    </div>
                </div>
            </a>
            <div className="parallax">
                <img src={tkd} alt="" />
                <div className="content">
                    <h4 className="parallax-section-text bricolage-grotesque leading-[100%] text-center font-normal text-[32px] mb-10 text-broken-white">and more~</h4>
                    <h1 className="parallax-section-text bricolage-grotesque leading-[100%] text-center font-extrabold text-broken-white">want to be the next
                        on our works?</h1>
                </div>
            </div>
        </section>
    );
};
export default ArtworkSection;  