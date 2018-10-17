<template>
  <section class="container">
    <div class="whitebg shadow pad">
      <h1> <span class="title">{{story.title}}</span> </h1>
      <p> <small> ( {{story.url}} ) </small> </p>
      <p> {{story.score}} points  |  by {{story.by}}</p>
      <br>
      <h1 class="subtitle is-5"> {{comments.length}} Total Comments </h1>

    </div>
    <div>
      <br>

        <article v-for="comment in comments" :key="comment.id" class="media shadow whitebg pad" >
          <div class="media-content">
            <div class="content">
              <p>
                <strong> {{comment.by}} </strong> <small> {{Date(comment.time)}} </small>
                <br>
                {{comment.text}}
              </p>
            </div>
          </div>
          <hr>
        </article>

    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Single",
  data() {
    return {
      story: {},
      comments: []
    };
  },
  created() {
    axios
      .get(
        "https://hacker-news.firebaseio.com/v0/item/" +
          this.$route.params.id +
          ".json"
      )
      .then(res => {
        this.story = res.data;
        this.story.comments = [];
        this.story.kids.forEach(id => {
          axios
            .get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
            .then(res => {
              this.$nextTick(() => {
                console.log(res.data);
                this.comments.push(res.data);
              });
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
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