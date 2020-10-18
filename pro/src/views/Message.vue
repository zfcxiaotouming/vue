<template>
  <div class="message">
      <div class="empty" v-if="shopCarList.length==0">
          <div class="text">你暂时还没有添加商品</div>
          <div class="button">
            <van-button class="button" type="default" @click="$router.push({name:'home'})">去添加商品</van-button>
          </div>
      </div>
      <div class="content" v-else>
          <div class="shop-item" v-for="item in shopCarList" :key="item._id">
              <div class="img-box">
                  <img :src="item.img" alt="">
              </div>
              <div class="desc">
                  <div class="name">{{item.name}}</div>
                  <div class="price">￥{{item.price}}</div>
                  <div class="count">
                      <div class="red" @click="red">-</div>
                      <span>{{item.count}}</span>
                      <div class="add" @click="add">+</div>
                  </div>
              </div>
          </div>
          <div class="btn-group">
              <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
          </div>
      </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
    data() {
        return {
            shopCarList: [],
            totalPrice: 0
        }
    },
    created() {
        this.getData()
    },
    computed: {
        userName() {
            return this.$store.state.userName
        }
    },
    methods: {
        getData() {
            let userId = this.userName
            if(!userId) return 
            this.$api.get(`/api/shop/shopcar?userId=${userId}`).then(res => {
                let data = res.data
                if(data.code == 0) {
                    this.shopCarList = data.data
                    let total = 0
                    this.shopCarList.forEach(item => {
                        total += item.price*item.count
                    })
                    this.totalPrice = total*100
                }
            })
        },
        red() {
            
        },
        add() {

        },
        onSubmit() {
            Dialog.confirm({
                title: '提示',
                message: '您确定购买吗',
            })
            .then(() => {
                // on confirm
            })
            .catch(() => {
                // on cancel
            });
        }
    }
}
</script>

<style lang="scss" scope>
.message {
    display: flex;
}
.empty {
    flex: 1;
    .text {
        margin: 200rem auto 0;
        width: 200rem;
        display: flex;
        justify-content: center;
        font-size: 16rem;
        color: #999;
    }
    .button {
        margin: 20rem 0;
        display: flex;
        justify-content: center;
    }
}
.content {
    width: 100%;
    overflow-y: scroll;
    margin-bottom: 50rem;
    .shop-item {
        background: #fff;
        padding: 20rem;
        display: flex;
        border-bottom: 1rem solid #eee;
        &:last-of-type {
            border-bottom: none;
        }
    }
    .img-box {
        width: 80rem;
        height: 80rem;
        img {
            width: 80rem;
            height: 80rem;
        }
    }
    .desc {
        flex: 1;
        padding-left: 10rem;
        display: flex;
        flex-direction: column;
        .name {
            font-size: 16rem;
            font-weight: 700;
            color: #333;
            height: 30rem;
        }
        .price {
            font-size: 18rem;
            color: red;
            font-weight: 700;
        }
        .count {
            flex: 1;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            span {
                background: #ccc;
                padding: 0 10rem;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .red {
                padding: 0 5rem;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20rem;
            }
            .add {
                padding: 0 5rem;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20rem;
            }
        }
    }
}
.btn-group {
    .van-submit-bar {
        bottom: 50rem!important;
    }
}
</style>