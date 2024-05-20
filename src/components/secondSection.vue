<template>
  <div class="border bg-blue-400 w-1/4 p-3">
  <h1 class="font-bold border-b border-gray-300 text-gray-100">Section Two</h1>
    <div class="flex items-center justify-between pt-2">
      <p class="text-gray-100">{{ displayEnteredName }}</p>
      <button v-if="showButton" @click="deleteName()" class="text-blue-400 border bg-gray-100 px-2">Delete</button>
    </div>
    <div  class="flex items-center justify-between pt-2">
      <p class="text-gray-100">{{ displayInputtedAge }}</p>
      <button v-if="showButtonTwo" @click="deleteAge()"  class="text-blue-400 border bg-gray-100 px-2">Delete</button>
    </div>
    <div class="flex items-center justify-between pt-2">
      <p class="text-gray-100">{{ displayInputtedEmail }}</p>
       <button v-if="showButtonThree" @click="deleteMail()"  class="text-blue-400 border bg-gray-100 px-2">Delete</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
     
    };
  },
  computed: {
    displayEnteredName() {
      return this.$store.state.enteredName;
    },
    displayInputtedAge() {
      return this.$store.state.inputtedAge;
    },
    displayInputtedEmail() {
      return this.$store.state.inputtedEmail;
    },
    showButton() {
      return this.$store.state.enteredName !== '';
  },
  showButtonTwo(){
    return this.$store.state.inputtedAge !== '';
  },
  showButtonThree(){
    return this.$store.state.inputtedEmail !=='';
  }
},
 methods:{
    deleteName(){
        return this.$store.commit('setDeleteName');
    },
    deleteAge(){
        return this.$store.commit('setDeleteAge');
    },
    deleteMail(){
        return this.$store.commit('setDeleteMail');
    }
  }
};
</script>
<style scoped>
</style>