import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer';

const Kabo = () => {
    return (
        <div className="bg-[#F8EFE0] min-h-screen">
            {/* Header / Hero */}
            <div
                className="hero relative"
                style={{
                    backgroundImage: 'url(/assets/kabo-cover-landscpae.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
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
                        Kabo
                    </h1>
                    <div className="flex flex-col lg:flex-row justify-between info gap-[32px]">
                        <div className="flex flex-col des-info gap-[24px] max-w-full lg:max-w-[512px]">
                            <div className="description">
                                <h2 className="bricolage-grotesque text-[24px] md:text-[32px] leading-[110%] tracking-[-4%]">
                                    Instagram comic series production for a meal replacement product
                                </h2>
                            </div>
                            <div className="tags flex flex-wrap gap-2">
                                {['#comic', '#series', '#visualdevelopment', '#animestyle', '#instagramcomic'].map((tag) => (
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
                                            PT. Kreasi Sehat Indonesia
                                        </td>
                                    </tr>
                                    <tr className="align-top border-b border-black">
                                        <td className="border-r border-black py-2 pl-2 pr-10 text-[14px] md:text-[16px]">
                                            Scope
                                        </td>
                                        <td className="py-2 pl-2 pr-10 text-[14px] md:text-[16px]">
                                            <ul className="leading-[130%] list-disc pl-6">
                                                <li>Visual Development</li>
                                                <li>Story Development</li>
                                                <li>Comic Production</li>
                                                <li>Comic Posters</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className="align-top border-b border-black">
                                        <td className="border-r border-black py-2 pl-2 pr-10 text-[14px] md:text-[16px]">
                                            Release
                                        </td>
                                        <td className="py-2 pl-2 pr-10 text-[14px] md:text-[16px]">
                                            September 1st, 2024
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Narrative & Strategy */}
            <section className="container mx-auto flex flex-col px-6 md:px-20 bg-[#F8EFE0]">
                <div className="textnquote flex flex-col md:flex-row py-[30px] md:py-[80px] gap-8">
                    <div className="leftcon flex w-full md:w-1/2 md:pr-28">
                        <p className="bricolage-grotesque text-[24px] md:text-[32px] leading-[130%] tracking-[-4%]">
                            See how we take a fresh spin on introducing a meal replacement drink — by bringing it to life through an exciting, adventure-packed comic series!
                        </p>
                    </div>
                    <div className="quote flex w-full md:w-1/2">
                        <p className="bricolage-grotesque text-[14px] md:text-base leading-[130%] tracking-[0%]">
                            The strategy is all about creating an engaging, story-driven experience to introduce the meal replacement drink. By using an adventure-themed comic series, the product is presented in a fun, narrative format that draws readers in and keeps them hooked. Instead of traditional advertising, the comic makes the product feel like a part of an exciting journey, blending entertainment with education.
                        </p>
                    </div>
                </div>

                <div className="content-comic flex flex-col gap-[32px] py-[10px] md:py-[80px]">
                    <div className="flex content-kabo-comic">
                        <img src="/assets/comic-kabo-content.png" alt="Comic Kabo Content" className="w-full h-auto" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <p className="bricolage-grotesque font-extrabold text-[24px] md:text-[32px] leading-[130%] tracking-[-4%] md:w-1/3">
                            Kabo ⎯ Pumpkin-shaped, cute, yet powerful character.
                        </p>
                        <p className="bricolage-grotesque font-regular text-[14px] md:text-[16px] leading-[130%] tracking-[0%] md:w-1/3 md:pr-[40px]">
                            <b>Meet Kabo</b>, a cute little pumpkin with a heart of gold, born from a rare genetic mutation known as Myuta. This mutation occurred after a nuclear-like explosion near his village, transforming an ordinary pumpkin into something extraordinary. Despite his tiny size, Kabo possesses incredible strength and resilience.
                        </p>
                        <p className="bricolage-grotesque font-regular text-[14px] md:text-[16px] leading-[130%] tracking-[0%] md:w-1/3">
                            Kabo's gentle nature and strong moral compass come from the love and care he received as an ordinary pumpkin. A kind-hearted professor took him in and nurtured him with unwavering affection, teaching Kabo the importance of good manners, kindness, and compassion.
                        </p>
                    </div>
                </div>

                {/* Details & Panels */}
                <div className="flex flex-col md:flex-row gap-10 items-stretch h-full">
                    <div className="flex-1 flex flex-col justify-start">
                        <p className="bricolage-grotesque text-[24px] leading-[130%] tracking-[-4%]">
                            We are transforming Kreasi Sehat’s Pumpkin-based product into a vibrant, visually captivating character.
                            By collaborating closely with the team, we’re bringing their creative vision to life, using dynamic artwork
                            and engaging comic layouts to tell a story that resonates with the audience.
                        </p>
                        <p className="bricolage-grotesque text-[16px] leading-[130%] tracking-[0%] mt-6">
                            Every character, every scene, and every panel was created with love and passion, and we’re excited to share it with you.
                        </p>
                    </div>

                    <div className="flex-1 flex flex-col justify-start">
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <img src="/assets/star-black.svg" alt="Dot icon" className="w-4 h-4 mt-1 mr-4" />
                                <span>
                                    <b>Comic Script</b> ⎯ we start by developing the story from scratch, working closely with our clients to shape a unique narrative that resonates with their vision.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <img src="/assets/star-black.svg" alt="Dot icon" className="w-4 h-4 mt-1 mr-4" />
                                <span>
                                    <b>Character Design</b> ⎯ bringing the story's personalities to life with distinct, visually appealing designs.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <img src="/assets/star-black.svg" alt="Dot icon" className="w-4 h-4 mt-1 mr-4" />
                                <span>
                                    <b>Setting/ Background Design</b> ⎯ building immersive environments that support the story’s world and enhance storytelling.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <img src="/assets/star-black.svg" alt="Dot icon" className="w-4 h-4 mt-1 mr-4" />
                                <span>
                                    <b>Comic Creation</b> ⎯ translating narrative and visuals into engaging comic panels.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Grid Images */}
                <div className="flex flex-col w-full py-[80px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                        <div>
                            <img src="/assets/page-content-kabo-1.png" alt="Gambar 1" className="w-full h-auto rounded-md shadow-md" />
                        </div>
                        <div>
                            <img src="/assets/page-content-kabo-2.png" alt="Gambar 2" className="w-full h-auto rounded-md shadow-md" />
                        </div>
                        <div>
                            <img src="/assets/page-content-kabo-5.png" alt="Gambar 3" className="w-full h-auto rounded-md shadow-md" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full">
                        <div>
                            <img src="/assets/page-content-kabo-4.png" alt="Gambar 4" className="w-full h-auto rounded-md shadow-md" />
                        </div>
                        <div>
                            <img src="/assets/page-content-kabo-3.png" alt="Gambar 5" className="w-full h-auto rounded-md shadow-md" />
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
                        <Link to="/bravy">
                            <img src="/assets/otherworks-bravy.png" alt="Bravy" className="w-full h-auto" />
                            <span className="hover-text">
                                Barvy <br />Comic Strip
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

export default Kabo;

