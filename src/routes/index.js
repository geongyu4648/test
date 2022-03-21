import Vue from "vue"
import VueRouter from "vue-router"
import NewsView from "../Views/NewsView.vue"
import AsksView from "../Views/AskView.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/news',
            component: NewsView
        },
        {
            path: '/ask',
            component: AsksView
        }
    ]
})