<template>
    <div>
        <!-- Offcanvas Toggle Button -->
        <button @click="toggleOffcanvas" class="p-2 bg-transparent">
            <img :src="menu" alt="asdasd" class="w-6 h-6"/>
        </button>

        <div :class="{'translate-x-0':isOpen, '-translate-x-full': !isOpen }"
             class="fixed bg-slate-500 opacity-50 h-full top-0 w-full transition-transform transform duration-75"
             @click="closeOffcanvas"></div>

        <!-- Offcanvas Menu -->
        <div :class="{ 'translate-x-0': isOpen, '-translate-x-full': !isOpen }"
             class="fixed top-0 left-0 h-full w-64 bg-white overflow-y-auto shadow-lg transition-transform transform duration-300">
            <!-- Offcanvas Content -->
            <div class="p-4">
                <h2 class="text-2xl font-semibold mb-4">Offcanvas Menu</h2>
                <!-- Your menu items here -->
                <ul>
                    <li class="mb-2">Item 1</li>
                    <li class="mb-2">Item 2</li>
                    <li class="mb-2">Item 3</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
import menu from "../assets/icons/menu.svg";

export default {
    name: "Offcanvas",
    setup() {
        const isOpen = ref(false);

        const toggleOffcanvas = () => {
            isOpen.value = !isOpen.value;
        };

        const closeOffcanvas = () => {
            isOpen.value = false;
        };

        return {
            isOpen,
            toggleOffcanvas,
            closeOffcanvas,
            menu
        };
    },
};
</script>