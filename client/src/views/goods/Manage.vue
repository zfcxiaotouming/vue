<template>
<div>
  <div v-if="!visible">
    <button @click="addAction" class="add-btn">添加</button>
    <a-table :columns="columns" :data-source="data" bordered>
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>
      <!-- <div slot="operation">
        <button @click="updataAction">编辑</button>
        <button @click="delAction(dataIndex)">删除</button>
      </div> -->
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="data.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record)"
        >
          <a href="javascript:;">删除</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
  <div class="from" v-else>
    <p>商品编号：<input type="text" v-model="num"></p>
    <p>商品图：<input type="text" v-model="img"></p>
    <p>商品名称：<input type="text" v-model="name"></p>
    <p>价格：<input type="text" v-model="price"></p>
    <p>库存：<input type="text" v-model="store"></p>
    <p>销量：<input type="text" v-model="buynum"></p>
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

// const data = [
//   {
//     key: '1',
//     num: '01',
//     img: 32,
//     name: '小明',
//     price: 11,
//     store: 12,
//     buynum:10
//   }
// ];

export default {
   components: {
     [Table.name] : Table,
     [Pagination.name]: Pagination,
     [Popconfirm.name]:Popconfirm
  },
  data() {
    const columns = [
      {
        title: '商品编号',
        dataIndex: 'num',
        customRender: (text, row, index) => {
            return <a href="javascript:;">{text}</a>;
        },
      },
      {
        title: '商品图',
        dataIndex: 'img',
        customRender: (text)=>{
          return <img src={text} width="40px"/>
        },
      },
      {
        title: '商品名称',
        dataIndex: 'name',
        customRender: renderContent,
      },
      {
        title: '价格',
        dataIndex: 'price',
        customRender: renderContent,
      },
      {
        title: '库存',
        dataIndex: 'store',
        customRender: renderContent,
      },
      {
        title: '销量',
        dataIndex: 'buynum',
        customRender: renderContent,
      },
      { title: '操作', key: 'operation', scopedSlots: { customRender: 'operation' } },
    ];
    return {
      data: [],
      columns,
      visible:false,
      num: '',
      img: '//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/9953/3/13380/93013/5c443b5eE311a22f6/227e53f664231e09.jpg!q70.dpg.webp',
      name: '',
      price: '300',
      store: '10',
      buynum:'200',
      detail: '米兰艺 北欧后现代轻奢客厅吊灯个性创意led卧室灯具简约现代圆形环形工程定制餐厅吊灯',
      editingKey: '',
    };
  },
  created(){
   this.getData()
  },
  methods: {
    getData() {
      this.$axios.get('/api/goods/goodsTest')
        .then(data=>{
          let newData = data.data.list.map((item,index)=>{
            return {
              key: `${index}`,
              num:item.num,
              img:item.img,
              name:item.name,
              price:item.price,
              store:item.store,
              buynum:item.buynum,
              id: item._id
            }
          })
          // console.log(newData)
          this.data = newData
        })
    },
    addAction() {
      this.visible = true
      console.log(111)
    },
    cancel() {
      this.visible = false
    },
    submitAction(){
      this.$axios.post('/api/goods/goodsTest',{
        num:this.num,
        img:this.img,
        name:this.name,
        price:this.price,
        store:this.store,
        buynum:this.buynum,
        detail:this.detail
      }).then(data=>{
        if(data.data.code === 0){
          alert('添加成功')
          this.$router.replace({name:'home'})
        }
      })

    },
    onDelete(key) {
      let {id} = key
      this.$axios.post('/api/goods/delGoodsTest',{
        id
      }).then(res => {
        this.getData()
      })

      // this.data = data.filter(item => item.key !== key);

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



 