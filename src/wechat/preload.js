function preload(dialog , callback){
  let sourceArr = [];
  let index = 0;

  dialog.forEach(item=>{
    let name = Object.keys(item)[0],
        content = item[name];
    if (content.type==='img' || content.type === 'video') {
      sourceArr.push(content.image);
    }
  })

  sourceArr.forEach(item=>{
    let img = document.createElement('img');
    img.src = item;
    img.onload = function(){
      index++;
      if (index === sourceArr.length) {
        callback();
      }
    }
  })


}

export default preload;
