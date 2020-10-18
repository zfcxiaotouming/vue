<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" :height="140" indicator-color="white">
        <van-swipe-item v-for="(item) in bannerList" :key="item.id">
            <img :src="item.img" alt="">
        </van-swipe-item>
    </van-swipe>
    <div class="block-list">
        <div class="title">商品列表</div>
        <div class="list">
            <Card v-for="(item,index) in list" :key="index" :goods="item"></Card>
        </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
    name: 'Home',
    components: {
        Card
    },
    data() {
        return {
            list: [],
            loading: false,
            finished: false,    
            list: [],
            bannerList: []
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            this.$api.get('/api/goods/goodsTest').then(res => {
                let data = res.data
                if(data.code == 0) {
                    this.list = data.list
                }
            })
            this.$api.get('/api/banner').then(res => {
                let data = res.data
                if(data.code == 0){
                    this.bannerList = data.data
                }
            })
        }
    }
}
</script>

<style lang="scss" scope>
.home {
    padding: 0 10rem;
    overflow-y: scroll!important;
    padding-bottom: 30rem;
    padding-top: 10rem;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    img {
        width: 100%;
        height: 100%;
    }
}
.block-list {
    padding-top: 20rem;
    overflow: hidden;
    .title {
        font-size: 14rem;
        color: #999;
    }
}
.list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>