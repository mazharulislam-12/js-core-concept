// for loop 
const numbers = [15, 65, 55, 89, 74];
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

// for off loop
for (const number of numbers) {
    console.log(number);
}

// for off
const nums = [54, 54, 89, 66]
for(const num of nums){
    console.log(num);
}

const products = [
    {id: 1, name: 'opp', price: 12000 },
    {id: 2, name: 'apple', price: 12054400 },
    {id: 3, name: 'Nokia', price: 1204500 },
    {id: 4, name: 'xiami', price: 120040 },
    {id: 5, name: 'dell leptop', price: 1122000 },
    {id: 6, name: 'apple leptop', price: 200000 },
    {id: 7, name: 'sansung', price: 15000 },
    {id: 8, name: 'lanavo', price: 100000 },

];
// for (const product of products) {
//     console.log(product);
// }


// function
function matchdProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}
const result = matchdProducts(products, 'phone');
console.log(result);