<template>
  <div>
    <app-item v-for="story in stories" :key="story.data.id" class="whitebg media pad" :story="story"></app-item>
  </div>
</template>

<script>
import axios from "axios";
import Item from "@/components/Item";
export default {
  name: "New",
  components: {
    appItem: Item
  },
  data: function() {
    return {
      err: "",
      stories: this.$store.state.newStories
    };
  },
  created: function() {
    if (this.$store.state.newStories.length === 0) {
      this.$store.dispatch("FETCH_NEW_STORIES");
    }
  }
};
</script>
