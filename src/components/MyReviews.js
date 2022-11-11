import React from 'react';

const MyReviews = () => {
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
                        <tr>
                            <td className='text-left'>
                                <button className='btn btn-primary'>Delete</button>
                            </td>
                            <td className='text-center'>This is service title</td>
                            <td className='text-center'>This is my review</td>
                            <td className='text-right'>
                                <button className='btn btn-primary'>Update</button>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-left'>
                                <button className='btn btn-primary'>Delete</button>
                            </td>
                            <td className='text-center'>This is service title</td>
                            <td className='text-center'>This is my review</td>
                            <td className='text-right'>
                                <button className='btn btn-primary'>Update</button>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-left'>
                                <button className='btn btn-primary'>Delete</button>
                            </td>
                            <td className='text-center'>This is service title</td>
                            <td className='text-center'>This is my review</td>
                            <td className='text-right'>
                                <button className='btn btn-primary'>Update</button>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-left'>
                                <button className='btn btn-primary'>Delete</button>
                            </td>
                            <td className='text-center'>This is service title</td>
                            <td className='text-center'>This is my review</td>
                            <td className='text-right'>
                                <button className='btn btn-primary'>Update</button>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-left'>
                                <button className='btn btn-primary'>Delete</button>
                            </td>
                            <td className='text-center'>This is service title</td>
                            <td className='text-center'>This is my review</td>
                            <td className='text-right'>
                                <button className='btn btn-primary'>Update</button>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-left'>
                                <button className='btn btn-primary'>Delete</button>
                            </td>
                            <td className='text-center'>This is service title</td>
                            <td className='text-center'>This is my review</td>
                            <td className='text-right'>
                                <button className='btn btn-primary'>Update</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;