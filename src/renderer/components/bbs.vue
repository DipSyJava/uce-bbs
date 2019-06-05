<template>
    <div class="app-container">
        <el-col class="tabs-wrap" :sm="16" :md="18">
            <el-tabs type="border-card">
                <el-tab-pane label="最新">
                    <ul>
                        <li v-for="(item, index) in subjects" :key="index">
                            <div class="subject-item">
                                <div class="subject-title-wrap">
                                    <router-link :to="{path:'/subject',query:{id:item.id}}">
                                        <div class="subject-title">{{item.title}}</div>
                                    </router-link>
                                </div>
                                <div class="subject-detail-wrap">
                                    <span class="subject-founder subject-detail">{{item.founder}}</span>
                                    <span class="subject-createTime subject-detail">{{item.createTime}}</span>
                                    <span class="subject-reply">回复：{{item.reply}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="最热">
                    Test
                </el-tab-pane>
            </el-tabs>
        </el-col>
        <el-col class="info-wrap" :sm="8" :md="6">
            <div class="subject-begin">
                <router-link to="/fatie">
                    <el-button class="subject-begin-btn" type="primary">我要发帖</el-button>
                </router-link>
            </div>
            <div class="user-info">
                这里是User信息
            </div>
        </el-col>
    </div>
</template>
<script>
    import '../styles/bbs.scss'
    export default {
        data() {
            return {
                subjects: [{
                    id: 1,
                    title: '六一儿童节快乐',
                    founder: "花前月下",
                    createTime: '3天前',
                    lastTime: new Date(),
                    lastMan: "最后回复的人",
                    lookTimes: 12,
                    reply: 23,
                }, {
                    id: 2,
                    title: '技术分享帖',
                    founder: "花前月下",
                    createTime: '2019-03-22',
                    lastTime: new Date(),
                    lastMan: "最后回复的人",
                    lookTimes: 12,
                    reply: 106,
                }, {
                    id: 3,
                    title: '吐槽专帖',
                    founder: "花前月下",
                    createTime: '9天前',
                    lastTime: new Date(),
                    lastMan: "最后回复的人",
                    lookTimes: 12,
                    reply: 120,
                }, {
                    id: 4,
                    title: '对于***你有什么想说的吗？',
                    founder: "花前月下",
                    createTime: '12天前',
                    lastTime: new Date(),
                    lastMan: "最后回复的人",
                    lookTimes: 12,
                    reply: 10,
                }, {
                    id: 5,
                    title: '这一顿12块钱，你们有什么想说的吗',
                    founder: "花前月下",
                    createTime: '1小时前',
                    lastTime: new Date(),
                    lastMan: "最后回复的人",
                    lookTimes: 12,
                    reply: 35,
                }, {
                    id: 6,
                    title: 'I Love You',
                    founder: "花前月下",
                    createTime: '1天前',
                    lastTime: new Date(),
                    lastMan: "最后回复的人",
                    lookTimes: 12,
                    reply: 8,
                }, {
                    id: 7,
                    title: '有什么好的电视剧推荐一下',
                    founder: "花前月下",
                    createTime: '3分钟前',
                    lastTime: new Date(),
                    lastMan: "最后回复的人",
                    lookTimes: 12,
                    reply: 0,
                }]
            }
        },
        mounted(){
            let testValue = this.$route.query.testValue
            console.log(testValue);
        },
        watch: {
            '$route':{
                handler(newValue,oldValue){
                    // console.log(newValue);
                    // console.log(123)
                }
            }
        },
        beforeRouteUpdate(to,from,next){
            console.log(to);
            console.log(from)
            next();
        }
    }
</script>
<style>
</style>