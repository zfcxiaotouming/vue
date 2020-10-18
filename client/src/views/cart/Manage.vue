<template>
<div>
  <div v-if="!visible">
    <a-table :columns="columns" :data-source="data" bordered>
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>
    </a-table>
  </div>
  <div class="from" v-else>
    <p>用户：<input type="text" v-model="user"></p>
    <p>商品id：<input type="text" v-model="shop_id"></p>
    <p>商品名称：<input type="text" v-model="name"></p>
    <p>图片：<input type="text" v-model="img"></p>
    <p>价格：<input type="text" v-model="price"></p>
    <p>数量：<input type="text" v-model="num"></p>
    <p class="detail">商品详情：<textarea name="" id="" cols="30" rows="10" v-model="detail"></textarea></p>
    <p><button @click="submitAction">提交</button> <button @click="cancel">取消</button></p>
  </div>
</div>
</template>

<script>
import { Table,Pagination,Popconfirm } from 'ant-design-vue'
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    attrs: {}
  };
  return obj;
};


export default {
   components: {
     [Table.name] : Table,
     [Pagination.name]: Pagination,
     [Popconfirm.name]:Popconfirm
  },
  data() {
    const columns = [
      {
        title: '用户',
        dataIndex: 'user',
        customRender: (text, row, index) => {
            return <a href="javascript:;">{text}</a>;
        },
      },
      {
        title: '商品id',
        dataIndex: 'shop_id',
        customRender: renderContent,
      },
      {
        title: '商品名称',
        dataIndex: 'name',
        customRender: renderContent,
      },
      {
        title: '图片',
        dataIndex: 'img',
        customRender: (text)=>{
          return <img src={text} width="40px"/>
        },
      },
      {
        title: '价格',
        dataIndex: 'price',
        customRender: renderContent,
      },
      {
        title: '数量',
        dataIndex: 'num',
        customRender: renderContent,
      },
    ];
    return {
      data: [],
      columns,
      visible:false,
      user: '',
      img: '',
      name: '',
      price: '',
      shop_id: '',
      num:'',
    };
  },
  created(){
   this.getData()
  },
  methods: {
    getData() {
      this.$axios.get('/api/shop/car')
        .then(data=>{
          let newData = data.data.result.map((item,index)=>{
            return {
              key: `${index}`,
              num:item.num,
              img:item.img,
              name:item.name,
              price:item.price,
              shop_id:item.goodsId,
              num:item.count,
              user:item.userId,
              id: item._id
            }
          })
          this.data = newData
        })
    },
  }
};
</script>
<style lang="scss" scoped>
.add-btn {
  margin-bottom: 10px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
}
.from {
  input {
    width: 30%;
    height: 30px;
    border: 1px solid #ccc;
  }
  .detail{
    textarea {
      vertical-align: top;
    }
  }
}
</style>