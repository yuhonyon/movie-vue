import Vue from 'vue'
import Router from 'vue-router'
import Index from 'views/index'
import Comment from 'views/comment'
import Cinema from 'views/cinema'
import CinemaDetails from 'views/cinema-details'
import Movie from 'views/movie'
import MovieDetails from 'views/movie-details'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/Cinema',
      name: 'Cinema',
      component: Cinema
    },
    {
      path: '/CinemaDetails',
      name: 'CinemaDetails',
      component: CinemaDetails
    },
    {
      path: '/Movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/MovieDetails/:id',
      name: 'MovieDetails',
      component: MovieDetails
    }
  ]
})
