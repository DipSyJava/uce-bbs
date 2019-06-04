<template>
    <div class="app-container">
        <el-row>
            <el-col>
                <el-input></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <div class="editor-wrap">
                    <mavon-editor v-model="value" />
                    <vue-ueditor-wrap v-model="value"></vue-ueditor-wrap>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value: '这里输入内容',

            }
        },
    }
</script>
<style scoped>
    .app-container {
        padding: 15px;
    }

    .el-row {
        margin-bottom: 50px;
    }

    .editor-wrap{
        border:1px solid red;
    }
</style>