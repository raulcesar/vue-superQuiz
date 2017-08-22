<template>
    <div class="alert alert-success text-center">
        <h1>That's Correct!</h1>
        <hr>
        <button class="btn btn-primary" @click="nextQuestion">Next Question</button>
    </div>
</template>
<style>

</style>
<script>
    export default{
        methods: {
            nextQuestion() {
                this.$emit('confirmed');
            }
        }
    }
</script>