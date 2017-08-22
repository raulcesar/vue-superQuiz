<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1 class="text-center">The Super Quiz</h1>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <transition enter-active-class="animated rollIn"
                      leave-active-class="animated rollOut"
                      mode="out-in">
            <component :is="state"
                       @answerCorrect="answeredCorrectly"
                       @confirmed="nextQuestion"></component>
          </transition>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import QuestionPanel from './components/questionPanel.vue';
  import SuccessPanel from './components/successPanel.vue';

  export default {
    name: 'app',
    data() {
      return {
        state: 'app-question',
        questions: []
      }
    },
    components: {
      appQuestion: QuestionPanel,
      appSuccess: SuccessPanel
    },
    methods: {
      answeredCorrectly() {
        this.state = 'app-success';
      },
      nextQuestion() {
        this.state = 'app-question';
      }
    }

  }
</script>

<style lang="scss">
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>
