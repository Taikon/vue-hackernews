import axios from 'axios'

export default {
  FETCH_TOP_STORIES: ({ commit }) => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(result => {
        let results = result.data.slice(0, 25);
        results.forEach(element => {
          axios
            .get(
              "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(result => {
              commit('APPEND_TOP_STORIES', result);
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  FETCH_NEW_STORIES: ({ commit }) => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/newstories.json")
      .then(result => {
        let results = result.data.slice(0, 25);
        results.forEach(element => {
          axios
            .get(
              "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(result => {
              commit('APPEND_NEW_STORIES', result);
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  FETCH_JOB_STORIES: ({ commit }) => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/jobstories.json")
      .then(result => {
        let results = result.data.slice(0, 25);
        results.forEach(element => {
          axios
            .get(
              "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(result => {
              commit('APPEND_JOB_STORIES', result);
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  FETCH_ASK_STORIES: ({ commit }) => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/askstories.json")
      .then(result => {
        let results = result.data.slice(0, 25);
        results.forEach(element => {
          axios
            .get(
              "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(result => {
              commit('APPEND_ASK_STORIES', result);
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  FETCH_SHOW_STORIES: ({ commit }) => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/showstories.json")
      .then(result => {
        let results = result.data.slice(0, 25);
        results.forEach(element => {
          axios
            .get(
              "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(result => {
              commit('APPEND_SHOW_STORIES', result);
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
}

