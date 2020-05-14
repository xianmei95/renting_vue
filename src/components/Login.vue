<template>
  <div class="login">
        <mt-header title="用户登录" fixed>
            <router-link to="/Register" slot="right">
                <mt-button type="default">立即注册</mt-button>
            </router-link>
        </mt-header>
        <main class="fields">
            <mt-field label="用户名" placeholder="请输入用户名" type="text"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
            <mt-button type="primary" size="large">快速登录</mt-button>
        </main>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .fields{
        margin-top:40px;
        background-color: white;
    }
</style>