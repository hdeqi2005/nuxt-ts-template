<template>
  <div class="goods">
    <div class="img">
       tt
    </div>
    <p class="title">{{data.title}}</p>
    <p class="price"><span>¥</span>{{data.price | moneyFormat}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object
    }
  }
</script>

