<template>
    <div class="border bg-blue-400 w-1/4 p-3">
     <h1 class="font-bold border-b border-gray-300 text-gray-100">Section Four</h1>
     <p class="text-gray-100">{{displayEnteredName}}</p>
     <p class="text-gray-100">{{displayInputtedEmail}}</p>
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
         displayInputtedEmail(){
            return this.$store.state.inputtedEmail;
        }
    }
}
</script>
<style scoped>

</style>