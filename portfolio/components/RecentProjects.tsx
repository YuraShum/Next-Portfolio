import { PROJECTS } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3DPin'
import { TiArrowForward } from "react-icons/ti";

type Props = {}

const RecentProjects = (props: Props) => {
  return (
    <div className='py-20' id='projects'>
      <div className='heading p-4'>
        <p>A small selection of</p>
        <span className='text-pink-200'>recent Projects</span>
      </div>

      <div className='flex flex-wrap items-center justify-center p-4 md:p-0 gap-x-20 gap-y-4'>
        {PROJECTS.map(({ id, title, description, img, iconLists, link }) => (
          <div key={id} className='sm:h-[35rem] lg:min-h-[38rem] h-[30rem] flex items-center justify-center lg:min-w-[570px] sm:w-96 w-[90vw]'>
            <PinContainer title={title} href={link}>
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] lg:min-w-[470px] overflow-hidden h-[27vh] lg:h-[35vh] '>
                <div className='relative w-full h-full overflow-hidden rounded-3lx'>
                  <img src="/bg.jpg" alt="background color img" />
                </div>
                <img src={img} alt={title} />
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mt-2'>{title}</h1>
              <p className='lg:text-lg lg:font-normal font-light text-sm line-clamp-2'>{description}</p>
              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center flex-wrap gap-2'>
                  {iconLists.map(icon => (
                    <div className='border border-white/[0.2] rounded-lg bg-white w-9 h-9 md:w-11 md:h-11 flex items-center justify-center' key={icon}>
                      <img className='p-2' src={icon} alt={icon} />
                    </div>
                  ))}
                </div>

              </div>
              <div className='flex justify-end mt-4 items-center gap-1 opacity-30 text-purple'>
                <p>Check GitHub Repository</p>
                <TiArrowForward />

              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects