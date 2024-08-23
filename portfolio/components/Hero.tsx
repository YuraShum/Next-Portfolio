'use client'
import { useEffect, useMemo, useRef, useState, memo } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/textGenerateEffect'
import Button from './ui/Button'
import VerticalTextAppearance from './ui/VerticalTextAppearance'


type Props = {}

const DESCRIPTION = "I have been engaged in front-end development for over a year, creating interfaces for various fields, from scientific visualizations to creative interactive solutions. Responsible and goal-oriented, I easily find a common language with people and have experience in teamwork."

const LABLE_TEXT = "Junior Frontend Developer"

const Hero = (props: Props) => {


  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='-top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center gap-6' >
          <h2 className='uppercase tracking-widest text-xl text-blue-100 '> Yurii Shumelchuk portfolio</h2>
          <TextGenerateEffect className='text-[50px] text-center' words={LABLE_TEXT} duration={1.2} />
          <VerticalTextAppearance text={DESCRIPTION}/>
          
          <a href='#about'>
            <Button text='All my project' />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Hero