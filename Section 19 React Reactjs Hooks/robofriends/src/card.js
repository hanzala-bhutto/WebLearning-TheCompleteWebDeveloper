import React from "react";

const Card = (props) => {
    // destructuring
    const {id,name,email} = props;
    return (
        <div className="tc bg-light-green dib pr3 ba3 ma2 grow bw2 shadow-5">
            <img alt='robot' src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default Card;