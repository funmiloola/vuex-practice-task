<template>
    <div class="border bg-blue-400 w-1/4 p-3">
     <h1 class="font-bold border-b border-gray-300 text-gray-100 ">Section One</h1>
    <p class="text-gray-100">{{displayEnteredName}}</p>
    <p class="text-gray-100">{{displayInputtedAge}}</p>
    </div>
</template>
<script>


export default {
     data() {
        return{

        }
    },
    computed:{
        displayEnteredName(){
            return this.$store.state.enteredName;
        },
        displayInputtedAge(){
            return this.$store.state.inputtedAge;
        }
    }
}
</script>
<style scoped>

</style>