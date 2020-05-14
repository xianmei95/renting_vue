<template>
    <div>
        <header>
            <!-- 顶部导航 -->
            <mt-header title="消息通知"></mt-header>
        </header>
        <main>
            <div class="info1">
                <img src="../assets/images/icon.png" alt="">
                <div class="font">
                    <p>乐租房</p>
                    <p>Hi！我是乐租房。...</p>
                </div>
                <div class="time">
                    05-10
                </div>
            </div>
        </main>
    </div>
        
</template>

<script>
export default {

}
</script>

<style>
.info1{
    display: flex;
    margin-top: 0.5rem;
    padding-top: 1rem;
}
.info1 img{
    height: 60px;
    display: block;
    border: 2px solid #1296db;
    border-radius: 50%;
}
.info1 .font{
    text-align: left;
    margin-left: 1rem;
    margin-top: 1rem;
}
.info1 p{
    margin-bottom: 0.3rem;
}
.time{
    margin-top:1.5rem ;
    margin-left: 4rem;
}
</style>