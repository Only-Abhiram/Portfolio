import ScrambledText from './scrambletxt';
import {useRef} from 'react';
export default function Card2({ title, description, link }) {
    const containerRef = useRef(null);
    return <div className='flex flex-col justify-between '>
        <h2 className='text-purple-500'>{title}</h2>
        <div className=''
            ref={containerRef}
            style={{ position: 'relative' }}
        >
            <ScrambledText
                className="scrambled-text-demo"
                radius={70}
                duration={1.2}
                speed={0.5}
                scrambleChars={'.:'}>
                {description}
            </ScrambledText>
        </div>
        <a href={link} className='hover:text-purple-500 hover:underline ease-in-out duration-75'>View work</a>
    </div >
}

