import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage';
import StringEnter from './components/StringEnter';
import ResultPage from './components/ResultPage'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: HomePage
      },
      {
        path: '/string',
        component: StringEnter
      },
      {
        path: '/result',
        component: ResultPage
      }
    ],
  });
  
  export default router;