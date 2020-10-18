<template>
  <div class="buy-button">
    <div class="buy" @click="show = true">购买</div>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
import { Dialog, Toast } from "vant";
export default {
  name: "buy-button",
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  props: {
    goodsInfo: {
      type: Object,
      default() {return {}}
    }
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    userName() {
      return this.$store.state.userName
    },
    sku() {
      let obj = {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        price: "1.00", // 默认价格（单位元）
        stock_num: 341, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false, // 是否隐藏剩余库存
      }
      if(this.goodsInfo.price) {
        obj.price = this.goodsInfo.price
      }
      if(this.goodsInfo.stock_num) {
        obj.stock_num = this.goodsInfo.stock_num
      }
      if(this.goodsInfo.collection_id) {
        obj.collection_id = this.goodsInfo.collection_id
      }
      return obj
    },
    goods() {
      let obj = {
        // 默认商品 sku 缩略图
        picture: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602520952481&di=077352df679436af79ccd5f9d587a66f&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg",
      }
      if(this.goodsInfo.picture) {
        obj.picture = this.goodsInfo.picture
      }
      return obj
    }
  },
  destroyed() {
    clearTimeout(this.timer)
  },
  methods: {
    onBuyClicked(data) {
      // let userId = '1111'
      // this.$api.get(`/api/shop/shopcar?userId=${userId}`).then(res => {
      //   console.log(res.data)
      // })
       this.onAddCartClicked(data)
    },
    onAddCartClicked(data) {
      if(!this.userName) {
        Toast('未登陆，请先登录');
        this.timer = setTimeout(() => {
          this.$router.push('/login')
        }, 1000);
        return
      }
      let shop = {
        userId: this.userName,
        goodsId: this.goodsInfo.collection_id,
        img: this.goodsInfo.picture,
        count: data.selectedNum,
        price: this.goodsInfo.price,
        name: this.goodsInfo.name
      }
      this.$api.post('/api/shop/shopcar', shop).then(res => {
        let data = res.data
        if(data.code == 0) {
          this.$router.replace('/message')
        }else {
          console.log('添加购物车失败')
        }
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.buy-button {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 45rem;
  background: #fff;
  display: flex;
  align-items: center;
  .call {
    padding: 0 20rem;
    img {
      width: 30rem;
      height: 30rem;
    }
  }
  .add-shopcar {
    flex: 1;
    background: #eee;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buy {
    flex: 1;
    height: 100%;
    background: rgba(231, 86, 53, 1);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>