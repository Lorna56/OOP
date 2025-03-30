

import {assert} from "chai";
import { multiply } from "../multiply.js";

describe("Testing multiplication second cycle", () => {
    it("Should multiply two values", () => {
      assert.equal(multiply(2, 2), 4);
    });
  });
 