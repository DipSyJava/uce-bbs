<template>
    <div class="app-container" style="padding:25px;">
        <el-row>
            <el-col :span="16">
                <el-card class="container-card">
                    <el-row>
                        <el-col>
                            <h3>{{subjectTitle}}</h3>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col class="subject-detail-wrap">
                            <div class="subject-detail">admin</div>
                            <div class="subject-detail"><i class="el-icon-view"></i>168</div>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                        <el-col>
                            <div class="subject-content" v-html='subjectContent'>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row type="flex" justify="center" class="subject-operate">
                        <el-col :span="5">
                            <el-button type="success" circle>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-dianzan"></use>
                                </svg>
                            </el-button>
                            <el-button type="danger" circle>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-dislike__easy"></use>
                                </svg>
                            </el-button>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="6" :offset="1">
                <el-row>
                    <el-col>
                        <el-card>
                            <el-row></el-row>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import '../styles/bbs.scss'
    import '../assets/icon/iconfont/iconfont.js'
    export default {
        data() {
            return {
                subjectTitle: '帖子的标题',
                subjectContent: "<h2>这里是帖子主体内容</h2>"
            }
        },
        mounted() {
            console.log(this.$route.query.id);
        },
        watch: {
            '$route': {
                handler(newValue,oldValue){
                    console.log(newValue)
                    console.log(oldValue)
                },
                deep: true
            }
        },
        beforeRouteEnter(to, from, next) {
            next((vm) => {
                // console.log(this);
                // console.log(vm.$route.query.id);
            })
        }
    }
</script>
<style>
    .icon {
        width: 2em;
        height: 2em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .subject-operate {
        margin-top: 25px;
    }
</style>