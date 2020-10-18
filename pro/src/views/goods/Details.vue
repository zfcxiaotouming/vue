<template>
  <div>
      <div class="back" @click="$router.back()">返回</div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="i in 3" :key="i">
            <img class="swiper-img" :src="details.img" alt="">
        </van-swipe-item>
    </van-swipe>
    <div class="goods-info">
        <div class="name">
            {{details.name}}
        </div>
        <div class="desc">
            商品描述
        </div>
        <div class="price-oldprice">
            <div class="price-box">
                <div class="price">￥<span>{{details.price}}</span></div>
                <div v-if="details.oldPrice" class="old-price">￥<span>{{details.oldPrice}}</span></div>
            </div>
            <div class="order-num">{{details.buynum}}人购买</div>
        </div>
        <div class="tag-box">
            <div class="icon"><span class="iconfont icon-servicewuyoutuihuanhuo"></span><span>七天退换</span></div>
            <div class="icon"><span class="iconfont icon-baoyou"></span><span>全国包邮</span></div>
            <div class="icon"><span class="iconfont icon-pinzhibaozhang"></span><span>品质保证</span></div>
        </div>
    </div>
    <div class="goods-desc">
        <div class="title">商品详情</div>
        <div class="text">
            {{details.detail}}
        </div>
    </div>
    <BuyButton :goodsInfo="goodsInfo"></BuyButton>
  </div>
</template>

<script>
import BuyButton from './components/BuyButton'
export default {
    name: 'Details',
    components: {
        BuyButton
    },
    data() {
        return {
            details: {},
            goodsInfo: {}
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            let {query} = this.$route
            this.$api.get(`/api/goods/details?id=${query.id}`).then(res => {
                let data = res.data
                if(data.code == 0) {
                    this.details = data.data
                    let obj = {
                        price:data.data.price,
                        stock_num:Number(data.data.store),
                        collection_id:data.data._id,
                        picture: data.data.img,
                        name: data.data.name
                    }
                    this.goodsInfo = obj
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.back {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 99999;
    font-size: 16px;
}
.swiper-img {
    height: 100%;
    width: 100%;
}
.my-swipe {
    height: 375rem;
}
.goods-info {
    padding: 10rem;
    padding-bottom: 0;
    .name {
        font-size: 16rem;
        font-weight: 700;
        color: #333;
        line-height: 24rem;
    }
    .desc {
        font-size: 14rem;
        color: #666;
        line-height: 18rem;
    }
    .price-oldprice {
        margin-top: 10rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price-box {
            display: flex;
            align-items: flex-end;
            .price {
                font-size: 14rem;
                color: red;
                font-weight: 700;
                span {
                    font-size: 24rem;
                    font-weight: 700;
                }
            }
            .old-price {
                margin-left: 5rem;
                text-decoration: line-through;
                color: #999;
            }
        }
        .order-num {
            color: #666;
        }
    }
    .tag-box {
        display: flex;
        padding: 20rem 0 10rem;
        font-size: 12rem;
        justify-content: space-around;
        border-bottom: 1rem solid #ccc;
        .icon {
            height: 30rem;
            line-height: 30rem;
            span {
                vertical-align: top;
                margin: 2rem;
            }
        }
    }
}
.goods-desc {
    padding: 20rem 10rem 0;
    .title {
        font-size: 16rem;
        color: #333;
        font-weight: 700;
        margin-bottom: 10rem;
    }
}
</style>