function mapToNegativize(array){
    let newArray = []
    array.map(value => {
        newArray.push(value * -1)
    })
    return newArray
}

function mapToNoChange(array){
    let newArray = []
    array.map(value => {
        newArray.push(value)
    })
    return newArray
}

function mapToDouble(array){
    let newArray = []
    array.map(value => {
        newArray.push(value * 2)
    })
    return newArray
}

function mapToSquare(array){
    let newArray = []
    array.map(value => {
        newArray.push(value ** 2)
    })
    return newArray
}


function reduceToTotal(array, memo = 0){

    const sum = array.reduce((total, amount, index, start) => total + amount, memo); 
    return sum
}

const reduceToAllTrue = (arr) => {
    for (const ele of arr) {
        if (!!ele === false) {
            return false
        }
    }
    return true
}

const reduceToAnyTrue = (arr) => {
    for (const ele of arr) {
        if (ele === true) {
            return true
        }
    }
    return false
}