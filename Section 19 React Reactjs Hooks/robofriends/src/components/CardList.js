import React from 'react';
import Card from './Card';

// CardList Component which consists of multiple Card components
// destructures robots from properties to use it inside the map function
const CardList = ({robots}) => {

    // return the cardlist
    return (
        <div>
        { 
            // create a list of card components consisting of name,email for each robot
            robots.map((robot,i) => {
                return <Card key={i} id={robot.id} name = {robot.name} email={robot.email}/>
            }) 
        }   
        </div>
    )
}

export default CardList;