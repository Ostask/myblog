import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home.vue'
import articleList from '@/pages/articleList/articleList.vue'
import article from '@/pages/article/article.vue'
import practice from '@/pages/practice/practice.vue'
import manage from '@/pages/manage/manage.vue'
import articleMng from '@/pages/manage/child/articleMng/articleMng.vue'
import allList from '@/pages/manage/child/articleMng/child/allList.vue'
import list from '@/pages/manage/child/articleMng/child/list.vue'
import articlePublish from '@/pages/manage/child/articlePublish/articlePublish.vue'
import articleType from '@/pages/manage/child/articleType/articleType.vue'
import practiceType from '@/pages/manage/child/practiceType/practiceType.vue'
import practiceMng from '@/pages/manage/child/practiceMng/practiceMng.vue'
import allpraList from '@/pages/manage/child/practiceMng/child/allList.vue'
import pralist from '@/pages/manage/child/practiceMng/child/list.vue'
import practicePublish from '@/pages/manage/child/practicePublish/practicePublish.vue'
import wallMng from '@/pages/manage/child/wallMng/wallMng.vue'
import login from '@/pages/login/login.vue'

import notfound from '@/pages/notfound/notfound.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/articleList',
      name: 'articleList',
      component: articleList
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/practice',
      name: 'practice',
      component: practice
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      redirect: '/manage/articleMng',
      children: [
        {
          path: 'articleMng',
          component: articleMng,
          redirect: 'articleMng/allList',
          children: [
            {
              path: 'allList',
              component: allList
            },
            {
              path: 'list/:type',
              component: list
            }
          ]
        },
        {
          path: 'articlePublish',
          component: articlePublish
        },
        {
          path: 'articleType',
          component: articleType
        },
        {
          path: 'practiceType',
          component: practiceType
        },
        {
          path: 'practiceMng',
          component: practiceMng,
          redirect: 'practiceMng/allpraList',
          children: [
            {
              path: 'allpraList',
              component: allpraList
            },
            {
              path: 'pralist/:type',
              component: pralist
            }
          ]
        },
        {
          path: 'practicePublish',
          component: practicePublish
        },
        {
          path: 'wallMng',
          component: wallMng
        }
      ]
    },
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name: '404',
      path: '/404',
      component: notfound
    },
    {
      path: '*', // 此处需特别注意至于最底部
      redirect: '/404'
    }
  ]
})
