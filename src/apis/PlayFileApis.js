// 导入模块
import {PLAYURL} from "../commons/URLSchema";
export default {
  /*
  * 获取数据
  * */
  getPlayData(cb){
    fetch(PLAYURL).then(res=>{
      // console.log(res)
      res.json().then(data=>{
        cb(data)
        // console.log(data);
      })
    })
  }
}
