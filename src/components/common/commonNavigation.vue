<!--
 * @Author: iRuxu
 * @Date: 2022-06-20 18:15:00
 * @LastEditTime: 2022-06-20 18:55:40
 * @Description: 公共侧边
-->
<template>
    <div class="m-navigation">
        <div class="m-navigation-logo">
            <img class="u-logo" :src="Logo" alt="深莓智能" />
            <span class="u-title">深莓智能运营管理平台</span>
        </div>
        <ul class="m-navigation-ul">
            <li class="u-item" v-for="item in list" :key="item.value">
                <router-link class="u-txt" :to="{ name: item.value }">
                    <!-- <component class="u-icon" :is="item.icon" /> -->
                    <b class="u-icon">▷</b>
                    <span class="u-label">{{ item.name }}</span>
                </router-link>
            </li>
            <li class="u-item">
                <a class="u-txt" :href="`/erp?__token=${token}`" target="_blank">
                    <b class="u-icon">▷</b>
                    <span class="u-label">ERP管理</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script setup>
import Logo from "@deepberry/common/img/logo.svg";
import { computed } from "vue";
import { deepBerryStore } from "@/store/index";
import { storeToRefs } from "pinia";
//====== 数据 ======
// store
const store = deepBerryStore();
const { role } = storeToRefs(store);

// 初始数据
const companyData = {
    name: "企业管理",
    value: "company",
    icon: "Postcard",
};
const customerData = {
    name: "用户管理",
    value: "customer",
    icon: "User",
};
const equipmentData = {
    name: "设备管理",
    value: "equipment",
    icon: "SetUp",
};

const token = localStorage.getItem("token");

// 权限过滤
const list = computed(() => {
    let arr = [];
    const { company, customer, equipment } = store.roleData;
    role.value.forEach((id) => {
        if (company[id]) arr[0] = companyData;
        if (customer[id]) arr[1] = customerData;
        if (equipment[id]) arr[2] = equipmentData;
    });
    console.log("用户可查看：", ...arr.filter(Boolean).map((item) => item.name));
    return arr.filter(Boolean);
});
</script>

<style lang="less">
@import "@/assets/css/common/navigation.less";
</style>
