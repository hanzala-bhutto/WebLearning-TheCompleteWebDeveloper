import React from 'react';

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className='center ma mt2'>
            {/* <div className='absolute mt2'> */}
                <img src={imageUrl} width='500px' height='auto' alt='' />
            {/* </div> */}
        </div>
    )
}

export default FaceRecognition;