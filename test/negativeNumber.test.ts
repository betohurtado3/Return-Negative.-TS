import {describe, it, expect} from "@jest/globals";
import {negate} from  "../src/negativeNumber";

describe("Test a function that receive a number and convert an negative one", () => {
    it("Should return -1 for receive 1", () => {
        expect(negate(15)).toBe(-15);
    });
});