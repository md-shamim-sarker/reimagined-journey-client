import React from 'react';
import {useLoaderData} from 'react-router-dom';

const MyReviews = () => {
    const reviews = useLoaderData();
    console.log(reviews);
    return (
        <div className='w-11/12 lg:w-4/5 mx-auto'>
            <h2 className='text-3xl text-center font-bold my-10'>My All Reviews</h2>
            <div className="overflow-x-auto my-10">
                <table className="table w-full border">
                    <thead>
                        <tr>
                            <td className='text-left'>Delete</td>
                            <td className='text-center'>Service Title</td>
                            <td className='text-center'>My Review</td>
                            <td className='text-right'>Update</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review =>
                                <tr key={review?._id}>
                                    <td className='text-left'>
                                        <button className='btn btn-primary'>Delete</button>
                                    </td>
                                    <td className='text-center'>{review?.serviceTitle}</td>
                                    <td className='text-center'>{review?.review?.slice(0, 10)}...</td>
                                    <td className='text-right'>
                                        <button className='btn btn-primary'>Update</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;