const help = require("./helpers")

describe("helper module", () => {
    describe("sum function", () => {
        it("can find the sum of two numbers", () => {
                const expectedOutput = 7;
                const actualOutput = help.sum(2,5);
                expect(actualOutput).toBe(expectedOutput)
        })

        it("can find the sum of three numbers", () => {
            const expectedOutput = 13;
            const actualOutput = help.sum(8,5);
            expect(actualOutput).toBe(expectedOutput)
    })
    })
})