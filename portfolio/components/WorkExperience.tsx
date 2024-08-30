"use client";
import React from "react";
import { LampContainer } from "./ui/Lamp";
import { motion } from "framer-motion";
import { WORK_EXPERIENCE } from "@/data";
import { Button } from "./ui/MovingBorder";

type Props = {};

const WorkExperience = (props: Props) => {
    return (
        <section className="relative p-4 ">
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className=" bg-gradient-to-br from-white to-pink-300 py-4 bg-clip-text text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-transparent"
                >
                    My work experience
                </motion.h1>
            </LampContainer>
            <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
                {WORK_EXPERIENCE.map((item) => (
                    <Button key={item.title} className="p-5 flex gap-4 md:gap-6 flex-col sm:flex-row ">
                        <div>
                            <img
                                src={item.thumbnail}
                                className="min-h-[80px] min-w-[80px] lg:min-h-[100px] lg:min-w-[100px] object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col text-start gap-2">
                            <h2 className="font-bold text-base md:text-lg lg:text-xl">
                                {item.title}
                            </h2>
                            <p className="text-sm md:text-base font-light opacity-60">
                                {item.desc}
                            </p>
                        </div>
                    </Button>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;