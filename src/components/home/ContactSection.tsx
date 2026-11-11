import { useState } from 'react';

const RECRUITMENT_ROLES = [
    { title: 'Script Writer', query: 'Script%20Writer' },
    { title: 'Outline Artist', query: 'Outline%20Artist' },
    { title: 'Colorist', query: 'Colorist' },
    { title: 'Background Artist', query: 'Background%20Artist' },
    { title: '3D Background & Sets Modeler (.SKP)', query: '3D%20Background%20%26%20Sets%20Modeler%20(.SKP)' },
];

const ContactSection = () => {
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            setStatus('Sending...');
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                setStatus('Message sent successfully! Thank you.');
                form.reset();
            } else {
                setStatus(data.message || 'Something went wrong. Please try again.');
            }
        } catch {
            setStatus('Failed to send message. Please try again later.');
        }
    };

    return (
        <>
            <section id="contact" className="flex items-center justify-center min-h-screen bg-[#000] pt-32 px-6 md:px-20">
                <div className="flex flex-col gap-[31px] w-full px-5">
                    <h1 className="bricolage-grotesque text-broken-white text-[30px] md:text-[100px] font-extrabold text-center leading-[90%] tracking-[-4%]">
                        Let’s Create Comic <br /> with Us!
                    </h1>

                    <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-4 md:gap-8 items-center">
                        <input type="hidden" name="access_key" value="b3fd3c41-e32a-414f-96a2-450fe287dacf" />

                        <div className="input w-[320px] md:w-[724px]">
                            <label htmlFor="name" className="bricolage-grotesque text-xl text-broken-white">
                                your name please *
                            </label>
                            <input id="name" name="name" type="text" required placeholder="type here" className="p-3 mt-2 w-full" />
                        </div>

                        <div className="input w-[320px] md:w-[724px]">
                            <label htmlFor="email" className="bricolage-grotesque text-xl text-broken-white">
                                your email of course :)*
                            </label>
                            <input id="email" name="email" type="email" required placeholder="type here" className="p-3 mt-2 w-full" />
                        </div>

                        <div className="input w-[320px] md:w-[724px]">
                            <label htmlFor="project" className="bricolage-grotesque text-xl text-broken-white">
                                the cool comic title *
                            </label>
                            <input id="project" name="project" type="text" required placeholder="type here" className="p-3 mt-2 w-full" />
                        </div>

                        <div className="relative w-[320px] md:w-[724px]">
                            <label htmlFor="budget" className="bricolage-grotesque text-xl text-broken-white">
                                your best budget *
                            </label>
                            <br />
                            <label htmlFor="budget" className="label-2 bricolage-grotesque text-xl text-[#DAF7A6] opacity-50">
                                yea.... we know, comic projects start at a minimum of $1500 <br />
                                but if you have another interesting budget just let us know
                            </label>
                            <select id="budget" name="budget" required className="custom-dropdown p-3 w-full appearance-none mt-2">
                                <option value="">choose the range</option>
                                <option value="500-1000">$700 - $1,000</option>
                                <option value="1000-5000">$1,000 - $5,000</option>
                                <option value="5000-10000">$5,000 - $10,000</option>
                                <option value="10000+">Above $10,000</option>
                            </select>
                        </div>

                        <div className="relative w-[320px] md:w-[724px]">
                            <label htmlFor="date" className="bricolage-grotesque text-xl text-broken-white">
                                preferred date to start project *
                            </label>
                            <input id="date" name="date" type="date" required className="custom-date p-3 w-full mt-2" />
                        </div>

                        <div className="input w-[320px] md:w-[724px]">
                            <label htmlFor="comment" className="bricolage-grotesque text-xl text-broken-white">
                                why do you want work together?
                            </label>
                            <textarea id="comment" name="comment" placeholder="type here" className="p-3 h-32 mt-2 w-full"></textarea>
                        </div>

                        {status && (
                            <p className="bricolage-grotesque text-[#DAF7A6] text-center">{status}</p>
                        )}

                        <div className="btn-send flex justify-center items-center bg-[#DAF7A6] w-[200px] md:w-[369px]">
                            <button type="submit" className="py-3 px-6 text-black font-bold bricolage-grotesque text-[20px]">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Recruitment Section */}
            <section className="flex flex-col justify-center items-center bg-[#000] pt-40 pb-20 px-6 md:px-20">
                <h1 className="text-center text-[34px] md:text-[64px] font-semibold text-broken-white mb-8 leading-[100%]">
                    You are an Artist?<br />
                    and want to join <br /> the team as ...
                </h1>

                <div className="flex flex-col gap-4 items-center">
                    {RECRUITMENT_ROLES.map((role) => (
                        <a
                            key={role.title}
                            href={`https://wa.me/6285155353365?text=Hello!%20I%20am%20interested%20in%20joining%20the%20team%20as%20a%20${role.query}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="w-[320px] md:w-[553px] p-4 text-[#DAF7A6] bg-transparent hover:text-black hover:bg-[#DAF7A6] flex justify-between items-center group transition-colors">
                                <span className="text-left">{role.title}</span>
                                <img src="/assets/arrow.svg" alt="" className="group-hover:hidden" />
                                <img src="/assets/arrow-black.svg" alt="" className="hidden group-hover:inline" />
                            </button>
                        </a>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ContactSection;
