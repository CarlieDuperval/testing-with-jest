import sum from "../src/index.js"
import {sum2} from "../src/index.js"

describe("The tests for sum", () => {

    // it("Should add two numbers", () => {
    //     // Arrange
    //     const c = 2
    //     const d = 3
    //     const expected = 5
    
    //     // Act : calling the function
    //     const actual = sum (c, d)
    
    //     //Assert
    //     expect(actual).toBe(expected)
    
    // })

    it("Should return the difference of two numbers if a < b", () => {
        // Arrange
        const c = 2
        const d = 3
        const expected = 1
    
        // Act : calling the function
        const actual = sum (c, d)
    
        //Assert
        expect(actual).toBe(expected)
    
    })

    it("Should return the sum of two numbers if a > b", () => {
        // Arrange
        const c = 3
        const d = 2
        const expected = 5
    
        // Act : calling the function
        const actual = sum (c, d)
    
        //Assert
        expect(actual).toBe(expected)
    
    })

    it("Should failed with a string input", () => {
        //Arrange
        const a = "str" 
        const b = 5 , 
        expected = "Bad Input"

        //Act
        const actual = sum (a, b)

        //Assert
        expect(actual).toBe(expected)
        
    });
})


describe("The tests for sum", () => {

    it("Should add two numbers", () => {
        // Arrange
        const c = 2
        const d = 3
        const expected = 5
    
        // Act : calling the function
        const actual = sum2 (c, d)
    
        //Assert
        expect(actual).toBe(expected)
    
    })

    it("Should failed with a string input", () => {
        //Arrange
        const a = "str" 
        const b = 5 , 
        expected = "Bad Input"

        //Act
        const actual = sum2 (a, b)

        //Assert
        expect(actual).toBe(expected)
        
    });
})