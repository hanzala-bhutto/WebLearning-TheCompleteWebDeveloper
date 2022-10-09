import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{paddingbottom: '5px',overflowY: 'scroll', border: '5px solid #0ccac4', height: '800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;