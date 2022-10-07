import React from "react";

const card = (props) => {
    // destructuring
    const {id,name,email} = props;
    return (
        <div>
            <img alt='robot' src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

return card;