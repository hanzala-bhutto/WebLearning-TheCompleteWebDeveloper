import React from 'react';

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className='center ma mt2'>
            {/* <div className='absolute mt2'> */}
                <img id='inputImage' src={imageUrl} width='500px' height='auto' alt='' />
            {/* </div> */}
        </div>
    )
}

export default FaceRecognition;