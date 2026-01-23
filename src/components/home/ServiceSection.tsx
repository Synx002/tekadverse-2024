import arrowBlack from "../../assets/arrow-black.svg";

const ServiceSection = () => {
    return (
        <section id="service" className="flex flex-col items-center text-broken-white py-20 bricolage-grotesque bg-[#F8EFE0]">
            <h2 className="text-[32px] text-black font-extrabold tracking-[-0.04em] mb-10">
                Services
            </h2>
            <div className="text-black w-full flex flex-col items-center">
                {/* Service Item 1 */}
                <div className="relative inline-block">
                    <h3 className="text-[30px] md:text-[100px] font-extrabold tracking-[-0.04em] leading-[100%] text-center">
                        Script Writing
                    </h3>
                    <span className="absolute top-2 md:top-5 right-0 translate-x-full -translate-y-1/2 text-[8px] md:text-[32px] font-light tracking-[-0.04em]">
                        01
                    </span>
                </div>

                {/* Service Item 2 */}
                <div className="relative inline-block">
                    <h3 className="text-[30px] md:text-[100px] font-extrabold tracking-[-0.04em] leading-[100%] text-center">
                        Character Design
                    </h3>
                    <span className="absolute top-2 md:top-5 right-0 translate-x-full -translate-y-1/2 text-[8px] md:text-[32px] font-light tracking-[-0.04em]">
                        02
                    </span>
                </div>

                {/* Service Item 3 */}
                <div className="relative inline-block">
                    <h3 className="text-[30px] md:text-[100px] font-extrabold tracking-[-0.04em] leading-[100%] text-center">
                        Story-boarding
                    </h3>
                    <span className="absolute top-2 md:top-5 right-0 translate-x-full -translate-y-1/2 text-[8px] md:text-[32px] font-light tracking-[-0.04em]">
                        03
                    </span>
                </div>

                {/* Service Item 4 */}
                <div className="relative inline-block">
                    <h3 className="text-[30px] md:text-[100px] font-extrabold tracking-[-0.04em] leading-[100%] text-center">
                        Manga
                    </h3>
                    <span className="absolute top-2 md:top-5 right-0 translate-x-full -translate-y-1/2 text-[8px] md:text-[32px] font-light tracking-[-0.04em]">
                        04
                    </span>
                </div>

                {/* Service Item 5 */}
                <div className="relative inline-block">
                    <h3 className="text-[30px] md:text-[100px] font-extrabold tracking-[-0.04em] leading-[100%] text-center">
                        Silent Manga
                    </h3>
                    <span className="absolute top-2 md:top-5 right-0 translate-x-full -translate-y-1/2 text-[8px] md:text-[32px] font-light tracking-[-0.04em]">
                        05
                    </span>
                </div>

                {/* Service Item 6 */}
                <div className="relative inline-block">
                    <h3 className="text-[30px] md:text-[100px] font-extrabold tracking-[-0.04em] leading-[100%] text-center">
                        Web-comic
                    </h3>
                    <span className="absolute top-2 md:top-5 right-0 translate-x-full -translate-y-1/2 text-[8px] md:text-[32px] font-light tracking-[-0.04em]">
                        06
                    </span>
                </div>

                {/* Service Item 7 */}
                <div className="relative inline-block">
                    <h3 className="text-[30px] md:text-[100px] font-extrabold tracking-[-0.04em] leading-[100%] text-center">
                        3D Assets
                    </h3>
                    <span className="absolute top-2 md:top-5 right-0 translate-x-full -translate-y-1/2 text-[8px] md:text-[32px] font-light tracking-[-0.04em]">
                        07
                    </span>
                </div>

                {/* Service Item 8 */}
                <div className="relative inline-block">
                    <h3 className="text-[30px] md:text-[100px] font-extrabold tracking-[-0.04em] leading-[100%] text-center">
                        Video Story-boarding
                    </h3>
                    <span className="absolute top-2 md:top-5 right-0 translate-x-full -translate-y-1/2 text-[8px] md:text-[32px] font-light tracking-[-0.04em]">
                        08
                    </span>
                </div>

                {/* Button with image icon */}
                {/* <div className="flex items-center justify-center mt-20">
                     <button className="button-about items-center justify-center">
                        <div className="btn-cube flex flex-row">
                            <span className="text-black font-semibold text-[32px]">Learn more</span>
                            <img src="assets/arrow-black.svg" alt="arrow" className="ml-[10px]">
                        </div>
                    </button>
                    <a href="pages/services.html" className="cube flip-to-top">
                        <div className="default-state">
                            <span>Learn more</span>
                            <img src="assets/arrow-black.svg" alt="Icon" className="state-icon ml-[10px]">
                        </div>
                        <div className="active-state">
                            <span>Learn more</span>
                            <img src="assets/arrow-powder.svg" alt="Icon" className="state-icon ml-[10px]">
                        </div>
                    </a>
                </div> */}
                <div className="flex items-center justify-center mt-20">
                    <button className="button-about items-center justify-center">
                        <div className="btn-cube flex flex-row">
                            <span className="text-black font-semibold text-[32px]">Learn more</span>
                            <img src={arrowBlack} alt="arrow" className="ml-[10px]" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};
export default ServiceSection;