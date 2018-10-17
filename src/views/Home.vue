<template>
  <div>
    <app-item v-for="story in stories" :key="story.data.id" class="whitebg media pad" :story="story"></app-item>
  </div>
</template>

<script>
import axios from "axios";
import Item from "@/components/Item";

export default {
  name: "Home",
  data() {
    return {
      err: "",
      stories: this.$store.state.topStories
    };
  },
  components: {
    appItem: Item
  },
  created: function() {
    if (this.$store.state.topStories.length === 0) {
      this.$store.dispatch("FETCH_TOP_STORIES"); //Actions are executed with $store.dispatch("ACTION_NAME")
    }
  }
};
</script>

<style scoped>
.whitebg {
  background-color: white;
}
</style>
