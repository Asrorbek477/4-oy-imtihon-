//                                   1-VARIANT

// 1. Berilgan stiring ichidan olib tashlanishi kerak bo’lgan stringni birinchi uchraganini olib tashlang.

    // function removeFirstOccurrence(mainString, subString) {
        
    //         const index = mainString.indexOf(subString);
    //         if (index === -1) {
    //             return mainString;
    //         } else {
    //             return mainString.slice(0, index) + mainString.slice(index + subString.length);
    //         }
    //     }
        
    //     console.log(removeFirstOccurrence('To be or not to be', 'not')); // To be or to be
    //     console.log(removeFirstOccurrence('I like legends', 'end')); // I like legs
    //     console.log(removeFirstOccurrence('ABABAB', 'BA')); // ABAB
        

// 2. Birinchi va so’ngi burchali qavslarni olib tashlang.

// function unbracketTag(str) {
//     let start = str.indexOf('<');
//     let end = str.lastIndexOf('>');
//     if (start !== -1 && end !== -1 && start < end) {
//         return str.slice(start + 1, end);
//     } else {
//         return str;
//     }
// }
// console.log(unbracketTag('<div>'));
// console.log(unbracketTag('<span>'));
// console.log(unbracketTag('<a>'));





// 3.Funksiyaga berilgan son tub bo’lsa true, aks holda false qaytarsin:

    // function isPrime(n) {
    //     if (n <= 1) {
    //         return false;
    //     } else if (n <= 3) {
    //         return true;
    //     }
    
    //     if (n % 2 === 0 || n % 3 === 0) {
    //         return false;
    //     }
    
    //     let i = 5;
    //     while (i * i <= n) {
    //         if (n % i === 0 || n % (i + 2) === 0) {
    //             return false;
    //         }
    //         i += 6;
    //     }
    
    //     return true;
    // }
    
    
    // console.log(isPrime(4));  // false
    // console.log(isPrime(5));  // true
    // console.log(isPrime(6));  // false
    // console.log(isPrime(7));  // true
    // console.log(isPrime(11)); // true
    // console.log(isPrime(12)); // false
    // console.log(isPrime(16)); // false
    // console.log(isPrime(17)); // true
    
    

// 4. Berilgan array ichidagi ma’lumotlardan yangi object yasab qaytaring. Functionga so’ralgan argumentlar kiritish orqali.

    // function group(array, keySelector, valueSelector) {
    //     const result = {};
      
    //     array.forEach(item => {
    //         const key = keySelector(item);
    //         const value = valueSelector(item);
        
    //         if (result[key]) {
    //             result[key].push(value);
    //         } else {
    //             result[key] = [value];
    //         }
    //     });
      
    //     return result;
    // }
    
    
    // const data = [  
    //     { country: 'Belarus', city: 'Brest' },
    //     { country: 'Russia', city: 'Omsk' },
    //     { country: 'Russia', city: 'Samara' },
    //     { country: 'Belarus', city: 'Grodno' },
    //     { country: 'Belarus', city: 'Minsk' },
    //     { country: 'Poland', city: 'Lodz' }
    // ];
    
    
    // const grouped = group(data, item => item.country.toLowerCase(), item => item.city);
    
    // console.log(grouped);
    

 

//  5. n1 va n2 orasidagi butun sonlar yig‘indisini qaytaring.

// function getSumBetweenNumbers(n1, n2) {
//     let sum = 0;
//     const start = Math.min(n1, n2);
//     const end = Math.max(n1, n2);
    
//     for (let i = start; i <= end; i++) {
//         sum += i;
//     }
    
//     return sum;
// }

// console.log(getSumBetweenNumbers(1, 2));   // 3
// console.log(getSumBetweenNumbers(5, 10));  // 45
// console.log(getSumBetweenNumbers(-1, 1));  // 0



// 6. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.

// function getElementsOneTime(arr) {
//     const counts = {};
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i];
//         counts[num] = (counts[num] || 0) + 1;
//     }

//     for (let key in counts) {
//         if (counts[key] === 1) {
//             result.push(parseInt(key));
//         }
//     }

//     return result;
// }

// const arr = [1, 5, 6, 1, 5, 7, 2];
// console.log(getElementsOneTime(arr)); // [6, 7, 2]


// 7. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsin.
// function removeOneDuplicate(arr) {
//     const uniqueElements = new Set();
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (uniqueElements.has(element)) {
//             uniqueElements.delete(element);
//         } else {
//             uniqueElements.add(element);
//             result.push(element);
//         }
//     }

//     return result;
// }

// const arr = [1, 5, 6, 1, 5, 7, 2];
// console.log(removeOneDuplicate(arr));

// 8. n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin.

// function removeElementsInRange(arr, k, m) {
//     if (k >= m || m >= arr.length || k < 0) {
//         return "Xatolik: k < m < n shartni bajaruvchi indekslarni kiriting.";
//     }

//     arr.splice(k, m - k + 1);

//     return {
//         length: arr.length,
//         elements: arr
//     };
// }

// const arr = [1, 5, 6, 1, 5, 7, 2];
// const k = 2;
// const m = 4;

// console.log(removeElementsInRange(arr, k, m)); 

// 9. Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.

//   const books = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       alreadyRead: false,
//     },
//     {
//       title: "Dunyo ishlari",
//       author: "O'tkir Hoshimov",
//       alreadyRead: true,
//     },
//     {
//       title: "Vaqtning qadri",
//       author: "Abdulfattoh Abu G'udda",
//       alreadyRead: false,
//     },
// ];

// books.forEach((book, index) => {
//     const status = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
//     console.log(`${index + 1}. ${book.author}ning "${book.title}" kitobi ${status};`);
// });







//   10. Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.

// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
//   ];
  
//   let totalAmount = 0;
  
//   products.forEach(product => {
//     const discountedPrice = product.price * (1 - product.discount / 100);
//     const subtotal = discountedPrice * product.quantity;
//     totalAmount += subtotal;
//   });
  
//   console.log("Umumiy summa:", totalAmount);
  

