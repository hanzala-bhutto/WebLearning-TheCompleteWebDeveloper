const fs = require('fs');

const basementTaker = (path) => {
    let floor=0;
    let identifyParan=0;

    for(let i=0; i<path.length; i++){
        if(path[i] == '('){
            ++floor;
        }
        else{
            --floor;
            if(floor<0){
                identifyParan=i+1;
                break;
            }
        }
    }
    
    return identifyParan;
}



fs.readFile('./santa.txt', (err,data) => {
    const path = data.toString();
    identifyBasementTaker = basementTaker(path);
    console.log(identifyBasementTaker);
    // console.log(path);
})

