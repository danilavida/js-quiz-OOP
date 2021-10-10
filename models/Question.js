export class Question {
  /**
   * 
   * @param {string} text this is text of the question 
   * @param {string[]} choices this are choices of the question 
   * @param {string} answer this is the correct answer 
   */
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  /**
   * 
   * @param {string} choices some text to guess 
   * @returns {boolean} return true if the answer is correct   */
  correctAnswer(choices) {
    return choices === this.answer
  }
}

