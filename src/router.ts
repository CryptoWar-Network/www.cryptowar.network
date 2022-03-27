import { createRouter, createWebHistory } from 'vue-router';


const history = createWebHistory();

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import("./pages/Home.vue"),
    children: [

    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("./pages/About.vue")
  },
  {
    path: '/help',
    name: 'help',
    component: () => import("./pages/Help.vue")
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import("./pages/Privacy.vue")
  },
  {
    path: '/',
    name: 'landing-page',
    component: () => import("./pages/Home.vue")
  },
  {
    path: '/airdrop',
    name: 'airdrop',
    component: () => import("./pages/Airdrop.vue")
  },
  {
    path: '/buy',
    name: 'buy-xblade',
    component: () => import("./pages/FairDistribution.vue")
  },
  {
    path: '/announcement',
    name: 'announcement',
    component: () => import("./pages/Announcement.vue")
  }
];
const router = createRouter({ history, routes });
export default router;