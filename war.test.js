let expect = chai.expect;

describe("War Game Tests", () => {
  describe("", () => {
    it("Should return a number", () => {
      let num1 = 3;
      let num2 = 2;
      expect(sumNums(num1, num2)).to.be.a("number");
    });
  });
});
