export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.startsWith("/api/")) {
    return abortNavigation("API 路径不能直接访问");
  }
});
