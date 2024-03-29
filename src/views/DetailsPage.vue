<template>
    <div class="m-details v-page">
        <!-- tab切换 -->
        <el-tabs v-model="activeName" class="m-tabs">
            <el-tab-pane :label="`${key_name}信息`" name="info"></el-tab-pane>
            <el-tab-pane :label="`${key_name}操作日志`" name="logs" v-if="hasLogs"></el-tab-pane>
            <el-tab-pane label="节点属性" name="node" v-if="hasNode"></el-tab-pane>
        </el-tabs>
        <component :is="state.component" :type="type" :data="state.data"></component>
        <commonPagination v-if="hasLogs" :pagination="state.pagination" />
    </div>
</template>
<script setup>
import { reactive, markRaw, toRaw, ref, watch } from "vue";
import { deepBerryStore } from "@/store/index";
import { useRoute, useRouter } from "vue-router";
import companyDetail from "@/components/detail/companyDetail.vue";
import customerDetail from "@/components/detail/customerDetail.vue";
import equipmentDetail from "@/components/detail/equipmentDetail.vue";
import roleDetail from "@/components/detail/roleDetail.vue";
import nodeDetail from "@/components/detail/nodeDetail.vue";
import commonLogs from "@/components/detail/commonLogs.vue";

import { getEquipmentLogs } from "@/service/equipment";

const store = deepBerryStore();
const route = useRoute();
const router = reactive(useRouter());
const { type, id } = toRaw(route).params.value;
const key_name = ref(store.data[type]?.key_name);

// tabs切换name
const activeName = ref("info");
const routeType = ref(type);

// 自定义数据
const state = reactive({
    pagination: {
        page: 1,
        per: 20,
        total: 0,
    },

    data: [],
    component_name: "commonLogs",
    component: null,

    params: {
        PageNumber: 1,
        PageSize: 10,
        deviceId: id,
    },
});

// 动态组件
const myComponent = reactive({
    companyDetail: markRaw(companyDetail),
    customerDetail: markRaw(customerDetail),
    equipmentDetail: markRaw(equipmentDetail),
    roleDetail: markRaw(roleDetail),
    commonLogs: markRaw(commonLogs),
    nodeDetail: markRaw(nodeDetail),
});

// 是否有记录日志
const hasLogs = ref(true);

// 是否有节点属性
const hasNode = ref(false);

// 获取设备日志
const equipmentLogs = () => {
    hasLogs.value = true;
    hasNode.value = true;
    getEquipmentLogs(state.params).then((res) => {
        state.data = res.data.data.datas;
    });
};

// 监控tab切换组件
watch(
    activeName,
    (val) => {
        if (val == "node") {
            state.component_name = ref(`nodeDetail`);
        } else {
            state.component_name = val == "logs" ? ref("commonLogs") : ref(`${routeType.value}Detail`);
        }

        state.component = myComponent[state.component_name];
    },
    { deep: true, immediate: true }
);
watch(
    router,
    (val) => {
        // 是否显示日志tab
        // hasLogs.value = true;
        hasLogs.value = false;
        activeName.value = "info";

        const _type = val.currentRoute.params.type;
        routeType.value = _type;

        if (_type == "company" || _type == "role") hasLogs.value = false;
        if (_type == "role") key_name.value = "账号";
        if (_type == "equipment") equipmentLogs();

        state.component_name = ref(`${_type}Detail`);
        state.component = myComponent[state.component_name];
    },
    { deep: true, immediate: true }
);
</script>
<style lang="less">
@import "@/assets/css/views/details.less";
</style>
