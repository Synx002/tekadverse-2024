import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export const useScrollAnimation = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const wraps = document.querySelectorAll<HTMLElement>('.parallax-wrap');
            wraps.forEach((wrap) => {
                const img = wrap.querySelector<HTMLElement>('.parallax-img');
                if (!img) return;

                gsap.fromTo(
                    img,
                    { yPercent: -12 },
                    {
                        yPercent: 12,
                        ease: 'none',
                        force3D: true,
                        scrollTrigger: {
                            trigger: wrap,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true,
                            invalidateOnRefresh: true,
                        },
                    }
                );
            });
        });

        const refreshTriggers = () => ScrollTrigger.refresh();
        window.addEventListener('load', refreshTriggers);
        const timer = setTimeout(refreshTriggers, 300);

        return () => {
            ctx.revert();
            window.removeEventListener('load', refreshTriggers);
            clearTimeout(timer);
        };
    }, []);
};
