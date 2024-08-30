import React from 'react'
import Button from './ui/Button'
import { SOCIAL_LINK } from '@/data'
import CustomLink from './ui/CustomLink'


type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='mt-10 h-fit w-[100vw] dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] relative flex items-center justify-center bottom-0 left-0'>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,transparent_60%)]"></div>
            <div className=' flex flex-col gap-20 justify-center mt-20'>
                <div className='flex gap-10 md:gap-14 flex-col items-center p-4'>
                    <h2 className='max-w-[80%] text-3xl md:text-4xl  lg:text-5xl font-bold text-center md:max-w-[60%] m-auto'>
                        Ready to take your digital presence to the next level?
                    </h2>
                    <p className="text-sm md:text-base font-light opacity-60 text-center ">Reach out to me today and let`s discuss how i can help you achieve your goais.</p>
                    <Button text='Let`s get in touch' />
                </div>
                <div className='flex justify-between p-4'>
                    <p>Copyright © 2024 Yurii Shumelchuk</p>
                    <div className='flex gap-4 items-center bg-transparent'>
                        {SOCIAL_LINK.map(item => (
                            <CustomLink key={item.link} link={item.link} icon={item.icon} />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer