"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";


export const HeroParallax = ({
    products,
}: {
    products: {
        respond: string;
        title: string;
        name: string;
        img: string;

    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <div
        id="testimonials"
            ref={ref}
            className="h-[250vh] py-10 overflow-hidden antialiased relative flex flex-col self-auto [perspective:700px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-10 space-x-10 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl  mx-auto py-20 md:py-20 px-4 w-full">
            <h1 className="text-2xl md:text-7xl font-bold dark:text-white text-center">
                <p>Kind words from</p>
                <span className='text-pink-200'>satisfied clients</span>
            </h1>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        respond: string;
        title: string;
        name: string;
        img: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-30 sm:h-96 w-[20rem] sm:w-[25rem] relative flex-shrink-0 bg-project-pattern rounded-xl "
        >
            <div className="absolute inset-0 h-full w-full opacity-20 group-hover/product:opacity-40 bg-black pointer-events-none"></div>
            <div className="p-4 flex flex-col justify-between h-full">
                <div>
                    <h2 className="font-bold lg:text-2xl md:text-xl text-lg mt-2 lg:mt-4">
                        {product.title}
                    </h2>
                    <p className="lg:text-base md:text-sm text-xs lg:font-normal font-light mt-2 lg:mt-3">
                        {product.respond}
                    </p>
                </div>
                <div className="flex items-center gap-4 justify-end mt-4 lg:mt-6">
                    <img
                        src={product.img}
                        alt={product.title}
                        className="rounded-full w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                    />
                    <span className="text-sm md:text-base lg:text-lg">{product.name}</span>
                </div>
            </div>
        </motion.div>
    );
};
