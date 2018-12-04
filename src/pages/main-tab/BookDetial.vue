<template>
    <div>
      <h1>【{{item.title}}】</h1>
      <p></p>
    </div>
</template>

<script>
    export default {
        name: "BookDetial",
      data(){
        return {
          item:{},
          lists:[
            {title:"【“菲”同寻常】"},
            {title:"【友好故事】"},
            {title:"【红楼梦】"}
          ]
        }
      },
      // //$route :获取所有url的信息 $router:导航
      created(){
          // console.log(this.$route)
        // let {id}=this.$route.query//params?id=1
        let {id}=this.$route.params//params/0
        this.item=this.lists[id]
        // console.log( this.item)

      }
    }
</script>

<style scoped>
  h1,li{
    font-size: .18rem;
  }
</style>
