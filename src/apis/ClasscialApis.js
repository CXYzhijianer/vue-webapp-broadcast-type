// 导入模块
import {AJAXURL} from "../commons/URLSchema";
export default {
    /*
    * 获取数据
    * */
    getClasscialData(cb){
      fetch(AJAXURL).then(res=>{
        // console.log(res)
        res.json().then(data=>{
          cb(data)
          // console.log(data);
        })
      })
    }
}
