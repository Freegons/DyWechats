<template>
  <div>
    <header>
      <h1>My Nuxt Application</h1>
      <div>
        <NuxtLink to="/login">登录</NuxtLink>
      </div>
    </header>
    <main>
      <NuxtPage /> <!-- 渲染页面内容 -->
    </main>
    <footer>
      <p>© 2024 My Nuxt App</p>
    </footer>
  </div>
</template>
