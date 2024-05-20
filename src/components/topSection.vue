<template>
    <div class="flex flex-col gap-4 pt-4 pl-8">
     <input type="text" placeholder="Name" v-model="enteredName" @keyup.enter="updateEnteredName" class="w-1/2 border border-blue-400 outline-none pl-1">
     <input type="email" placeholder="Email" v-model="inputtedEmail" @keyup.enter="updateInputtedEmail" class="w-1/2 border border-blue-400 outline-none pl-1">
     <input type="text" placeholder="Age" v-model="inputtedAge" @keyup.enter="updateInputtedAge" class="w-1/2 border border-blue-400 outline-none pl-1">
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
     data() {
        return{
            enteredName:"",
            inputtedAge:"",
            inputtedEmail:""
        }
    },
    methods:{
        ...mapMutations([
            'setDisplayName',
            'setInputtedAge',
            'setInputtedEmail'
        ]),
        updateEnteredName(){
            this.setDisplayName(this.enteredName);
        },
        updateInputtedAge(){
            this.setInputtedAge(this.inputtedAge);
        },
        updateInputtedEmail(){
            return this.setInputtedEmail(this.inputtedEmail);
        }
    }
}
</script>
<style scoped>

</style>