const nayok = {
    name : 'shakib khan',
    id : 121,
    address : 'movie cinema',
    isSingle : true,
    friends : ['apu', 'raj', 'salman', 'amir'],
    movies:[{name : 'no 1', year: 2012}, {name : 'no 2', year: 2000}],
    act: function() {
        console.log('acting like shakib khan');
    },
    car:{
        brand: 'tesla',
        price: 5000000,
        made: 2023,
        manufacturer:{
            name : 'tesla',
            ceo : 'Eelon Mask',
            county : 'USA',

        }

    }

}

console.log(student);
console.log(student.friends);
console.log(student.car);
console.log(nayok.act);
nayok.act();