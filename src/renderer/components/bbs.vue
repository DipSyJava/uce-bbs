<template>
    <div class="app-container">
        <el-col class="tabs-wrap" :lg="18">
            <el-tabs type="border-card">
                <el-tab-pane label="最新">
                    <ul>
                        <li v-for="(item, index) in subjects" :key="index">
                            <div class="subject-item">
                                <div class="subject-title-wrap">
                                    <div class="subject-title">{{item.title}}</div>
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
        <el-col class="info-wrap" :lg="5">
            <div class="subject-begin">
                <el-button class="subject-begin-btn" type="primary">我要发帖</el-button>
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
                    title: '六一儿童节快乐',
                    founder: "花前月下",
                    createTime: '3天前',
                    lastTime: new Date(),
                    lastMan: "最后回复的人",
                    lookTimes: 12,
                    reply: 23,
                }, {
                    title: '技术分享帖',
                    founder: "花前月下",
                    createTime: '2019-03-22',
                    lastTime: new Date(),
                    lastMan: "最后回复的人",
                    lookTimes: 12,
                    reply: 106,
                }, {
                    title: '吐槽专帖',
                    founder: "花前月下",
                    createTime: '9天前',
                    lastTime: new Date(),
                    lastMan: "最后回复的人",
                    lookTimes: 12,
                    reply: 120,
                }, {
                    title: '对于***你有什么想说的吗？',
                    founder: "花前月下",
                    createTime: '12天前',
                    lastTime: new Date(),
                    lastMan: "最后回复的人",
                    lookTimes: 12,
                    reply: 10,
                }, {
                    title: '这一顿12块钱，你们有什么想说的吗',
                    founder: "花前月下",
                    createTime: '1小时前',
                    lastTime: new Date(),
                    lastMan: "最后回复的人",
                    lookTimes: 12,
                    reply: 35,
                }, {
                    title: 'I Love You',
                    founder: "花前月下",
                    createTime: '1天前',
                    lastTime: new Date(),
                    lastMan: "最后回复的人",
                    lookTimes: 12,
                    reply: 8,
                }, {
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
    }
</script>
<style>
</style>