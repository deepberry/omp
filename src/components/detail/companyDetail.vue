<template>
    <div class="m-detail m-company-detail" v-loading="state.loading">
        <div class="m-info">
            <span class="u-login" @click="onceLogin('new')">一次性登录(新版)</span>
            <span class="u-login" @click="onceLogin('old')">一次性登录(旧版)</span>
            <div class="m-row" v-for="(item, k) in state.info" :key="k">
                <template v-if="k == 'orgzLogo'">
                    <span class="u-label">{{ toName[k] }}</span>
                    <img :src="getImg(item)" class="u-logo" />
                </template>
                <template v-else-if="k == 'items'">
                    <span class="u-label">{{ toName[k] }}</span>
                    <div class="u-info-items">
                        <div class="u-item" v-for="(user, i) in item" :key="i">
                            <span>状态：{{ user.enabled }}</span>
                            <span>姓名：{{ user.userName || "-" }}</span>
                            <span>用户帐号：{{ user.accountName || "-" }}</span>
                            <span>手机号码：{{ user.phoneNum || "-" }}</span>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <span class="u-label">{{ toName[k] }}</span>
                    <span class="u-value">{{ item || "-" }}</span>
                </template>
            </div>
        </div>
    </div>
</template>
<script setup>
import { getCompanyInfo, loginOrgzOnce } from "@/service/company";
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getCdnLink } from "@deepberry/common/js/utils";
//====== 数据 ======

// 路由传值
const route = useRoute();
const { id } = route.params;
let state = reactive({
    info: {},
    loading: false,
});

// 字段替换中文
const toName = {
    createAt: "创建时间",
    organizationId: "企业ID",
    orgzLogo: "企业LOGO",
    orgzName: "企业名称",
    accountName: "企业主账号",
    phoneNum: "企业负责人手机",
    status: "企业状态",
    contact: "企业负责人",
    items: "企业成员",
};

//====== axios数据 ======

// 初始加载
onMounted(() => {
    state.loading = true;
    getCompanyInfo(id)
        .then((res) => {
            let info = res.data.data;
            delete info.userId;
            state.info = info;
        })
        .finally(() => (state.loading = false));
});
// 一次性登录
function onceLogin(key) {
    loginOrgzOnce(id).then((res) => {
        const token = res.data.data.accessToken;
        const link =
            key == "new"
                ? `https://titan.deepberry.cn/insights/nodes?__token=${token}`
                : `https://io.deepberry.cn/?__token=${token}`;
        window.open(`${link}`, "_blank");
    });
}

function getImg(link) {
    if (!link) return require("../../assets/img/no-logo.png");
    if (link.indexOf("http") !== -1) return link;
    return getCdnLink(link);
}
</script>
