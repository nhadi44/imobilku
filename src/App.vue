<template>
    <div v-if="currentRoute === 'admin'">
        <admin-panel>
            <router-view></router-view>
        </admin-panel>
    </div>
    <div v-else>
        <default-layout>
            <router-view></router-view>
        </default-layout>
    </div>
</template>
<script>
import DefaultLayout from "./layouts/default.vue";
import {ref} from "vue";
import AdminPanel from "./layouts/admin-panel.vue";

export default {
    name: "App",
    components: {
        AdminPanel,
        DefaultLayout
    },
    setup() {
        // get path name from vue router
        const pathName = window.location.pathname;

        // get current route
        const currentRoute = ref(pathName);

        // split path name
        const splitPathName = pathName.split("/");

        splitPathName.map((item, index) => {
            if (item === "") {
                splitPathName.splice(index, 1);
            }
        });

        // get current route
        currentRoute.value = splitPathName[0];

        return {
            DefaultLayout,
            currentRoute,
        }
    }
};
</script>