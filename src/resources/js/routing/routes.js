import HomePage from "../vue/pages/HomePage.vue";
import NotFoundPage from "../vue/pages/NotFoundPage.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFoundPage,
        meta: {
            layout: 'PlainLayout',
        },
    },
];

export const createRoutes = () => {
    return routes.map(route => {
        return {
            meta: {},
            ...route,
        };
    });
};
