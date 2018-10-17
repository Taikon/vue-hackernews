export default {
  APPEND_TOP_STORIES: (state, article) => {   //article refers to the payload
    state.topStories.push(article)
  },
  APPEND_NEW_STORIES: (state, article) => {   //article refers to the payload
    state.newStories.push(article)
  },
  APPEND_JOB_STORIES: (state, article) => {
    state.jobStories.push(article)
  },
  APPEND_ASK_STORIES: (state, article) => {
    state.askStories.push(article)
  },
  APPEND_SHOW_STORIES: (state, payload) => {
    state.showStories.push(payload)
  }
}