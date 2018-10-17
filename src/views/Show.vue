<template>
  <div>
    <app-item v-for="show in shows" :key="show.data.id" :story="show" class="whitebg media pad" ></app-item>
  </div>
</template>

<script>
import Item from "@/components/Item";

export default {
  name: "Show",
  components: {
    appItem: Item
  },
  data() {
    return {
      shows: this.$store.state.showStories
    };
  },
  created() {
    this.$store.dispatch("FETCH_SHOW_STORIES");
  }
};
</script>
