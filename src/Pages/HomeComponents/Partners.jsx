

const Partners = () => {
    return (
        <div>
            <div className="flex justify-center items-center bg-gray-100 mr-10 rounded-2xl">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                    {/* Profile Picture */}
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                        <img
                            src=""
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Name and Title */}
                    <h3 className="text-lg font-semibold">Sophia Bennett, Travel Blogger</h3>
                    {/* Quote */}
                    <p className="text-gray-600 italic mt-4">
                        "The eco-adventure was an unforgettable experience! From breathtaking views to the commitment to sustainability, it exceeded all my expectations. Highly recommended!"
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Partners;