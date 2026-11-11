import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer';

const Bravy = () => {
    return (
        <div className="bg-[#F8EFE0] min-h-screen">
            {/* Header / Hero */}
            <div
                className="hero relative"
                style={{
                    backgroundImage: 'url(/assets/bravy-hero.png)',
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
                        Barvy
                    </h1>
                    <div className="flex flex-col lg:flex-row justify-between info gap-[32px]">
                        <div className="flex flex-col des-info gap-[24px] max-w-full lg:max-w-[512px]">
                            <div className="description">
                                <h2 className="bricolage-grotesque text-[24px] md:text-[32px] leading-[110%] tracking-[-4%]">
                                    Comic strip creation for a financial consultant agency.
                                </h2>
                            </div>
                            <div className="tags flex flex-wrap gap-2">
                                {['#comic', '#series', '#animestyle', '#instagramcomic', '#visualdevelopment'].map((tag) => (
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
                                            PT. Barvy
                                        </td>
                                    </tr>
                                    <tr className="align-top border-b border-black">
                                        <td className="border-r border-black py-2 pl-2 pr-10 text-[14px] md:text-[16px]">
                                            Scope
                                        </td>
                                        <td className="py-2 pl-2 pr-10 text-[14px] md:text-[16px]">
                                            <ul className="leading-[130%] list-disc pl-6">
                                                <li>Visual Development</li>
                                                <li>Comic Creation</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className="align-top border-b border-black">
                                        <td className="border-r border-black py-2 pl-2 pr-10 text-[14px] md:text-[16px]">
                                            Release
                                        </td>
                                        <td className="py-2 pl-2 pr-10 text-[14px] md:text-[16px]">
                                            May 18th, 2024
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
                <div className="textnquote flex flex-col md:flex-row py-[30px] md:py-[80px] gap-8">
                    <div className="leftcon flex w-full md:w-1/2 md:pr-28">
                        <p className="bricolage-grotesque text-[24px] md:text-[32px] leading-[130%] tracking-[-4%]">
                            Working on Barvy team’s ideas to create a fun Instagram comic strip with cute anthropomorphic characters, making financial education more engaging and approachable.
                        </p>
                    </div>
                    <div className="quote flex w-full md:w-1/2">
                        <p className="bricolage-grotesque text-[14px] md:text-base leading-[130%] tracking-[0%]">
                            Barvy team aimed at making financial education more engaging and approachable. We’re working together to turn complex financial concepts into easy-to-digest, visually appealing content that’s both informative and fun. Through creative character design, clever storytelling, and impactful visuals, our team is helping bring financial literacy to life in a way that resonates with Instagram audiences.
                        </p>
                    </div>
                </div>

                <div className="content-comic flex flex-col gap-[32px] py-[10px] md:py-[80px]">
                    <div className="flex content-kabo-comic">
                        <img src="/assets/bravy-content.png" alt="Barvy Content" className="w-full h-auto" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <p className="bricolage-grotesque font-extrabold text-[24px] md:text-[32px] leading-[130%] tracking-[-4%] md:w-1/3">
                            Barvy ⎯ Gatot, Trivia, & Joni's slice of life, telling relatable stories of finance in daily basis.
                        </p>
                        <p className="bricolage-grotesque font-regular text-[14px] md:text-[16px] leading-[130%] tracking-[0%] md:w-1/3 md:pr-[40px]">
                            <b>Gatot, Trivia, and Joni’s</b> slice of life comic strip brings everyday moments to life with a twist—each story is deeply connected to financial matters. Through their daily activities, readers get a fun and relatable glimpse into how personal finance plays a role in all aspects of life.
                        </p>
                        <p className="bricolage-grotesque font-regular text-[14px] md:text-[16px] leading-[130%] tracking-[0%] md:w-1/3">
                            By following these three characters, the comic offers a lighthearted yet insightful way to explore financial topics. Designed to educate and entertain, making finance feel more approachable and part of everyday life.
                        </p>
                    </div>
                </div>

                {/* Workflow & Video */}
                <div className="flex flex-col md:flex-row gap-10 items-stretch h-full">
                    <div className="flex-1 flex flex-col justify-start">
                        <p className="bricolage-grotesque text-[24px] leading-[130%] tracking-[-4%]">
                            Our studio takes a collaborative and thoughtful approach to creating this comic strip, starting with the script. We work closely with the client to break down financial concepts into digestible, relatable stories.
                        </p>
                        <p className="bricolage-grotesque text-[16px] leading-[130%] tracking-[0%] mt-6">
                            They provided scenarios around complex concepts like business tax strategies, EBITDAM, IPOs, and investment portfolios. Our task was to translate them into engaging, relatable stories that characters encounter in everyday lives.
                        </p>
                    </div>

                    <div className="flex-1 flex">
                        <video
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                            controls
                            autoPlay
                            muted
                            loop
                            style={{ maxHeight: '616px' }}
                        >
                            <source src="/assets/bravy.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="flex-1 flex flex-col justify-start">
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <img src="/assets/star-black.svg" alt="Dot icon" className="w-4 h-4 mt-1 mr-4" />
                                <span>
                                    <b>Script Writing</b> ⎯ the script focuses on weaving everyday situations with financial lessons, ensuring dialogue is casual and fun.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <img src="/assets/star-black.svg" alt="Dot icon" className="w-4 h-4 mt-1 mr-4" />
                                <span>
                                    <b>Character Design</b> ⎯ bringing Gatot, Trivia, and Joni to life with unique, appealing personalities that reflect different approaches to money.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <img src="/assets/star-black.svg" alt="Dot icon" className="w-4 h-4 mt-1 mr-4" />
                                <span>
                                    <b>Comic Creation</b> ⎯ developing dynamic layouts, playful panel designs, and engaging visuals that complement storytelling.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Panels Grid */}
                <div className="flex flex-col w-full py-[80px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                        <div>
                            <img src="/assets/bravy-1.png" alt="Bravy 1" className="w-full h-auto rounded-md shadow-md" />
                        </div>
                        <div>
                            <img src="/assets/bravy-2.png" alt="Bravy 2" className="w-full h-auto rounded-md" />
                        </div>
                        <div>
                            <img src="/assets/bravy-3.png" alt="Bravy 3" className="w-full h-auto rounded-md" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full">
                        <div>
                            <img src="/assets/bravy-4.png" alt="Bravy 4" className="w-full h-auto rounded-md" />
                        </div>
                        <div>
                            <img src="/assets/bravy-5.png" alt="Bravy 5" className="w-full h-auto rounded-md" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-4 w-full">
                        <div className="flex justify-center items-center">
                            <img src="/assets/bravy-6.png" alt="Bravy 6" className="w-full md:w-auto h-auto rounded-md" />
                        </div>
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
                        <Link to="/kitchen-lady">
                            <img src="/assets/otherworks-kl.png" alt="Kitchen Lady" className="w-full h-auto" />
                            <span className="hover-text">
                                One-Shot Manga Project Compilation
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

export default Bravy;

