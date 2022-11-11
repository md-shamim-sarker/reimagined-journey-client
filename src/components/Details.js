import React from 'react';
import {useLoaderData} from 'react-router-dom';

const Details = () => {
    const {title, image, details, price} = useLoaderData();
    return (
        <div className='w-11/12 lg:w-4/5 mx-auto mb-10'>
            <div>
                <h2 className='text-3xl font-bold text-center my-10'>{title}</h2>
                <img src={image} alt="..." className='w-52 h-52' />
                <h3 className='my-10 text-lg font-bold text-orange-500'>Price: {price}</h3>
                <p>{details}</p>
            </div>

            <div>
                <h2 className='text-2xl font-bold mt-10 mb-5'>Please write a review</h2>
                <form>
                    <textarea name="review" className='w-full h-20 border border-black'></textarea>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Details;