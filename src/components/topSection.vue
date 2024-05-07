<template>
    <div>
     <input type="text" placeholder="name" v-model="enteredName" @keyup.enter="updateEnteredName">
     <input type="email" placeholder="email">
     <input type="number" placeholder="age">
    </div>
</template>
<script>


export default {
     data() {
        return{
        }
    },
    computed:{
        enteredName(){
           return this.$store.state.enteredName;
        },
        updateEnteredName(){
            return this.$store.getters.updateEnteredName
        }
    }
}
</script>
<style scoped>

</style>