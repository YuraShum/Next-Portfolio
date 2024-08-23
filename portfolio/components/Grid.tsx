import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { GRID_ITEMS } from '@/data'

type Props = {}

const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid>
                {GRID_ITEMS.map((item, index) => (
                    <BentoGridItem 
                    id={item.id} 
                    key={item.id} 
                    title={item.title} 
                    description={item.description} 
                    className={item.className}
                    img={item.img}
                    imgClassName={item.imgClassName}
                    titleClassName= {item.titleClassName}
                    spareImg={item.spareImg}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid