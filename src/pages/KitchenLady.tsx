import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer';

const KitchenLady = () => {
    return (
        <div className="bg-[#F8EFE0] min-h-screen">
            {/* Header / Hero */}
            <div
                className="hero relative"
                style={{
                    backgroundImage: 'url(/assets/kitchen-lady-header.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container mx-auto flex flex-col justify-center items-end px-6 md:px-20 pt-[50px]">
                    <Link to="/" className="text-white text-lg font-bold hover:underline bricolage-grotesque">
                        Home
                    </Link>
                </div>
            </div>

            {/* Description */}
            <section className="container mx-auto flex flex-col px-6 md:px-20 bg-[#F8EFE0] pt-[40px] md:pt-[80px]">
                <div className="flex flex-col pb-[40px] md:pb-[80px] border-b-2 border-black">
                    <h1 className="bricolage-grotesque font-extrabold text-[48px] md:text-[72px] leading-[100%] tracking-[-4%] pb-[32px]">
                        One-Shot Manga <br /> Project Compilation
                    </h1>
                    <div className="flex flex-col lg:flex-row justify-between info gap-[32px]">
                        <div className="flex flex-col des-info gap-[24px] max-w-full lg:max-w-[512px]">
                            <div className="description">
                                <h2 className="bricolage-grotesque text-[24px] md:text-[32px] leading-[110%] tracking-[-4%]">
                                    One-shot manga from authors
                                </h2>
                            </div>
                            <div className="tags flex flex-wrap gap-2">
                                {['#comic', '#oneshot', '#visualdevelopment', '#animestyle', '#printed', '#digital', '#silentmanga'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="bricolage-grotesque border border-black rounded-full px-[16px] md:px-[24px] py-[8px] text-[14px] md:text-[16px]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="table-info bricolage-grotesque w-full lg:w-auto">
                            <table className="table-auto text-left w-full border border-black border-collapse">
                                <tbody>
                                    <tr className="align-top bg-[#000] text-broken-white border-b border-black">
                                        <th className="border-r border-black py-2 pl-2 pr-10 text-[14px] md:text-[16px]">
                                            Client
                                        </th>
                                        <td className="py-2 pl-2 pr-10 text-[14px] md:text-[16px]">
                                            Kathleen, Paxton, Marcus
                                        </td>
                                    </tr>
                                    <tr className="align-top border-b border-black">
                                        <td className="border-r border-black py-2 pl-2 pr-10 text-[14px] md:text-[16px]">
                                            Scope
                                        </td>
                                        <td className="py-2 pl-2 pr-10 text-[14px] md:text-[16px]">
                                            <ul className="leading-[130%] list-disc pl-6">
                                                <li>Visual Development</li>
                                                <li>Comic creation</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className="align-top border-b border-black">
                                        <td className="border-r border-black py-2 pl-2 pr-10 text-[14px] md:text-[16px]">
                                            Release
                                        </td>
                                        <td className="py-2 pl-2 pr-10 text-[14px] md:text-[16px]">
                                            June 21st, 2020
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Narrative */}
            <section className="container mx-auto flex flex-col px-6 md:px-20 bg-[#F8EFE0]">
                <div className="textnquote flex flex-col md:flex-row py-[40px] md:py-[80px] gap-8">
                    <div className="leftcon flex w-full md:w-1/2 md:pr-28">
                        <p className="bricolage-grotesque text-[24px] md:text-[32px] leading-[130%] tracking-[-4%]">
                            Our studio has brought authors' stories to life through dynamic manga-style comic projects.
                        </p>
                    </div>
                    <div className="quote flex w-full md:w-1/2">
                        <p className="bricolage-grotesque text-[14px] md:text-base leading-[130%] tracking-[0%]">
                            Our studio specializes in bringing authors' ideas to life through dynamic manga-style comic projects. We work closely with creators to transform their unique concepts into visually compelling stories, capturing the essence of their vision while infusing it with our artistic flair.
                        </p>
                    </div>
                </div>

                <div className="content-comic flex flex-col gap-[32px] py-[10px] md:py-[80px]">
                    <div className="flex content-kabo-comic">
                        <img src="/assets/one-content.png" alt="Manga Content" className="w-full h-auto" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <p className="bricolage-grotesque font-extrabold text-[24px] md:text-[32px] leading-[130%] tracking-[-4%] md:w-1/3">
                            What actually makes Manga special?
                        </p>
                        <p className="bricolage-grotesque font-regular text-[14px] md:text-[16px] leading-[130%] tracking-[0%] md:w-1/3 md:pr-[40px]">
                            Its ability to blend captivating storytelling with unique, expressive artwork. Unlike traditional comics, manga often offers deeper emotional connections and more intricate character development.
                        </p>
                        <p className="bricolage-grotesque font-regular text-[14px] md:text-[16px] leading-[130%] tracking-[0%] md:w-1/3">
                            The pacing, panel layouts, and use of black-and-white art allow for greater focus on mood and atmosphere, creating a more immersive experience for readers across cultures.
                        </p>
                    </div>
                </div>

                {/* Manga Highlights */}
                <div className="sc-tones flex flex-col md:flex-row py-[20px] md:py-[80px] gap-8 items-center">
                    <div className="left-icon flex w-full md:w-1/2">
                        <img src="/assets/useofscreentones.png" alt="Use of screen tones" className="w-full h-auto" />
                    </div>
                    <div className="des flex flex-col justify-end w-full md:w-1/2 gap-[16px]">
                        <h2 className="bricolage-grotesque font-extrabold text-[32px] leading-[110%] tracking-[-4%]">
                            Use of Screen Tones
                        </h2>
                        <p className="bricolage-grotesque text-[14px] md:text-base leading-[130%] tracking-[0%]">
                            One of the standout features of manga is the use of screen tones. These patterns add shading, depth, and texture, ranging from subtle gray tones to bold black areas.
                        </p>
                    </div>
                </div>

                <div className="sc-tones flex flex-col md:flex-row py-[20px] md:py-[80px] gap-8 items-center">
                    <div className="des flex flex-col justify-end w-full md:w-1/2 gap-[16px]">
                        <h2 className="bricolage-grotesque font-extrabold text-[32px] leading-[110%] tracking-[-4%]">
                            Expressive Inking Techniques
                        </h2>
                        <p className="bricolage-grotesque text-[14px] md:text-base leading-[130%] tracking-[0%]">
                            Manga inking tends to be fluid and expressive. The mix of thick and thin lines adds emotion—thicker lines bring intensity, while finer lines capture delicate moments.
                        </p>
                    </div>
                    <div className="right-icon flex w-full md:w-1/2">
                        <img src="/assets/expressiveinking.png" alt="Expressive Inking" className="w-full h-auto" />
                    </div>
                </div>

                <div className="sc-tones flex flex-col md:flex-row py-[20px] md:py-[80px] gap-8 items-center">
                    <div className="left-icon flex w-full md:w-1/2">
                        <img src="/assets/shadingncontrast.png" alt="Shading and Contrast" className="w-full h-auto" />
                    </div>
                    <div className="des flex flex-col justify-end w-full md:w-1/2 gap-[16px]">
                        <h2 className="bricolage-grotesque font-extrabold text-[32px] leading-[110%] tracking-[-4%]">
                            Shading and Contrast
                        </h2>
                        <p className="bricolage-grotesque text-[14px] md:text-base leading-[130%] tracking-[0%]">
                            Toning and shading set the emotional mood. Dark shading works perfectly for dramatic moments, while lighter tones convey calm and peaceful vibes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Other Artworks */}
            <section className="otherworks flex bg-[#000] py-[120px]">
                <div className="container mx-auto px-6 md:px-20 grid gap-y-[64px]">
                    <div className="flex flex-col md:flex-row text-broken-white justify-between items-center">
                        <span className="bricolage-grotesque text-[48px] font-bold leading-[100%] tracking-[-4%] mb-6 md:mb-0">
                            See Other artworks
                        </span>
                        <span className="hidden md:flex text-[24px] font-extrabold leading-[130%] tracking-[-4%] items-center gap-2">
                            <Link to="/" className="text-broken-white hover:text-[#DAF7A6]">Back to home</Link>
                            <img src="/assets/arrow-white-up.svg" alt="" />
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
                        <Link to="/kabo">
                            <img src="/assets/otherworks-kabo.png" alt="Kabo" className="w-full h-auto" />
                            <span className="hover-text">
                                KABO <br />Comic Series
                            </span>
                        </Link>
                        <Link to="/bravy">
                            <img src="/assets/otherworks-bravy.png" alt="Bravy" className="w-full h-auto" />
                            <span className="hover-text">
                                Barvy <br />Comic Strip
                            </span>
                        </Link>
                    </div>

                    <div className="flex md:hidden text-broken-white justify-center items-center">
                        <Link to="/" className="bricolage-grotesque text-[20px] font-extrabold flex items-center gap-2 text-broken-white">
                            Back to home
                            <img src="/assets/arrow-white-up.svg" alt="" className="w-[16px] h-[16px]" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default KitchenLady;

