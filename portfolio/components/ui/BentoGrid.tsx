'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GlobeDemo } from "./GlobeDemo";
import { TECH_STACK } from "@/data";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json'

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {


    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-8 gap-4 lg:gap-4 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    header?: React.ReactNode;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
    id?: number

}) => {

    const [copied, setCopied] = useState(false)

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input  bg-white border  justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: 'rgb(2, 0, 36)',
                backgroundColor: "linear - gradient(90deg, rgba(2, 0, 36, 1) 0 %, rgba(43, 0, 74, 1) 50 %, rgba(0, 65, 74, 1) 100 %)"

            }}
        >
            <div className={`${id === 6 ? "flex justify-center h-full relative" : ""}`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, 'object-cover', 'object-center')} />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 ? "w-full opacity-80" : ""}`}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className={'object-cover object-center w-full h-full'} />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 flex items-center justify-center text-white font-bold">

                        </div>
                    </BackgroundGradientAnimation>
                )}
                <div className={cn(titleClassName,
                    'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
                    <div className="font-sans font-extralight text-white text-sm md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>
                    {id === 3 && (
                        <div className="grid grid-cols-3 grid-rows-4 gap-3 lg:gap-5 w-fit absolute -right-5 lg:-right-2 lg:pt-12 pr-5" style={{ opacity: 0.3 }}>
                            {TECH_STACK.map((tech, index) => (
                                <span key={tech} className={`py-1 lg:py-2 lg:px-1 px-1 text-xs lg:text-xs rounded-lg text-center bg-[#1013${index % 4 === 1 ? `4` : "1"}e]`}>
                                    {tech}
                                </span>
                            ))}
                        </div>)}
                </div>
                {id === 2 && (<GlobeDemo />)}


                {id === 6 && (
                    <div className="mt-5 relative">
                        <div className={`absolute -bottom-5 right-0`}>
                            <Lottie
                                options={defaultOptions} />
                        </div>
                        
                    </div>
                )}
            </div>
        </div>
    );
};
