<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title text-center">{{ question.text }}</h3>
            <transition enter-active-class="animated rubberBand"
                        leave-active-class="animated fadeOut">
                <h4 class="text-center"
                    v-if="wrongAnswerPressed">WRONG!!!</h4>
            </transition>
        </div>
        <div class="panel-body">
            <div class="col-xs-12 col-sm-6 text-center"
                 v-for="answer in answers"
                 :key="answer">
                <button class="btn btn-primary btn-lg"
                        style="margin: 10px"
                        @click="tryAnswer(answer)">{{ answer }}</button>
            </div>
        </div>
    </div>
</template>

<script >
    import { Question } from '../model/Question';


    export default {
        data: function () {
            return {
                question: null,
                answers: [],
                wrongAnswerPressed: false,
                numOfAnswers: 4
            }
        },
        props: [],
        methods: {
            tryAnswer: function (answer) {
                if (answer === this.question.correctAnswer()) {
                    this.$emit('answerCorrect');
                } else {
                    this.wrongAnswerPressed = true;

                    setTimeout(() => this.wrongAnswerPressed = false, 2000);
                }
            }
        },

        created() {
            //Create random question.
            this.question = new Question(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100));


            for (var index = 0; index < 3; index++) {
                let answerCandidate = Math.floor(Math.random() * 100);
                while (answerCandidate === this.question.correctAnswer() ||
                    this.answers.indexOf(answerCandidate) >= 0) {
                    answerCandidate = Math.floor(Math.random() * 100);
                }
                this.answers.push(answerCandidate);
            }
            // splice in to random position the correct answer
            let i = Math.floor(Math.random() * this.numOfAnswers)
            this.answers.splice(i, 0, this.question.correctAnswer());
        }
    }
</script>


<style lang="scss" scoped>
    .panel-heading {
        h4 {
            background-color: red;
            color: white;
            margin-bottom: 0;
        }
    }
</style>