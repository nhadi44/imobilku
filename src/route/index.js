import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
import JualMobil from "../pages/JualMobil.vue"
import Dashboard from "../pages/admin-panel/Dashboard.vue"
import favicon from "../assets/icons/favicon.ico"

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: 'Homepage',
        }
    },
    {
        path: '/about', component: About,
        meta: {
            title: 'About',
        }
    },
    {
        path: '/jual-mobil', component: JualMobil,
        meta: {
            title: 'Jual Mobil',
        }
    },
    // create 404 page
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        meta: {
            title: '404 Not Found',
        },
        component: () => import("../pages/NotFound.vue")
    },
    // admin panel
    {
        path: "/admin",
        children: [
            {
                path: "dashboard",
                component: Dashboard,
                meta: {
                    title: 'Admin Panel - Dashboard',
                }
            }
        ],
    }
]


export default routes
