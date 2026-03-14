let numbers = [70,13,9,23]

for (let i = 0; i < numbers.length; i++) {
    for (let j = i+1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]){
            let aux = numbers [i]
            numbers [i] = numbers [j]
            numbers[j] = aux
            console.log(numbers)
        }
        
    }
    
}
console.log(numbers)




