


function identificadorDelimitadores(expresion) {
    let array = [];
    let pares = { ']': '[', ')': '(', '}': '{' };

    for (let caracter of expresion) {
        if (caracter === '[' || caracter === '{' || caracter === '(') {
            array[array.length] = caracter;
        } 
        else if (caracter === ']' || caracter === '}' || caracter === ')') {
            if (array.length === 0) return false;

            let ultimo = array[array.length - 1]; 
            if (ultimo === pares[caracter]) {
                array.length -= 1;
            } else {
                return false; 
            }
        }
    }

    return array.length === 0;
}



//------------------------------------------ Prueba---------------------------
console.log(identificadorDelimitadores("(){eewjnephwboeuhbw}[]"));   // true
console.log(identificadorDelimitadores("({[)]}"));   // false
