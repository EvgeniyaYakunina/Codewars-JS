const arrayPlusArray = (arr1, arr2) => {
    let arr3 = [].concat(arr1,arr2)
    let s = 0;
    for( i = 0; i < arr3.length; i++){
        s += arr3[i];
    }
    return s
}
arrayPlusArray();

// второй вариант
// const arrayPlusArray = (arr1, arr2) => {
//     sumOfArr1 = arr1.reduce((sum, el) => sum + el, 0);
//     sumOfArr2 = arr2.reduce((sum, el) => sum + el, 0);
//     return sumOfArr1 + sumOfArr2;
// }