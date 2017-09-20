  // 递归要点
  // 1. 数据结构相似
  // 2. 遇到子节点遍历传给自己
  // 3. 要有退出
  BaiduMap.getCityByName = function (name) {
  
    // let codes = [];
    // function _getName(node, name){
    //   if(node.label == name){
    //     console.log(node.value)
    //     return [node.value];
    //   }
    //   if(node.children){
    //     for(let child of node.children){
    //       let aa = _getName(child, name);
    //       if (aa) return [node.value].concat(aa);
    //     }
    //   }
    //   return false;
    // }

    // for (let item of cityOption) {
    //   codes = _getName(item, name);
    //   if(codes) break;
    // }
    // return codes;
  }