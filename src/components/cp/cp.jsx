import CountUp from './count.jsx';

function Card({ name, link, image }) {
    return <a href={link} className="flex justify-between hover:text-purple-500 p-2 rounded-xl hover:bg-gray-500/20">
        <div>{name}</div>
        <img className="h-5" src={image} alt="link" />
    </a>
}

export default function Cp() {
    return <div className="flex flex-col justify-around gap-5 h-full w-full p-10">
        <div className="flex h-full  justify-around gap-5 ">
            <div className='h-full flex flex-col justify-center'>
                <h2>Problems Solved</h2>
                <div className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                    <CountUp
                        from={0}
                        to={678}
                        separator=","
                        direction="up"
                        duration={3}
                        className="count-up-text"
                    />+
                </div>
            </div>
            <div className='h-full flex flex-col justify-center'>
                <h2>Contests</h2>
                <div className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                    <CountUp
                        from={0}
                        to={17}
                        separator=","
                        direction="up"
                        duration={3}
                        className="count-up-text"
                    />+
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <Card name={'Leetcode'} link={''} image={'https://img.icons8.com/?size=100&id=zWS3SNRj7odb&format=png&color=FFFFFF'} />
            <Card name={'CodeForces'} link={''} image={'https://img.icons8.com/?size=100&id=zWS3SNRj7odb&format=png&color=FFFFFF'} />
            <Card name={'GeeksForGeeks'} link={''} image={'https://img.icons8.com/?size=100&id=zWS3SNRj7odb&format=png&color=FFFFFF'} />
            <Card name={'CodeChef'} link={''} image={'https://img.icons8.com/?size=100&id=zWS3SNRj7odb&format=png&color=FFFFFF'} />
        </div>
    </div>
}