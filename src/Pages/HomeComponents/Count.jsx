import CountUp from 'react-countup';

const Count = () => {
    return (
        <div className='w-11/12 mx-auto my-20 p-10 rounded-3xl bg-gradient-to-tr from-teal-700 to-green-700 shadow-lg flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-around'>
            <h2 className='text-[50px] font-bold text-white mb-5 block'>Statistics</h2>
            <div className='text-center bg-yellow-50  w-fit py-7 px-16'>
                <h1 className='text-2xl font-bold'>Total Users</h1>
                <CountUp className='text-5xl font-bold text-blue-900' start={0} end={53} duration={5} />
            </div>
            <div className='text-center bg-yellow-50  w-fit py-7 px-16'>
                <h1 className='text-2xl font-bold'>Total Services</h1>
                <CountUp className='text-5xl font-bold text-blue-900' start={0} end={72} duration={7} />
            </div>
            <div className='text-center bg-yellow-50  w-fit py-7 px-16'>
                <h1 className='text-2xl font-bold'>Total Reviews</h1>
                <CountUp className='text-5xl font-bold text-blue-900' start={0} end={110} duration={8} />
            </div>
        </div>
    );
};

export default Count;