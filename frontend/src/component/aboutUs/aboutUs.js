import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div class=" bg-slate-900 fixed top-0 z-10  inset-0 text-center p-20">
            <p className='text-white font-bold '>I am Nikesh Chaudhary, Developer of Byte Ecommerce</p>
            <Link className='text-cyan-500 ' to="https://nikeshportfolio52494.web.app/">Visit my portfolio</Link>
        </div>
    );
}

export default AboutUs;
