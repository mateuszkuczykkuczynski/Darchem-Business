import React from 'react';

const Hero = () => {
    return (
        <div className="bg-fixed" style={{ backgroundImage: "url('https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>

            <div className="flex justify-center mx-auto p-4">
                <button className="hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8 mr-2">
                    More details
                </button>

            </div>
        </div>
    );
};

export default Hero;
