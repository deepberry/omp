<template>
    <div class="m-detail m-customer-detail" v-loading="state.loading">
        <div class="m-info">
            <div class="m-row m-row-user">
                <img class="u-info-avatar" :src="state.data.avatar" :alt="state.data.name" />{{
                    state.data.name || "-"
                }}
            </div>
            <div class="m-row">
                <span class="u-label">userId</span>
                <span class="u-value">{{ state.data.userId || "-" }}</span>
            </div>
            <div class="m-row">
                <span class="u-label">手机</span>
                <span class="u-value">{{ state.data.mobile || "-" }}</span>
            </div>
            <div class="m-row">
                <span class="u-label">邮箱</span>
                <span class="u-value">{{ state.data.email || "-" }}</span>
            </div>
            <div class="m-row">
                <span class="u-label">创建时间</span>
                <span class="u-value">{{ state.data.updatedAt || "-" }}</span>
            </div>
            <div class="m-row">
                <span class="u-label">账号状态</span>
                <span class="u-value">{{ state.data.disabled == "0" ? "正常" : "停用" }}</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { getWorkUser, getUserPermission, getUserLogin } from "@/service/index";
import { onMounted, reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import { deepBerryStore } from "@/store";

//====== 数据 ======
// 数据
let state = reactive({
    data: {},
    loading: false,
});
const store = deepBerryStore();
let { role } = storeToRefs(store);

// 获取code数据
const code = ref(document.location.search.split("&")[0]);

//======  axios ======
// 初始加载

onMounted(() => {
    state.loading = true;
    let token = localStorage.getItem("token");
    if (token) {
        if (token.indexOf("Bearer") !== -1) {
            token = token.split("Bearer ")[1];
            localStorage.setItem("token", token);
        }

        getWorkUser()
            .then((res) => {
                state.data = res.data.data;
                console.log("获取个人信息：", state.data);
                getUserPermission(res.data.data.userId).then((res) => {
                    role = res.data.data;
                    store.role = role;
                    console.log("获取权限：", role);
                });
            })
            .catch(() => {
                localStorage.removeItem("token");
                location.reload();
            })
            .finally(() => {
                state.loading = false;
            });
    } else {
        getUserLogin(code.value)
            .then((res) => {
                const _code = res.data.data.accessToken;
                localStorage.setItem("token", _code);
                location.reload();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                state.loading = false;
            });
    }
});
</script>
