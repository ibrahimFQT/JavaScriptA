// Soal 1
const identity   = ['Ibrahim', '16', 'Villa Bintaro']
console.log(identity);

// Soal 2
identity[0] = 'Ibrahim Faqot'
console.log(identity);

// Soal 3
// identity.splice(1,1);
// console.log(identity);

// Soal 4
const angka1 = [1,2,3]
const angka2 = [4,5,6]  
const angka3 = angka1.concat(angka2)
console.log(angka3);

// Soal 5
console.log(identity.indexOf('Villa Bintaro'));

// soal 6
function compareNumbers(a, b) {
    return a - b;
  }
const numbers =  [34, 7, 23, 32, 5];
numbers.sort(compareNumbers);
console.log(numbers);

// Soal 7
console.log(numbers.length);