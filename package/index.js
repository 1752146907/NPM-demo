
 
import PigButton from "./pig-button"
import Card from "./card"

// 将来如果有其它组件,都可以写到这个数组里
const components = [ 
    PigButton,
    Card
]

// 批量组件注册
const install = function (Vue) {
    components.forEach((com) => {
      Vue.component(com.name, com);
    });
  };
  
// 这个方法以后再使用的时候可以被use调用
export default install; 
