<template>
    <div class="app-container">
        <div class="index-search-wrap">
            <el-form>
                <el-form-item>
                    <el-input v-model="searchKey">
                        <el-button slot="append" icon="el-icon-search">搜索</el-button>
                    </el-input>
                </el-form-item>
            </el-form>
        </div>
        <!-- <div style="border:1px solid red; height:200px; width:600px;" id="editor"> 
                <mavon-editor v-model="value"/>
        </div> -->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                searchKey: 1,
                msg: '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
                value: "testestsetsedtestst"
            }
        },
        component: {
        }
    }
</script>
</script>
<style>
    body {
        background-color: #F1FAFA;
    }

    .index-search-wrap {
        width: 42%;
        margin: 0 auto;
        margin-top:20%;
    }
</style>