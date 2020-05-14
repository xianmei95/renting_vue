<template>
  <div>
        <mt-header title="用户注册" fixed>
            <router-link to="/" slot="left">
                <mt-button type="default" icon="back"></mt-button>
            </router-link>
        </mt-header>
        <main class="fields">
            <mt-field label="用 户 名" placeholder="请输入用户名" type="text"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
            <mt-field label="确认密码" placeholder="请再次输入密码" type="password"></mt-field>
            <mt-field label="邮箱" placeholder="请输入电子邮箱" type="text"></mt-field>
            <mt-button type="primary" size="large">快速注册</mt-button>
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
    }
</style>