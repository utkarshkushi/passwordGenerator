const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];



const arrayIterator = (arr, numberOfIterations, password) =>{
    used = [];
    let x
    for(i=0; i<numberOfIterations; i++){
        x = arr[Math.floor(Math.random() * arr.length)]
        if(!used.includes(x)){
            used.push(x);
            password.push(x);
        }
        else{
            i--;
        }
    }
    
}

const createPassword = () =>{
    let password = [];
    arrayIterator(alphabets, 4, password);
    arrayIterator(symbols, 1, password);
    arrayIterator(numbers, 4, password)

    let passwordString = '';
    for(i=0; i<9; i++){
        passwordString += password[i];
    }
    passwordString = passwordString.charAt(0).toUpperCase() + passwordString.slice(1);
    return passwordString;
}

module.exports = createPassword;

