import React from 'react';
import {Link, useLoaderData} from 'react-router-dom';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
            {
                services.map(service =>
                    <div key={service._id} className="card w-auto bg-base-100 shadow-xl">
                        <figure><img src={service.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.title}</h2>
                            <p>{service.details.slice(0, 100)}...</p>
                            <div className="card-actions justify-between items-center">
                                <h2 className='text-lg text-orange-500 font-bold'>Price: {service.price}</h2>
                                <Link to={`/services/${service._id}`} className="btn btn-primary">Details</Link>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Services;