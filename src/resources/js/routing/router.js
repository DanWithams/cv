import {createRouter, createWebHistory} from "vue-router";
import {createRoutes} from "./routes";

const router = createRouter({
    history: createWebHistory(),
    routes: createRoutes(),
});

router.beforeEach(async (to, from, next) => {
    const { meta = {} } = to;

    await Promise.all((meta.middleware || []).map(m => m(to, from, next)))
        .then(() => {
            next(true)
        })
        .catch(next => {
            next(false)
        });
});


export default router;
