import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    link: string;
    icon: IconType
}

const CustomLink = ({ link, icon: IconComponent }: Props) => {
    return (
        <a href={link} className='hover:opacity-70 duration-300 hover:translate-y-[-2px]'>
            <IconComponent className='w-10 h-10'/>
        </a>
    )
}

export default CustomLink;