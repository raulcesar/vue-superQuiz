export class Question {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
        this.text = `What is ${number1} + ${number2}?`;
    }

    correctAnswer() {
        return this.number1 + this.number2;
    }
}