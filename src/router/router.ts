import { PAGES } from '@/router/pages';

export default [
  {
    path: '/',
    name: PAGES.TOP,
    component: () => import('@/components/HelloWorld.vue'),
    meta: { title: 'TOP', saveScroll: false },
    props: true,
  },
  {
    path: '/film',
    name: PAGES.FILM,
    component: () => import('@/components/pages/FilmView.vue'),
    meta: { title: 'FILM', saveScroll: false },
    props: true,
  },
  {
    path: '/pg',
    name: PAGES.PLAYGROUND,
    component: () => import('@/components/pages/PlaygroundView.vue'),
    meta: { title: 'PLAYGROUND', saveScroll: false },
    props: true,
  },
];
