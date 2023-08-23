import React from 'react';
import { FaLocationArrow } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
const Card = (props) => {
  return (
    
    <div className="bg-white rounded-lg shadow-md p-4 grid grid-cols-1 gap-[3rem] max-w-[100%] mx-5 transition-all delay-50 hover:shadow-2xl md:max-w-[80%] lg:grid-cols-4 border">
      <div className="col-span-1 md:col-span-4 lg:col-span-1">
      <div
          className="w-[45rem] relative h-[19rem] rounded-lg overflow-hidden"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        >
          <img
            className="w-full h-full object-cover relative"
            src={props.imageUrl}
            alt="Japan Mount Fuji"
          />
          <p className='absolute top-[.9rem] left-[1rem] bg-blue-500 px-3 py-1 text-white rounded-lg flex items-center gap-1'>{props.stats}<AiFillStar /></p>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3">
            <div className='flex gap-5'>
                <p className='font-primary flex items-center gap-1'><FaLocationArrow className='text-blue-500'/>{props.location}</p>
                <a href={props.googleMapUrl} className='underline font-primary'>View on Google Map</a>
            </div>
        
        <h1 className="font-extrabold mb-5 mt-2 text-primary text-4xl font-primary">{props.title}</h1>
        <div className='flex font-bold font-primary text-primary mb-3'>
            <p>{props.startDate}</p>
            <p>-</p>
            <p>{props.endDate}</p>
        </div>
        <p className="font-primary mt-5 text-md max-w-[100%] lg:max-w-[70%]">{props.description}</p>

      </div>
    </div>
  );
};

export default Card;
