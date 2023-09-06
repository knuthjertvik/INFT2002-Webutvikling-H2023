import {isLeapYear} from './app.js';

describe('A year is a leap year', () => {   
    test.each([
        [1820, true],
        [1960, true], 
        [2020, true],
    ])('Year %i should be leap year: %s', (year, expectedResult) => {
        expect(isLeapYear(year)).toBe(expectedResult);
    });
    
    test.each([
        [1981, false], // Year is not divisible by 4
        [2100, false], // Year is divisible by 100 but not by 400
    ])('Year %i should not be leap year: %s', (year, expectedResult) => {
        expect(isLeapYear(year)).toBe(expectedResult);
    });

});
    
describe('A year is not supported', () => {
    test('Specific error message when inputting negative numbers', () => {
        expect( () => {isLeapYear(-3);})
        .toThrow('Invalid argument: year must be integer equal to or larger than 0');
        });
    
    test(
        'Error when input is undefined', () => {
        expect( () => {isLeapYear(undefined);})
        .toThrow('Invalid argument: year must be integer equal to or larger than 0');
        });
        
    test(
        'Error when input is NULL', () => {
        expect( () => {isLeapYear(null);})
        .toThrow('Invalid argument: year must be integer equal to or larger than 0');
        });
});
