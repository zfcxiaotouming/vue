<template>
    <div class="card" @click="gotoDetails(goods._id)">
        <div class="img">
            <img :src="goods.img" alt="">
        </div>
        <div class="desc">
            <div class="name-price">
                <div class="name">{{goods.name}}</div>
                <div class="price">￥ {{goods.price}}</div>
            </div>
            <div class="addr-num">
                <div class="num">销量:{{goods.buynum}}+</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card',
    props: {
        goods: {
            type: Object,
            default() {return {}}
        }
    },
    mounted() {
    },
    methods: {
        gotoDetails(id) {
            this.$router.push('/details?id='+id)
        }
    }
}
</script>

<style lang="scss" scope>
.card {
    width: 170rem;
    margin-top: 10rem;
    .img {
        position: relative;
        height: 190rem;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .desc {
        background: #fff;
        padding: 10rem 6rem 8rem;
        .name-price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 25rem;
            .name {
                font-size: 15rem;
                color: #666;
            }
            .price {
                color: red;
                font-weight: 700;
                font-size: 14rem;
            }
        }
        .addr-num {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 20rem;
            .num {
                font-size: 12rem;
                color: #888;
            }
        }
        .tiem {
            font-size: 12rem;
            color: #999;
            display: flex;
            align-items: center;
            height: 20rem;
        }
    }
}
</style>