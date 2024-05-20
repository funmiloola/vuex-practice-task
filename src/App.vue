<template>
  <div id="app">
   <top-section/>
   <div class="flex items-center justify-center gap-6 pt-8">   
   <first-section/>
   <second-section/>
   <third-section/>
   </div>
   <div class="flex items-center justify-center gap-8 pt-8">
   <fourth-section/>
   <fifth-section/>
   </div>
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

</style>
