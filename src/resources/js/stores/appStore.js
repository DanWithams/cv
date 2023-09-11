import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {
    state: () => ({
        darkMode: true
    }),
    actions: {
        toggle() {
            this.darkMode = ! this.darkMode;
        },
    },
});
