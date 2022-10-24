import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3 tc meow'>
                This Magic brain will detect faces in your pictures. Give it a try
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center b--none' type='text' />
                    <button className='w-30 grow f4 link ph3 pv2 dib white b--none bg-light-purple '>Detect</button>
                </div>  
            </div>
        </div>
    );
}

export default ImageLinkForm;