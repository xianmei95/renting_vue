<template>
  <div>
        <header>
            <!-- 顶部导航 -->
            <mt-header title="房源信息">
                <router-link to="/" slot="left">
                    <mt-button type="default" icon="back"></mt-button>
                </router-link>
            </mt-header>
        </header>
        <main>
            <div class="swipe">
                <mt-swipe :auto="5000" :speed="1000">
                    <mt-swipe-item v-for="(item,index) of imgs" :key="index">
                        <img :src="item" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="link_person">
                <img src="../assets/images/link.jpg" alt="">
                <div>
                    <p class="person">{{data.link_person}}</p>
                    <span class="ren">
                        <p>手机认证</p>
                        <p>身份认证</p>
                    </span>
                </div>
            </div>
            <div class="info">
                <p><a href="">小 区：</a>{{data.info_community}}</p>
                <p><a href="">租 金：</a>￥{{data.info_price}}/月</p>
                <p><a href="">付款方式：</a>{{data.pay_type}} 可面议</p>
                <p><a href="">面 积：</a>{{data.area}}平米</p>
                <p><a href="">户 型：</a>{{data.room}}</p>
                <p><a href="">入住时间：</a>{{data.daytime}}</p>
            </div>
            <div class="mating">
                <p>家电设施</p>
                <div class="mating-detail">
                    <img v-for="(item,index) of matings" :key="index" :src="item" alt="">
                </div>
            </div>
            <div class="request">
                <p>出租要求</p>
                <p>{{data.request}}</p>
            </div>
            <div class="last">
                <p>乐租全力保障您的交易安全</p>
                <span><img src="../assets/images/last.png" alt=""> <a href="">严格认证机制</a></span>
                <div>
                    <p>在乐租房，轻松找到真实有效的房源</p>
                    <p>三重用户认证，多重审核手段</p>
                    <p>确保个人身份，保障房源真实</p>
                </div>
            </div>
        </main>
        <footer>
            <button class="send">发私信</button>
            <button class="phone">电话咨询</button>
        </footer>
  </div>
</template>

<script>
export default {
    data(){
        return {
            //获取路由中的参数
            id:this.$route.params.id,
            data:'',
            imgs:[],
            matings:[]
        }
    },
    mounted(){
        console.log(this.id)
        this.axios.get('/renting?id=' + this.id).then(res=>{
            console.log(res)
            this.data=res.data.data
            this.imgs=this.data.images.split(',')
            this.matings=this.data.mating.split(',')
            console.log(this.data,this.imgs)
        });
    }
}
</script>

<style>
main{
    padding:0 0.6rem 1rem 0.6rem;
    background-color: #f5f5f5;
}
.swipe{
    width: 100%;
    height:220px
}
.swipe img{
    display:block;
    height:100%;
    margin: 0 auto;
}   
.link_person{
    height: 100px;
    display: flex;
    background-color: white;
    align-items: center;
} 
.link_person img{
    width: 80px;
    height: 80px;
    display: block;
    border-radius: 40%;
    margin-left: 2rem;
}
.link_person span{
    display: flex;
}
.person{
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
}
.ren p{
    border: 1px solid green;
    color: green;
    margin-left:0.6rem ;
    padding: 0.1rem;
    border-radius: 0.4rem;
}
.info{
    background-color: white;
    margin-top:0.6rem;
}
.info a{
    text-decoration: none;
    color: #999;
    font-size: 1.1rem;
}
.info p{
    text-align: left;
    padding:0.6rem 1rem 0.3rem 2rem;
}
.mating img{
    height: 30px;
    padding-left: 1rem;
    margin-top: 0.7rem;
    text-align: left;
    
}
.mating{
    background-color: white;
    margin-top:0.6rem;
    padding-bottom:0.6rem;
}
.mating>p,.request>p{
    font-size: 1.1rem;
    margin: 0.5rem;
    padding-top: 0.7rem;
    padding-left: 0.5rem;
    text-align: left;
}
.request{
    background-color: white;
    padding-bottom: 0.6rem;
}
.last{
    background-color: white;
    text-align: left;
    padding: 0.6rem 0 0.6rem 1rem;
    margin-top:0.6rem ;
}
.last img{
    height: 50px;
    margin-right: 0.5rem;
    margin-top:0.5rem
}
.last>p{
    color: tomato;
    margin-bottom: 0.5rem;
}
.last a{
    color: #333;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    bottom:1rem;
}
.last div{
    margin-left: 3.5rem;
}
.last div p{
    margin-bottom: 0.5rem;
}
footer{
    background-color: white;
    padding: 0.6rem 2rem 0.6rem 2rem;
}
.send,.phone{
    color: white;
    background-color: tomato;
    border: 0;
    padding: 0.7rem 1.1rem 0.7rem 1.1rem;
    font-size: 1.1rem;
    border-radius: 0.2rem;
}
.send{
    margin-right: 5rem;
}

</style>