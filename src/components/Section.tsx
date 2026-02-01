import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
    id: string;
    className?: string;
    children: ReactNode;
    delay?: number;
}

export const Section = ({ id, className = "", children, delay = 0.2 }: SectionProps) => {
    return (
        <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay }}
            >
                {children}
            </motion.div>
        </section>
    );
};
