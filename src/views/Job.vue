<template>
  <div>
    <app-item v-for="job in jobs" :key="job.data.id" class="whitebg media pad" :story="job" ></app-item>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";

export default {
  name: "Job",
  components: {
    appItem: Item
  },
  data() {
    return {
      jobs: this.$store.state.jobStories
    };
  },
  created() {
    // if (this.$store.state.jobStories.length === 0) {
    this.$store.dispatch("FETCH_JOB_STORIES");
    // }
  }
};
</script>
