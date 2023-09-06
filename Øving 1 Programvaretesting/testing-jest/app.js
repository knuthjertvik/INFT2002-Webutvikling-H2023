export function isLeapYear(year) {
    if ((year < 0) || (year == null)) {
        throw new Error("Invalid argument: year must be integer equal to or larger than 0")
    }
    
    return (year % 4 === 0) &&
           (year % 100 !==  0) ||
           (year % 400 === 0);
}