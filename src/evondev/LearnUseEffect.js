import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getRandomPhotos = () => {



    return axios.get('https://picsum.photos/v2/list')
        .then((response) => {
            // console.log(response);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        })
}


const LearnUseEffect = () => {
    const [randomPhoto, setRandomPhoto] = useState([]);

    // console.log('outside');
    useEffect(() => {
        // document.title = 'Welcome to useEffect';
        // console.log('inside');
        getRandomPhotos().then((images) => {
            // console.log(images);
            setRandomPhoto(images);
        });

    }, []);

    return (
        <div className='grid grid-cols-4 gap-5 p-5'>
            {randomPhoto.length >0 &&randomPhoto.map((item, index) =>{
               return <div key={item.id} className='p-3 bg-white shadow-md rounded-lg'>
                <img src={item.download_url} alt={item.author} className='w-ful h-ful object-cover rounded-lg'/>
                </div>
            })}
        </div>
    );
};

export default LearnUseEffect;
