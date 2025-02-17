// require('../vendor/fontawesome/js/fontawesome.js');
// require('../vendor/fontawesome/js/solid.js');
import { InertiaApp } from '@inertiajs/inertia-vue';
import Vue from 'vue';
import route from 'ziggy';
import DefaultLayout from './Layouts/Default';
import DefaultTemplate from './Templates/Default';
import DefaultPage from './Pages/Default';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '/app', name: 'app' }],
});

// import { Ziggy } from './ziggy';
// Vue.component('my-component', require('./components/MyComponent.vue'));

Vue.use(InertiaApp);

// Ziggy routing
// Vue.prototype.$route = (...args) => route(...args).url();

const app = document.getElementById('app');

new Vue({
  router,
  render: (h) =>
    h(InertiaApp, {
      props: {
        initialPage: JSON.parse(app.dataset.page),
        resolveComponent: async (name) => {
          const Statamic = window.Statamic || {};

          const LayoutComponent = await import(`./Layouts/${Statamic.layoutName}`)
            .then((module) => module.default)
            .catch(() => DefaultLayout);

          const TemplateComponent = await import(`./Templates/${Statamic.templateName}`)
            .then((module) => module.default)
            .catch(() => DefaultTemplate);

          const PageComponent = import(`./Pages/${name}`)
            .then((module) => {
              module.default.layout = (h, page) => {
                return h(LayoutComponent, [h(TemplateComponent, [page])]);
              };
              return module.default;
            })
            .catch(() => {
              DefaultPage.layout = (h, page) => {
                return h(LayoutComponent, [h(TemplateComponent, [page])]);
              };
              return DefaultPage;
            });

          return PageComponent;
        },
      },
    }),
}).$mount(app);

window.axios = require('axios');

window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
};
