<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="activeTip" :active="activeTip" router>

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
              <el-submenu :index="item.index">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{item.cateName}}</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"  v-for="itemChild in item.cateChild">
                    <el-menu-item :index="itemChild.index + '?' + item.id + '-' + itemChild.id" :key="item.id + '-' + itemChild.id">{{itemChild.cateName}}</el-menu-item>
                  </template>
                </el-menu-item-group>
              </el-submenu>
          </template>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="background-color: blanchedalmond; text-align: left; font-size: 12px;">
        <el-input v-model="inputActiveTip" placeholder="搜索圈子" style="width: 200px; top: 15%;">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
          <el-button slot="append" icon="el-icon-search" @click="handleActive"></el-button>
        </el-input>
      </el-header>
      <el-main class="grid-content bg-purple">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
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
              index: "1",
              cateName: "傻逼",
              cateChild: [{id: 1,index: '/circle/funnyBitchs',cateName: "傻1"},{id: 2,index: '/circle/funnyBitchs',cateName: "傻2"}]
            },
            {
              id: 2,
              index: "2",
              cateName: "豆腐脑话题",
              cateChild: [{id: 1,index: '/circle/funnyBitchs',cateName: "甜豆腐脑党"},{id: 2,index: '/circle/funnyBitchs',cateName: "咸豆腐脑组织"},{id: 3,index: '/circle/funnyBitchs',cateName: "甜咸兼得的吃瓜组织"}]
            },
            {
              id: 3,
              index: "3",
              cateName: "呆萌"
            },
            {
              id: 4,
              index: "4",
              cateName: "NOS",
              cateChild: [{id: 1,index: '/circle/funnyBitchs',cateName: "智1"}]
            },
            {
              id: 5,
              index: "5",
              cateName: "DPA",
              cateChild: [{id: 1,index: '/circle/funnyBitchs',cateName: "智1"},{id: 2,index: '/circle/funnyBitchs',cateName: "智2"},{id: 3,index: '/circle/funnyBitchs',cateName: "智3"}]
            },
            {
              id: 6,
              index: "6",
              cateName: "SOC",
              cateChild: [{id: 1,index: '/circle/funnyBitchs',cateName: "智1"},{id: 3,index: '/circle/funnyBitchs',cateName: "智3"}]
            },
            {
              id: 7,
              index: '7',
              cateName: "CBA",
              cateChild: [{id: 1,index: '/circle/funnyBitchs',cateName: "智1"},{id: 2,index: '/circle/funnyBitchs',cateName: "智2"},{id: 3,index: '/circle/funnyBitchs',cateName: "智3"}]
            },
            {
              id: 8,
              index: '/circle/ownFollow?textValue=token01',
              cateName: "我关注的"
            }
          ], 
          activeTip: "",
          inputActiveTip: ""
        }
      },
      components: { 
        
      },
      methods: {
        navPage() {
          
        },
        handleActive(v) {
          var _this = this;
          console.log(this.inputActiveTip);
          this.cate1.forEach(element => {
            if (element.cateName.indexOf(this.inputActiveTip) != -1) {
              _this.activeTip = element.index;
              console.log("配置选中:", _this.activeTip);
              _this.$router.push(_this.activeTip);
              return;
            }
          });
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