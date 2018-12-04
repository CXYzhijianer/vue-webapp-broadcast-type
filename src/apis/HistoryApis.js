// 导入模块
import {HSTORYURL} from "../commons/URLSchema";
export default {
  /*
  * 获取数据
  * */
  getHistoryData(cb){
    fetch(HSTORYURL).then(res=>{
      // console.log(res)
      res.json().then(data=>{
        cb(data)
        // console.log(data);
      })
    })
  }
}
