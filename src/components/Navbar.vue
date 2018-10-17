<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link :to="{name:'Home'}" class="navbar-item">
      <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28">
    </router-link>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link :to="{name:'Home'}" class="navbar-item">
        Top
      </router-link>

      <router-link :to="{name:'New'}" class="navbar-item">
        News
      </router-link>

      <router-link :to="{name:'Show'}" class="navbar-item">
        Show
      </router-link>

      <router-link :to="{name:'Ask'}" class="navbar-item">
        Ask
      </router-link>

      <router-link :to="{name:'Job'}" class="navbar-item">
        Jobs
      </router-link>

    </div>

    <div class="navbar-end">
      <a class="navbar-item">
        Built by da5id
      </a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

