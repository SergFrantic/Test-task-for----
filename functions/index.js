const data = require('./data.json');

const task11Result = (animals) => {
    let result = {dogs: 0, cats: 0, avgage: 0};

    result = animals.reduce((result, current) => {
        switch(current.type) {
            case 'dog':
                return {
                    ...result,
                    dogs: result.dogs + 1,
                    avgage: result.avgage + current.age
                }
            case 'cat':
                return {
                    ...result,
                    cats: result.cats + 1,
                    avgage: result.avgage + current.age
                }
            default:
                return result
        }        
    }, result)
    
    return {
        ...result,
        avgage: Math.round(result.avgage / animals.length)
    }  
};

console.log(task11Result(data));

const task12Result = (animals) => {
    
    let color
    const result = animals.reduce((summ, current) => {
        color = current.features[0]

        if(current.type === 'dog' && current.breed && color === 'black') {
            return summ + 1
        }
        return summ
    }, 0)

    return result;
};

console.log(task12Result(data));

const task13Result = (animals) => {
    let color
    let isStateCat
    let isStateDog
    const result = animals.filter((current) => {
        color = current.features[0]
        isStateCat = current.type === 'cat' && color === 'black'
        isStateDog = current.type === 'dog' && color === 'white'
        return isStateCat || isStateDog        
    })

    return result;
};

console.log(task13Result(data));

const task14Result = (animals) => {
    const result =  animals.sort((a, b) => {
       if(a.type > b.type) {
           return 1
       } 
       return -1       
    })   

    return result.sort((a, b) => {
        if(a.type === 'cat' && b.type === 'cat') {
            return b.age - a.age
        } else if(a.type === 'dog' && b.type === 'dog'){
            return a.age - b.age
        }
    }) 
};

console.log(task14Result(data));

const myPowFunc = (number, n) => {
    let result = number

    if(n === 0) {
        return 1
    }

    for (let i = 1; i < n; i++) {
        result *= number;
    }
    return result;
};

console.log(myPowFunc(3, 4));

const myFlatFunc = (inputArray) => {
    let result = []

    for(let i = 0; i < inputArray.length; i++) {
        if(Array.isArray(inputArray[i])) {
            result = result.concat(myFlatFunc(inputArray[i]))
        } else {
            result.push(inputArray[i])
        }
    }

    return result    
};

console.log(myFlatFunc([1, 3, 5, [1, [4,5], 'asdf', [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
