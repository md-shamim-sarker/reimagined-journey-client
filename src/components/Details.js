import React, {useContext, useEffect, useState} from 'react';
import {useLoaderData} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';

const Details = () => {
    const {_id, title, image, details, price} = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const [load, setLoad] = useState(false);
    const user = useContext(AuthContext);
    const email = user?.user?.email;
    const date = Number(new Date());

    const reviewHandler = (event) => {
        event.preventDefault();
        const review = event.target.review.value;
        const serviceTitle = title;
        const serviceId = _id;
        const userReview = {email, date, review, serviceId, serviceTitle};
        console.log(userReview);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(userReview)
        }).then(() => {
            alert('Review added successfully!!');
            setLoad(!load);
        }).catch(error => {
            console.error(error.message);
        });
    };

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            })
            .catch(err => console.log(err));
    }, [_id, load]);

    console.log(load);

    return (
        <div className='w-11/12 lg:w-4/5 mx-auto mb-10'>
            <div>
                <h2 className='text-3xl font-bold text-center my-10'>{title}</h2>
                <img src={image} alt="..." className='w-52 h-52' />
                <h3 className='my-10 text-lg font-bold text-orange-500'>Price: {price}</h3>
                <p>{details}</p>
            </div>

            <div>
                <h2 className='text-2xl font-bold my-10'>Reviews</h2>
                {
                    reviews.map(review => <div key={review?._id}>
                        <div>
                            <div className='flex items-center gap-3'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" alt='...' />
                                    </div>
                                </div>
                                <h2 className='text-xl font-bold'>{review?.email}</h2>
                            </div>
                            <div className='pl-5 mb-3'>{review?.review}</div>
                        </div>
                    </div>)
                }
            </div>

            <div>
                <h2 className='text-2xl font-bold mt-10 mb-5'>Please write a review</h2>
                <form onSubmit={reviewHandler}>
                    <textarea name="review" className='w-full h-20 border border-black'></textarea>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Details;