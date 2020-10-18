<template>
  <div>
      <div class="user">
          <div class="img">
              <van-image width="100rem" height="100rem" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div class="user-name">kaids</div>
      </div>
      <div class="block">
          <div class="item">我的订单</div>
          <div class="item">我的地址</div>
          <div class="item">我的收藏</div>
          <div class="item">我的优惠券</div>
          <div class="item">设置</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
.user {
    height: 200rem;
    background: #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.user-name {
    font-size: 14rem;
    color: #999;
    margin-top: 20rem;
}
.block {
    margin-top: 20rem;
    background: #fff;
    .item {
        height: 35rem;
        display: flex;
        align-items: center;
        padding: 0 20rem;
        font-size: 14rem;
        border-bottom: 1rem solid #eee;
        &:last-child {
            border: none;
        }
    }
}
</style>