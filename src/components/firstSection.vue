<template>
    <div>
    <h1>{{displayEnteredName}}</h1>
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
            return this.$store.state.displayedEnteredName;
        }
    }
}
</script>
<style scoped>

</style>