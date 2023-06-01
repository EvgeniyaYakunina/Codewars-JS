//     Task
// Given a year, return the century it is in.
//
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20


function century(year) {

    return Math.ceil(year/100);
}
century();