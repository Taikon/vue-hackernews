<template>
      <article class="whitebg media pad">
      <figure class="media-left">
        <h1 class="title is-5">
          {{story.data.score}}
        </h1>
      </figure>
      <div class="media-content">
        <div class="content">
          <router-link :to="{ path: '/story/' + story.data.id }" class="subtitle" > {{story.data.title}} </router-link>

          <p>
            ( {{story.data.url}} ) 
            <br>
          </p>
          <p><strong>{{story.data.by}}</strong> <small> {{Date(story.data.time)}}</small> | {{story.data.descendants}} Comments </p>
        </div>
      </div>
    </article>

</template>

<script>
export default {
  name: "Item",
  props: ["story"]
};
</script>

<style scoped>
.whitebg {
  background-color: white;
}

.shadow {
  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.1);
}
</style>