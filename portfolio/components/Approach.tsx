"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { APPROACH } from "@/data";
import { IconType } from "react-icons"; // імпортуємо IconType

const colorsArray = APPROACH.map(item => {
    return [
        generateRandomColor(),
        generateRandomColor()
    ]
})

console.log(colorsArray)

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return [r, g, b];
}



export function Approach() {
    return (
        <>
            <div className="py-20 flex flex-col lg:flex-row flex-wrap items-center bg-transparent w-full gap-8 ">
                {APPROACH.map((item, index) => (
                    <Card

                        key={item.name}
                        title={item.name}
                        icon={<AceternityIcon order={`Phase ${index + 1}`} />}
                        image={item.icon} // передаємо іконку як компонент
                        desc={item.desc}
                    >
                        <CanvasRevealEffect animationSpeed={3}
                            containerClassName="bg-transparent"
                            colors={colorsArray[index]}
                            dotSize={2} />
                    </Card>
                ))}
            </div>
        </>
    );
}

const Card = ({
    title,
    icon,
    children,
    desc,
    image: IconComponent, // перейменовано на IconComponent для рендеру як компонент
}: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    desc: string;
    image: IconType; // використання IconType для типізації
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem]"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
                    {icon}
                </div>
                {/* Рендеримо іконку з видимістю, що контролюється станом hover */}
                <IconComponent
                    className={`text-4xl my-2 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'
                        }`}
                />
                <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
                <p className="text-sm lg:text-base opacity-0 group-hover/canvas-card:opacity-100 text-gray-600 dark:text-gray-300 mt-2 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-1 transition duration-200">
                    {desc}
                </p>
            </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <div>
            <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
                <span
                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
           bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                />
                <span
                    className="inline-flex h-full w-full cursor-pointer items-center 
          justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
                >
                    {order}
                </span>
            </button>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

