<template>
  <el-row>
    <el-col :span="6">
      <el-menu default-active="1-1" router>

        <template v-for="item in cate1">
          <!--没有子标签-->
          <template v-if="item.cateChild == undefined || item.cateChild.length == 0">
              <el-menu-item :index="item.index">
                <i class="el-icon-setting"></i>
                <span slot="title">{{item.cateName}}</span>
              </el-menu-item>
          </template>
          <!--有子标签-->
          <template v-else>
              <el-submenu :index="item.id">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{item.cateName}}</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"  v-for="itemChild in item.cateChild">
                    <el-menu-item :index="item.id + '-' + itemChild.id" :key="index">{{itemChild.cateName}}</el-menu-item>
                  </template>
                </el-menu-item-group>
              </el-submenu>
          </template>
        </template>
      </el-menu>
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple">
        <router-view></router-view>
      </div>
    </el-col>
  </el-row>
</template>

<script>
    export default {
      created: function() {
        console.log("created");
      },
      mounted: function() {
        console.log("mounted");
      },
      data() {
        return {
          cate1: [
            {
              id: 1,
              index: 1,
              cateName: "傻逼",
              cateChild: [{id: 1,index: '/circle/activeTest1',cateName: "傻1"},{id: 2,index: '/circle/activeTest1',cateName: "傻2"},{id: 3,index: '/circle/activeTest1',cateName: "傻3"}]
            },
            {
              id: 2,
              index: 2,
              cateName: "豆腐脑话题",
              cateChild: [{id: 1,index: '/circle/activeTest1',cateName: "甜豆腐脑党"},{id: 2,index: '/circle/activeTest1',cateName: "咸豆腐脑组织"},{id: 3,index: '/circle/activeTest1',cateName: "甜咸兼得的吃瓜组织"}]
            },
            {
              id: 3,
              index: 3,
              cateName: "呆萌"
            },
            {
              id: 4,
              index: 4,
              cateName: "NOS",
              cateChild: [{id: 1,index: '/circle/activeTest1',cateName: "智1"},{id: 2,index: '/circle/activeTest1',cateName: "智2"},{id: 3,index: '/circle/activeTest1',cateName: "智3"}]
            },
            {
              id: 5,
              index: 5,
              cateName: "DPA",
              cateChild: [{id: 1,index: '/circle/activeTest1',cateName: "智1"},{id: 2,index: '/circle/activeTest1',cateName: "智2"},{id: 3,index: '/circle/activeTest1',cateName: "智3"}]
            },
            {
              id: 6,
              index: 6,
              cateName: "SOC",
              cateChild: [{id: 1,index: '/circle/activeTest1',cateName: "智1"},{id: 2,index: '/circle/activeTest1',cateName: "智2"},{id: 3,index: '/circle/activeTest1',cateName: "智3"}]
            },
            {
              id: 7,
              cateName: "CBA",
              cateChild: [{id: 1,index: '/circle/activeTest1',cateName: "智1"},{id: 2,index: '/circle/activeTest1',cateName: "智2"},{id: 3,index: '/circle/activeTest1',cateName: "智3"}]
            },
            {
              id: 8,
              index: '/circle/ownFollow?textValue=token01',
              cateName: "我关注的"
            }
          ]
        }
      },
      components: { 
        
      },
      methods: {
        navPage () {
          
        },
        handleOpen(key, keyPath) {
          console.log("open", key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log("close", key, keyPath);
        }
      }
    }
  </script>