'use client'
import { motion } from "framer-motion";

type Props = {
    text: string;
}

const VerticalTextAppearance = ({ text }: Props) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="flex flex-col items-center"
        >
            <p className='text-sm leading-relaxed tracking-wide text-gray-700 dark:text-gray-300 md:text-base md:leading-loose md:tracking-wider text-center'>
                {text}
            </p>
        </motion.div>
    );
};

export default VerticalTextAppearance;