const help = require("./helpers")

describe("helper module", () => {
    describe("sum function", () => {
        it("can find the sum of two numbers", () => {
                const expectedOutput = 7;
                const actualOutput = help.sum(2,5);
                expect(actualOutput).toBe(expectedOutput)
        })

        it("can find the sum of seven numbers", () => {
            const expectedOutput = 28;
            const actualOutput = help.sum(1,2,3,4,5,6,7);
            expect(actualOutput).toBe(expectedOutput)
    })

    
    })
})