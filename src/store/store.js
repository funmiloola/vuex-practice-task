import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        enteredName: '',
        inputtedAge: '',
        inputtedEmail:''
        
    },
    mutations: {
        setDisplayName(state,name) {
            return state.enteredName = name;
        },
        setInputtedAge(state, age) {
            return state.inputtedAge = age;
        },
        setInputtedEmail(state, email) {
            return state.inputtedEmail = email;
        },
        setDeleteName(state) {
            return state.enteredName = '';
        },
        setDeleteAge(state) {
            return state.inputtedAge = '';
        },
        setDeleteMail(state) {
            state.inputtedEmail = '';
        }
    }
})