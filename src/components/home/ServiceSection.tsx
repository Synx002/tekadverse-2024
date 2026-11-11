import { Link } from 'react-router-dom';

const SERVICES_LIST = [
    { number: '01', title: 'Script Writing' },
    { number: '02', title: 'Character Design' },
    { number: '03', title: 'Story-boarding' },
    { number: '04', title: 'Manga' },
    { number: '05', title: 'Silent Manga' },
    { number: '06', title: 'Web-comic' },
    { number: '07', title: '3D Assets' },
    { number: '08', title: 'Video Story-boarding' },
];

const ServiceSection = () => {
    return (
        <section id="service" className="flex flex-col items-center text-broken-white py-20 bricolage-grotesque bg-[#F8EFE0]">
            <h2 className="text-[32px] text-black font-extrabold tracking-[-0.04em] mb-10">
                Services
            </h2>
            <div className="text-black w-full flex flex-col items-center">
                {SERVICES_LIST.map((service) => (
                    <div key={service.number} className="relative inline-block">
                        <h3 className="text-[30px] md:text-[100px] font-extrabold tracking-[-0.04em] leading-[100%] text-center">
                            {service.title}
                        </h3>
                        <span className="absolute top-2 md:top-5 right-0 translate-x-full -translate-y-1/2 text-[8px] md:text-[32px] font-light tracking-[-0.04em]">
                            {service.number}
                        </span>
                    </div>
                ))}

                <div className="flex items-center justify-center mt-20">
                    <Link to="/services" className="cube flip-to-top">
                        <div className="default-state">
                            <span>Learn more</span>
                            <img src="/assets/arrow-black.svg" alt="Icon" className="state-icon ml-[10px]" />
                        </div>
                        <div className="active-state">
                            <span>Learn more</span>
                            <img src="/assets/arrow-powder.svg" alt="Icon" className="state-icon ml-[10px]" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
