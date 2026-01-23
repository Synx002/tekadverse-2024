import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const Loader = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="overlay">
            <h1 className="counter">{count}</h1>
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="bar"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                />
            ))}
        </div>
    );
};
export default Loader;