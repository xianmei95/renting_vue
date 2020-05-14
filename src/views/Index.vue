<template>
  <div>
    <mt-tab-container v-model="selectedTab">
      <mt-tab-container-item id="home">
        <!-- 头部 -->
        <header>
          <!-- 顶部导航 -->
            <mt-header title="乐租---想租房，上乐租"></mt-header>
        </header>
        <!-- 主体 -->
        <main>
            <!-- 顶部选项卡 -->
            <mt-navbar v-model="selectedNav" :fixed="fixed" class="top-navbar">
                <mt-tab-item id="recommend">推荐</mt-tab-item>
                <mt-tab-item id="whole">整租</mt-tab-item>
                <mt-tab-item id="joint">合租</mt-tab-item>
                <mt-tab-item id="personal">个人房源</mt-tab-item>
                <mt-tab-item id="agent">中介房源</mt-tab-item>
            </mt-navbar>
            <!-- 房源信息 -->
            <div class="content"
              v-infinite-scroll="loadMore"
              infinite-scroll-distance="10"
              infinite-scroll-disabled="busy"
            >
              <div class="position">
                <img src="../assets/images/position.png" alt="">
                历城区
              </div>
              <router-link v-for="(item,index) of data" :to="`/renting/${item.id}`" :key="index">
                <img :src="item.images.split(',')[0]" alt="">
                <div class="des">
                  <p class="room">户型：{{item.room}}</p>
                  <p class="com">{{item.info_community}}</p>
                  <p class="pay">￥{{item.info_price}}/月 {{item.pay_type}}</p>
                  <p class="link">
                    <img src="../assets/images/link.jpg" alt="">
                    <span>联系人{{item.link_person}}</span>
                  </p>
                </div>
              </router-link>
            </div>
        </main>
      </mt-tab-container-item>
      <mt-tab-container-item id="info">
        <info/>
      </mt-tab-container-item>
      <mt-tab-container-item id="mine">
        <login/>
      </mt-tab-container-item>
    </mt-tab-container>
        <footer>
          <mt-tabbar v-model="selectedTab" fixed>
            <mt-tab-item id="home">
              <img slot="icon" src="../assets/images/home_able.png" v-show="selectedTab=='home'">
              <img slot="icon" src="../assets/images/home_disable.png" v-show="selectedTab!='home'">
              主页
            </mt-tab-item>
            <mt-tab-item id="info">
              <img slot="icon" src="../assets/images/info_able.png" v-show="selectedTab=='info'">
              <img slot="icon" src="../assets/images/info_disable.png" v-show="selectedTab!='info'">
              消息
            </mt-tab-item>
            <mt-tab-item id="mine">
              <img slot="icon" src="../assets/images/mine_able.png" v-show="selectedTab=='mine'">
              <img slot="icon" src="../assets/images/mine_disable.png" v-show="selectedTab!='mine'">
              我的
            </mt-tab-item>
          </mt-tabbar>
        </footer>
  </div>
</template>

<script>
import Login from '../components/Login'

import Info from '../components/Info'
export default {
  components:{Login,Info},
  data(){
    return{
      selectedTab:'home',
      data:[],
      selectedNav:'recommend',
      page:1,
      busy:false,
      pagecount:0,
      fixed:false
    }
  },
  methods:{
    loadMore(){
      this.busy=true;
      this.page++;
      if(this.page<=this.pagecount){
        this.loadData(this.selectedNav,this.page)
      }
    },
    loadData(value,page){
      this.$indicator.open('加载中')
      this.axios.get('/rentings?type='+value+'&page='+page)
      .then(res=>{
        console.log(res)
        this.pagecount=res.data.pagecount
        var rentings=res.data.result
        rentings.forEach(item => {
          this.data.push(item)
        });
        this.$indicator.close();
        this.busy=false;
      })
    },
    handleScroll(){
      var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var navbarEle=document.querySelector('.top-navbar');
      if(navbarEle!==null){
        var offsetTop=navbarEle.offsetTop;
        this.fixed=scrollTop>offsetTop
      }
    }
  },
  mounted(){
    this.page=1
    this.loadData(this.selectedNav,this.page);
    //事件监听
    window.addEventListener('scroll',this.handleScroll)
  },
  watch:{
    selectedNav(value){
      this.data=[];
      this.page=1
      this.loadData(value,this.page)
    }
  }
}
</script>

<style>
.content{
  margin-left: 1rem;
  margin-bottom: 2.8rem;
}
.position{
  margin-top: 0.5rem;
  text-align: left;
  border-bottom: 1px dotted #aaa;
  padding-bottom: 0.2rem;
}
.position img{
  height: 20px;
}
  .content>a{
    display: flex;
    align-items: center;
    padding: 6px 0;
    width: 100%;
    text-decoration: none;
  }
  .content>a>img{
    display: block;
    width: 130px;
  }
  .des{
    margin-left: 1.5rem;
  }
  .des>p{
    padding: 0;
    margin: 0.2rem;
    text-align: start;
  }
  .room{
    color: #666;
  }
  .com{
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
  }
  .pay{
    color:brown
  }
  .link>img{
    width: 30px;
  }
  .link>span{
    position: relative;
    color: white;
    top:0.1rem;
    background-color: rgb(247, 140, 108);
    padding: 2px;
    border-radius: 3px;
  }
</style>