import CountUp from './count.jsx';
import CardWrapper from './cardwrapper.jsx'
function Card({ name, link, image }) {
    return <a href={link} target='_blank' className="flex justify-between hover:text-purple-500 p-2 rounded-xl hover:bg-gray-500/20">
        <div>{name}</div>
        <img className="h-5" src={image} alt="link" />
    </a>
}

export default function Cp() {
    return <CardWrapper>
        <div className="flex flex-col justify-around gap-5 h-full w-full p-10 relative bg-black rounded-3xl">
                <div className="flex h-full  justify-around gap-5 ">
                    <div className='h-full flex flex-col justify-center'>
                        <h2>Problems Solved</h2>
                        <div className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                            <CountUp
                                from={0}
                                to={880}
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
                                to={36}
                                separator=","
                                direction="up"
                                duration={3}
                                className="count-up-text"
                            />+
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <Card name={'Leetcode'} link={'https://leetcode.com/u/Abhiram-06/'} image={'https://img.icons8.com/?size=100&id=zWS3SNRj7odb&format=png&color=FFFFFF'} />
                    <Card name={'CodeForces'} link={'https://codeforces.com/profile/Abhiram_Palle'} image={'https://img.icons8.com/?size=100&id=zWS3SNRj7odb&format=png&color=FFFFFF'} />
                    <Card name={'GeeksForGeeks'} link={'https://www.geeksforgeeks.org/user/abhiram_06/'} image={'https://img.icons8.com/?size=100&id=zWS3SNRj7odb&format=png&color=FFFFFF'} />
                    <Card name={'CodeChef'} link={'https://www.codechef.com/users/am_abhiram'} image={'https://img.icons8.com/?size=100&id=zWS3SNRj7odb&format=png&color=FFFFFF'} />
                </div>
            </div>
    </CardWrapper>
            
        
}