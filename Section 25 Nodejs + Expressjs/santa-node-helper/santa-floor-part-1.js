const fs = require('fs');

const floorIdentifier = (direction) => {
    let floor=0;
    length = direction.length;
    for(let i=0; i<length; i++){
        if(direction[i] == '('){
            ++floor;
        }
        else{
            --floor;
        }
    }
    
    return floor;
}

fs.readFile('./santa.txt', (err,data) => {
    const path = data.toString();
    floor = floorIdentifier(path);
    console.log(floor);
    // console.log(path);
})
