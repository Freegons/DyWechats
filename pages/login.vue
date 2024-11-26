<template>
  <div class="Demo">
    <!-- <h1>deng</h1> -->

    <div class="ImageDiv">
      <img src="/assets/loginImage.png" />
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: "blank",
});
</script>

<style>
.Demo {
  width: 500px;
  height: 200px;
  background-color: bisque;
  margin: 0 auto;
  background-color: aquamarine;
  display: block;
}

.ImageDiv {
  /* background-color: bisque; */
  width: 200px;
  height: 200px;
}

.ImageDiv img {
  height: 100%;
  width: auto;
}
</style>
