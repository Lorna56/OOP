
  
  import { assert } from "chai";
  import { multiply } from "../multiply.js";
  
  
  describe("Testing multiplication on the first cycle", () => {
    it("Should multiply two values", () => {
      assert.equal(multiply(2, 1), 2);
    });
  });
  

  describe("Testing multiplication on a second cycle", () => {
    it("Should multiply two values", () => {
      assert.equal(multiply(2, 2), 4);
    });
  });
  
  
 