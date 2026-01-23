import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export const useScrollAnimation = () => {
    useEffect(() => {
        // Copy logic dari legacy_backup/js/script.js
        // Convert ke React hooks pattern

        return () => {
            // Cleanup ScrollTrigger instances
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
};