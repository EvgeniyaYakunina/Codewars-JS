function reverseWords(str){
    return str.split(` `).reverse().join(` `);
}
reverseWords();

// 2 variant:
//     const reverseWords = str => str.split(` `).reverse().join(` `)