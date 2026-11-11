import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer';
import '../styles/services.css';

const SLIDE_IMAGES = [
    { src: '/assets/slide-3d.png', alt: '3d Slider' },
    { src: '/assets/slide-charadesign.png', alt: 'Character Design Slider' },
    { src: '/assets/slide-manga.png', alt: 'Manga Slider' },
    { src: '/assets/slide-scriptwriting.png', alt: 'Script Writing Slider' },
    { src: '/assets/slide-silentmanga.png', alt: 'Silent Manga Slider' },
    { src: '/assets/slide-storyboard.png', alt: 'Story Board Slider' },
    { src: '/assets/slide-wc.png', alt: 'Web Comic Slider' },
];

const SERVICES_DETAILS = [
    {
        title: 'Character Design',
        img: '/assets/cd.png',
        skills: ['Visual Development', 'Illustration', 'Design'],
        description: [
            'Designing a character based on your brief. Draw the full-body in front and back view with his/her natural pose to show not only how they look visually but also to bring out their personal character.',
            'A set of character’s faces & expressions in different angles will be drawn as well as wrapping up the visual development.',
        ],
    },
    {
        title: 'Script Writing',
        img: '/assets/typing2.gif',
        skills: ['Story Development', 'Dialog', 'SFX'],
        description: [
            'Converting your written story into a script and streamlining the comic production process by providing a clear plan for each page and panel. It helps maintain consistency in storytelling, art style, and characterization throughout the comic.',
        ],
    },
    {
        title: 'Manga',
        img: '/assets/manga.png',
        skills: ['Black & white with tone', 'Inking'],
        description: [
            'Sometimes our client came with a magnificent story based on his/her experience, or purely from his/her imagination and interest.',
            'We breakdown the steps from designing characters ⎯ creating storyboard ⎯ detailing the sketch ⎯ cleaning-up the line art ⎯ end-up with inking process.',
        ],
    },
    {
        title: 'Silent Manga',
        img: '/assets/smanga.png',
        skills: ['No dialogue manga', 'Inking'],
        description: [
            'The SILENT MANGA AUDITION® (SMA) is a manga audition exclusively for manga without dialogue.',
            'In 2023 TEKADVERSE created this manga based on a client request for SMA with a manga titled “You Who Pulled Me From My Loneliness”.',
            'It explores the themes of Loneliness, the ability to change, accepting help, and finding a place where one feels welcomed.',
        ],
    },
    {
        title: 'Web-comic',
        img: '/assets/wcomic.png',
        skills: ['Vertical scroll reading directions comic', 'Full colored'],
        description: [
            'A form of digital comics that can be accessed and read online through websites or platforms.',
            'We have webcomic projects from Romance - Slice of Life to Fantasy - Sci-fi - Action.',
        ],
    },
    {
        title: '3D Assets',
        img: '/assets/3d.png',
        skills: ['3D buildings, houses, cafe, etc', '3D props: vehicles & sets'],
        description: [
            '3D assets is an important part for any comic format nowadays for easy reusable background. You’ll increase efficiency, consistency, and workflow flexibility.',
            'We can create custom assets to match the setting or environment of your story, enhancing visual impact and unique vibes.',
        ],
    },
    {
        title: 'Story-boarding',
        img: '/assets/storyboarding.png',
        skills: ['Translating the script', 'Panel layout, pacing, & timing', 'Visualizing action, angle & shots'],
        description: [
            'In our comic projects we always do the storyboard and share to the client whether the breakdown of scenes and key elements are seamless & fulfill client expectations.',
        ],
    },
    {
        title: 'Video Story-boarding',
        img: '/assets/sb ads.png',
        skills: ['Translating the Script', 'Frame, Pacing, & Timing', 'Visualizing Action, Angle & Shots'],
        description: [
            'We also create storyboards for ad videos, short films, and animations. Our team specializes in crafting storyboards for short videos ranging from 1 to 3 minutes, typically comprising 30 to 90 frames.',
            'Clients provide character briefs and scripts, and we translate them into detailed frame-by-frame storyboards.',
        ],
    },
];

const Services = () => {
    return (
        <div className="bg-[#F8EFE0] min-h-screen">
            {/* Header */}
            <header className="hero relative bg-black flex flex-col md:flex-row justify-between items-center" id="hero">
                <div className="absolute top-10 right-10 md:right-24 z-10">
                    <Link to="/" className="text-white text-lg font-bold hover:underline bricolage-grotesque">
                        Home
                    </Link>
                </div>
                <div className="sidebar flex justify-end p-8 md:p-12">
                    <p className="hero-title text-broken-white pb-[30px] md:pb-0 text-[48px] md:text-[90px] font-extrabold leading-[100%]">
                        dis- <br />
                        cover what we can do for you
                    </p>
                </div>
                <div className="hero-image p-6">
                    <img src="/assets/hero.png" alt="Hero Image" className="max-w-full h-auto" />
                </div>
            </header>

            {/* Slider Marquee */}
            <div className="our-works overflow-hidden py-10 bg-black">
                <div className="slider">
                    <div className="slide-track flex">
                        {SLIDE_IMAGES.concat(SLIDE_IMAGES).map((slide, idx) => (
                            <div key={idx} className="slide min-w-[200px] md:min-w-[250px] px-2">
                                <img src={slide.src} alt={slide.alt} className="w-full h-auto rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Works List */}
            <div className="py-16 px-6 md:px-20 max-w-[1376px] mx-auto flex flex-col gap-24">
                {SERVICES_DETAILS.map((service, idx) => (
                    <div
                        key={service.title}
                        className={`works flex flex-col ${
                            idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                        } gap-12 items-center`}
                    >
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full max-w-[500px] h-auto rounded-lg shadow-md"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h2 className="bricolage-grotesque text-[36px] md:text-[54px] font-extrabold leading-[110%]">
                                {service.title}
                            </h2>
                            <div className="list-con">
                                <ul className="flex flex-wrap gap-2">
                                    {service.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="bricolage-grotesque border border-black rounded-full px-4 py-1 text-sm font-semibold"
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="con-p flex flex-col gap-3 text-base md:text-lg leading-[140%] pt-2">
                                {service.description.map((desc, dIdx) => (
                                    <p key={dIdx}>{desc}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Services;

