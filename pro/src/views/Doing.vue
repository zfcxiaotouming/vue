<template>
  <div class="doing">
        <div class="classify">
            <div class="calss-item" v-for="(item, index) in classifyList" :key="index" :class="index==currentIndex?'active':''" @click="selectClassify(index)">
                {{item}}
            </div>
        </div>
        <div class="list-box">
            <div class="list">
                <div class="item" v-for="i in 30" :key="i">
                    <van-image width="85rem" height="85rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                    <div class="name">短袖</div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'doing',
    data() {
        return {
            classifyList: ['男装', '女装', '童装', '老年装', '短袖', '长袖', '羽绒服'],
            currentIndex: 0
        }
    },
    methods: {
        selectClassify(index) {
            this.currentIndex = index
        }
    }
}
</script>

<style lang="scss" scope>
.doing {
    display: flex;
    .classify {
        width: 80rem;
        .calss-item {
            height: 40rem;
            display: flex;
            font-size: 14rem;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            box-sizing: border-box;
            padding: 0 10rem;
        }
        .active {
            color: #1989fa;
            background: #fff;
        }
    }
    .list-box {
        flex: 1;
        overflow-y: scroll;
        background: #fff;
        .list {
            padding: 10rem;
            padding-bottom: 10rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .item {
                width: 85rem;
                margin-bottom: 10rem;
                .name {
                    height: 20rem;
                    font-size: 14rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
}
</style>