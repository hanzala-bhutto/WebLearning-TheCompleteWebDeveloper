import React from 'react';
import Card from './Card';

// CardList Component which consists of multiple Card components
// destructures robots from properties to use it inside the map function
const CardList = ({robots}) => {

    // create a list of card components consisting of name,email for each robot
    const cardsArray = robots.map((robot,i) => {
        return <Card key={i} id={robot.id} name = {robot.name} email={robot.email}/>
    }) 

    // return the cardlist
    return (
        <div>
        { 
            cardsArray
        }   
        </div>
    )
}

export default CardList;