export class Question {

    static operations(index) {
        console.log(`fuck`);
        let operations = [{
            text: '+',
            resolver: (a, b) => {
                return a + b;
            }
        },
        {
            text: '-',
            resolver: (a, b) => {
                return a - b;
            }
        }];

        return operations[index];
    }

    static randomOperation() {
        let i = Math.floor(Math.random() * 2)
        let op = Question.operations(i);
        return op;
    }

    constructor(number1, number2) {
        this.operation = Question.randomOperation()
        this.number1 = number1;
        this.number2 = number2;
        this.text = `What is ${number1} ${this.operation.text} ${number2}?`;
    }

    correctAnswer() {
        return this.operation.resolver(this.number1, this.number2);
    }
}