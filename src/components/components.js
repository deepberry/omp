import searchBar from "@/components/searchBar.vue";
import pagination from "@/components/paginationPage.vue";

export default {
    install: function (Vue) {
        Vue.component("search-bar", searchBar);
        Vue.component("common-pagination", pagination);
    },
};