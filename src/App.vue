<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view class="pad"/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {
    appNavbar: Navbar
  }
};
</script>



<style>
body {
  background-color: #f2f3f5;
}
.pad {
  padding: 2rem;
}

.whitebg {
  background-color: white;
}

.shadow {
  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.1);
}
</style>
