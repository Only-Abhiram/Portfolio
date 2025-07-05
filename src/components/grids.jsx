
import ProfileCard from './profile/profilecard'
import profilePic from './profile/profile.png';
import InfiniteScroll from './skills/infinitescroll';
import items from './skills/items';
import Cp from './cp/cp.jsx';
import GlassIcons from './socials/socials.jsx';
import Socialitems from './socials/items.jsx'
import Card2 from './projects/exp.jsx';

export default function PortfolioGrid() {
    return (
        <div className="p-8 md:p-15 lg:p-25">

            <div className="flex flex-col lg:flex-row gap-5 h-full w-full">

                <div className="h-full w-full flex flex-col gap-5 ">
                    <div className="flex flex-col sm:flex-row  gap-5">
                        <div className="h-full  flex justify-center items-center opacity-0 animate-[fadeInLeft_1s_ease-out_forwards]" >
                            <ProfileCard
                                name="Abhiram Palle"
                                title="Software Engineer"
                                handle="abhiram"
                                status="Online"
                                contactText="Connect"
                                avatarUrl={profilePic}
                                // grainUrl={grain}
                                showUserInfo={true}
                                enableTilt={true}
                                onContactClick={() => {
                                    alert("mail: abhi1scientist@gmail.com");
                                }}
                            />
                        </div>
                        <div className="text-white w-full  backdrop-blur-lg rounded-2xl opacity-0 animate-[fadeInTop_1s_ease-out_forwards] delay-1000">
                            <Cp />
                        </div>
                    </div>

                    <div className="bg-black text-white p-5 rounded-2xl   opacity-0 animate-[fadeInBottom_1s_ease-out_forwards] delay-2000">
                        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                            <Card2 title={'Intern @ DigitalGuruji'} description={'Built frontend developer tools like JS/CSS Tools, Text Format Validators, and Text-Encoders & Decoders —used to boost productivity.'} link={'#'}/>
                            <Card2 title={'Project - Email Notification Automation:'} description={'Developed a Node.js backend using Gmail API and Gemini AI to analyze emails, prioritize content, and send smart summaries via WhatsApp using Meta’s API.'} link={'#'}/>
                            <Card2 title={'Hack Arena Hackathon'} description={'Created a blockchain-based healthcare system for secure, decentralized medical records using smart contracts, React, and Tailwind CSS.'} link={'#'}/>
                            
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5  ">
                    <div className="  rounded-2xl flex items-center opacity-0 animate-[fadeInRight_1s_ease-out_forwards] delay-500">
                        
                            <GlassIcons items={Socialitems} className="custom-class" />
                        
                    </div>
                    <div className="text-white  h-full flex justify-center items-center">
                        <div style={{ height: '400px', width: '100%', position: 'relative' }}>
                            <InfiniteScroll
                                width={'15rem'}
                                items={items}
                                isTilted={true}
                                tiltDirection='right'
                                autoplay={true}
                                autoplaySpeed={1.5}
                                autoplayDirection="down"
                                pauseOnHover={true}
                                negativeMargin={'-2em'}
                            />
                        </div>
                    </div>

                </div>



            </div>

        </div>
    )
}
