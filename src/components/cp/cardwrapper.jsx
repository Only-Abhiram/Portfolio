import './movingstar.css';
export default function CardWrapper({children}){
    return <div className='h-full w-full p-px rounded-3xl relative overflow-hidden'>
        <div className='card-wrapper h-full w-full'>
            {children}
        </div>
        </div>
}