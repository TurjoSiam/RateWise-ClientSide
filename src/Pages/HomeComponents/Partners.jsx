import logo1 from '/l8.png'
import logo2 from '/l12.jpg'
import logo3 from '/l13.jpg'
import logo4 from '/l14.jpg'
import logo5 from '/l16.jpg'

const Partners = () => {
    return (
        <div className="mx-auto my-20 p-7 bg-orange-50">
            <h2 className='text-center text-3xl underline font-bold text-blue-900 mb-7'>Partners & Collaborators</h2>
            <div className="flex flex-col lg:flex-row justify-center gap-5 items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                    {/* Profile Picture */}
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                        <img
                            src={logo1}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Name and Title */}
                    <h3 className="text-lg font-semibold">Tech Solutions</h3>
                    {/* Quote */}
                    <p className="text-gray-600 italic mt-4">
                    Our partnerships are rooted in a foundation of trust, transparency, and mutual understanding.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                    {/* Profile Picture */}
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                        <img
                            src={logo2}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Name and Title */}
                    <h3 className="text-lg font-semibold">HomeFix Experts</h3>
                    {/* Quote */}
                    <p className="text-gray-600 italic mt-4">
                    We believe in the power of collaboration to transform challenges into opportunities.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                    {/* Profile Picture */}
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                        <img
                            src={logo3}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Name and Title */}
                    <h3 className="text-lg font-semibold">EduAdvance</h3>
                    {/* Quote */}
                    <p className="text-gray-600 italic mt-4">
                    The strength of our collaborations lies in the synergy we create with our partners.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                    {/* Profile Picture */}
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                        <img
                            src={logo4}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Name and Title */}
                    <h3 className="text-lg font-semibold">
                    EcoClean</h3>
                    {/* Quote */}
                    <p className="text-gray-600 italic mt-4">
                    At the core of our relationships with partners is a dedication to shared success. 
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                    {/* Profile Picture */}
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                        <img
                            src={logo5}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Name and Title */}
                    <h3 className="text-lg font-semibold">Swift Logistics</h3>
                    {/* Quote */}
                    <p className="text-gray-600 italic mt-4">
                    This collaborative spirit enables us to build strong connections and deliver results that exceed expectations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Partners;