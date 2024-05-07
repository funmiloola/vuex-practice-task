<template>
  <div id="app">
   <top-section/>
   <first-section/>
   <second-section/>
   <third-section/>
   <fourth-section/>
   <fifth-section/>
  </div>
</template>

<script>
import topSection from "@/components/topSection.vue";
import firstSection from "@/components/firstSection.vue";
import secondSection from "@/components/secondSection.vue";
import thirdSection from "@/components/thirdSection.vue";
import fourthSection from "@/components/fourthSection.vue";
import fifthSection from "@/components/fifthSection.vue";
export default {
  components: {
    topSection,
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
