<template>
  <div>
    <app-item v-for="ask in asks" :key="ask.data.id" :story="ask" class="whitebg media pad"></app-item>
  </div>
</template>

<script>
import Item from "@/components/Item";

export default {
  name: "Ask",
  components: {
    appItem: Item
  },
  data() {
    return {
      asks: this.$store.state.askStories
    };
  },
  created() {
    this.$store.dispatch("FETCH_ASK_STORIES");
  }
};
</script>
