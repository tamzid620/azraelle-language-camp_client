import infoimg1 from '../../../../src/assets/icons/phone.jpg'
import infoimg2 from '../../../../src/assets/icons/like.jpg'
import infoimg3 from '../../../../src/assets/icons/setting.jpg'
import infoimg4 from '../../../../src/assets/icons/message.jpg'

const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 xl:grid-cols-4 py-9 my-20 bg-blue-200'>

            <div className='flex '>
                <div className='pe-5'>
                    <img className='w-[60px]' src={infoimg1} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-blue-800 text-2xl mb-3'>POWERFUL LEARNING <br /> MANAGEMENT <br /> SYSTEM</h1>
                    <p className='font-semibold text-gray-600'>Outstanding features for highly <br /> customizable Courses, Units, <br /> Lessons, and Quizzes</p>
                </div>
            </div>



            <div className='flex '>
                <div className='pe-5'>
                    <img className='w-[60px]' src={infoimg2} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-blue-800 text-2xl mb-3'>EFFORTLESSLY <br /> MANAGE COURSES</h1>
                    <p className='font-semibold text-gray-600'>User-friendly Course <br /> Management Powered by <br /> Masterstudy LMS Plugin</p>
                </div>
            </div>



            <div className='flex '>
                <div className='pe-5'>
                    <img className='w-[60px]' src={infoimg3} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-blue-800 text-2xl mb-3'>EASILY SELL COURSES <br /> ONLINE</h1>
                    <p className='font-semibold text-gray-600'>Enjoy the flexibility of <br /> education WordPress theme <br /> and easily manage online <br /> sales.</p>
                </div>
            </div>



            <div className='flex '>
                <div className='pe-5'>
                    <img className='w-[60px]' src={infoimg4} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-blue-800 text-2xl mb-3'>24/7 PROFESSIONAL <br /> SUPPORT</h1>
                    <p className='font-semibold text-gray-600'>We care about our customers <br /> and provide free 24/7 support. <br /> Ask your questions via Ticket <br /> System.</p>
                </div>
            </div>


        </div>
    );
};

export default Info;