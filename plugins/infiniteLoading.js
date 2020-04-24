import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading'
import NoMoreComponent from '../components/infiniteLoading/NoMore.vue'
import NoResultsComponent from '../components/infiniteLoading/NoResults.vue'
import ErrorComponent from '../components/infiniteLoading/Error.vue'

Vue.use(InfiniteLoading, {
  slots: {
    noMore: NoMoreComponent,
    noResults: NoResultsComponent,
    error: ErrorComponent
  }
})
