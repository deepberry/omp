<template>
    <el-table class="m-table" :data="state.data" border row-key="userId" fit style="width: 100%">
        <el-table-column prop="userId" label="用户ID" width="120" />
        <el-table-column label="用户账号" width="180">
            <template #default="scope"> {{ scope.row.accountName || "-" }}</template>
        </el-table-column>
        <el-table-column label="手机号码" width="180">
            <template #default="scope"> {{ scope.row.phoneNum || "-" }}</template>
        </el-table-column>
        <el-table-column prop="orgzName" label="所在企业" />
        <el-table-column prop="status" label="帐号状态" width="120">
            <template #default="scope">
                <span :class="scope.row.status === '禁用' ? 'u-table-disabled' : 'u-table-normal'">
                    {{ scope.row.status === "禁用" ? "已停用" : scope.row.status }}</span
                >
            </template>
        </el-table-column>
        <el-table-column prop="updateAt" label="最近登录" width="240" />
        <el-table-column prop="address" label="操作" width="240" v-if="hasOperate">
            <template #default="scope">
                <div class="u-table-button">
                    <span @click="handelClick(scope.row)" v-if="hasEnabled">{{
                        scope.row.status == "正常" ? "停用" : "启用"
                    }}</span>
                    <el-popconfirm
                        v-if="hasEnabled"
                        title="是否重置密码？"
                        @confirm="handleResetPassword(scope.row.userId)"
                    >
                        <template #reference>
                            <span>重置密码</span>
                        </template>
                    </el-popconfirm>

                    <router-link
                        :to="{ path: `/${label}/details/${scope.row.userId}` }"
                        class="u-table-more"
                        v-if="hasInfo && scope.row.userId"
                        >查看详情
                    </router-link>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>
<script setup>
import { defineProps, defineEmits, watch, reactive, computed } from "vue";
import { deepBerryStore } from "@/store/index";
import { resetPassword } from "@/service/customer";
import { ElNotification } from "element-plus";
//====== 数据 ======
// props
const props = defineProps({
    table: Array,
    label: String,
});
const emit = defineEmits(["toDialog"]);

// store
const store = deepBerryStore();

// 表格data数据
let state = reactive({
    data: [],
});

// 权限判断
// 查看详情权限
const hasInfo = computed(() => store.role.includes(17));
// 启用停用权限 附加 重置密码
const hasEnabled = computed(() => store.role.includes(15));
// 操作权限
const arr = [17, 15];
const hasOperate = computed(() => store.role.map((item) => arr.includes(item)).filter(Boolean).length);

// 监控表格数据
watch(
    props,
    (obj) => {
        state.data = obj.table;
    },
    { deep: true }
);

//====== 交互 ======
// 提交企业id和弹窗类型
function handelClick(row, type) {
    emit("toDialog", { row, type });
}
// 重置密码
function handleResetPassword(id) {
    resetPassword(id).then(() => {
        ElNotification({
            type: "success",
            title: "成功",
            message: `重置密码成功`,
        });
    });
}
</script>
<style lang="less" scoped>
@import "@/assets/css/components/table.less";
</style>
