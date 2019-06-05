<template>
    <div class="app-container">
        <el-row>
            <el-col>
                <router-link to="/bbs"><el-link type="primary">返回</el-link></router-link>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="18">
                <el-row>
                    <el-col>
                        <el-input v-model="subjectTitle" placeholder="主题"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-button @click="toggleEditor()">使用富文本编辑器</el-button>
                        <el-button @click="toggleEditor()">使用markdown</el-button>
                        <el-button @click="testHeight()">测试</el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-tag type="info">dubbo</el-tag>
                        <el-tag type="info">redis</el-tag>
                        <el-tag type="info">es</el-tag>
                        <el-tag type="info">zk</el-tag>
                        <el-tag type="info">SSO</el-tag>
                        <el-tag type="info">Spring</el-tag>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <div class="editor-wrap">
                            <mavon-editor ref="test1" v-model="value" v-if="showMarkdown" style="height:100%" @save="test()"/>
                            <vue-ueditor-wrap ref="test2" v-model="value" v-else-if="showUE" @ready="ready"
                                :config="myConfig"></vue-ueditor-wrap>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-button type="primary" style="float:right;">我要发表</el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                ueditor: null,
                showMarkdown: false,
                showUE: true,
                value: '这里输入内容',
                subjectTitle: '',
                myConfig: {
                    initialFrameHeight: 360
                }
            }
        },
        mounted() {
            // this.$refs.test2.editor.setHeight(300);
        },
        beforeDestroy(){
        },
        methods: {
            ready(editor) {
                this.ueditor = editor;
            },
            toggleEditor() {
                if (this.showUE) {
                    this.showMarkdown = true,
                        this.showUE = false;
                } else {
                    this.showMarkdown = false;
                    this.showUE = true;
                }
            },
            testHeight() {
                this.ueditor.setContent("我我哦我我我我我我我");
            }
        },
        components: {
            // UEditor
        }
    }
</script>
<style scoped>
    .app-container {
        padding: 15px;
    }

    .el-row {
        margin-bottom: 10px;
    }

    .editor-wrap {
        height: 420px;
    }
    /* .el-row{
        border:1px solid red;
    }

    .el-col{
        border:1px solid green;
    } */
</style>