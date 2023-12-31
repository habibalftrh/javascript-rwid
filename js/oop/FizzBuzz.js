import { parseNumber } from "../helper.js";

export class FizzBuzz {
  /** @type {number} */
  sequence;

  /**
   * @param {number} sequence
   */
  constructor(sequence) {
    this.sequence = parseNumber(sequence);
  }

  // write your code here
  generateFizzBuzz(sequence = this.sequence) {
    let result = [];

    for (let index = 1; index <= sequence; index++) {
      if (index % 4 == 0 || index % 7 == 0) {
        result.push("fizz buzz");
      } else if (index % 2 == 1) {
        result.push("fizz");
      } else if (index % 2 == 0) {
        result.push("buzz");
      }
    }
    return result;
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;

    const resultObj = new FizzBuzz(sequence);

    const result = resultObj.generateFizzBuzz();

    document.getElementById("result").textContent = JSON.stringify(result);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
