import React, { Component } from 'react';
import Wechat from './lib/wechat.jsx';



let dialog = [

	{'tip' : 'NO.1 手心相连'},
	{'德善' : '别弄了，我说过吧，不和姐姐一起过，我说过吧，为什么都不听我的，我和你们说过不想和姐姐一起过生日吧。'},
	{'德善妈妈' : '今年就这样，明年开始单独过吧。'},
	{'德善' : '去年也是这么说的，前年也是。为什么就对我这样，我好欺负吗，我是可以随便对待也无所谓的人吗。为什么不给我煎荷包蛋，我很喜欢荷包蛋的，整天就给我吃腌豆子，我也不喜欢吃腌豆子的，还有为什么只给余晖买“世界杯”冰激凌吃，炸整鸡也是，也只给姐姐和余晖鸡腿，只给我鸡翅，我也会吃鸡腿。为什么，为什么只有我是德善。姐姐是宝拉，他是余晖，为什么只有我是成德善，为什么要叫我德善。😭'},
	{'德善爸爸' : '爸爸妈妈对不住你，是因为不知道。'},
	{'德善爸爸' : '对老大，要好好教导，对老二要好好关心，对老小，要教他好好做人。爸爸我，也不是，一生下来就是爸爸。'},
	{'德善爸爸' : '爸爸也是头一次当爸爸，所以，我们女儿稍微体谅一下。我女儿长得这么好，什么时候， 成了如此美丽的姑娘，还上电视，漂漂亮亮地化妆，话又说回来，我们德善是要嫁人了，爸爸好难过，该怎么活呀。'},
	// {'德善' : {
	// 	type : 'img',
	// 	image : 'http://img4.imgtn.bdimg.com/it/u=1365112016,127878692&fm=26&gp=0.jpg'
	// }},
	// {'me' : {
	// 	type : 'img',
	// 	image : 'http://image.bingodu.com/group1/M04/09/D3/CgELI1hSgTqAfjKmAABxJF7qaQA08.jpeg'
	// }},
	// {'me' : {
	// 	type : 'video',
	// 	image : 'http://img4.imgtn.bdimg.com/it/u=1365112016,127878692&fm=26&gp=0.jpg',
	// 	source : 'https://v.qq.com/iframe/player.html?vid=m0357eb6ia2&tiny=0&auto=0'
	// }},

	// {'德善' : {
	// 	type : 'question',
	// 	msg : '你是不是傻',
	// 	key : '是'
	// }},
	// {'德善' : '我知道了 , 你是傻'},
	// {'德善' : '知道了, 你不是傻'},
	// {'德善' : '垃圾,垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾'},
	// {'me' : '你去吃屎'},
	{'德善' : {
		type : 'question',
		msg : '你是有病吗',
		key : 'yes'
	}},
	{'tip' : '你已被群主移出该群你已被群主移出该群你已被群主移出该群你已被群主移出该群你已被群主移出该群你已被群主移出该群你已被群主移出该群你已被群主移出该群你已被群主移出该群你已被群主移出该群你已被群主移出该群你已被群主移出该群你已被群主移出该群你已被群主移出该群你已被群主移出该群你已被群主移出该群你已被群主移出该群'},
	{'tip' : '再见'}

]



let config = {
	speed: 2000,
	mine: {
		name : '狗焕',
		img : require('./img/huan.jpg')
	},
	orthers:[
		{
			name : '德善',
			img : require('./img/de.jpg')
		},
		{
			name : '德善爸爸',
			img : require('./img/de.jpg')
		},
		{
			name : '德善妈妈',
			img : require('./img/de.jpg')
		},
	],
	fuzzy : {
		answer : [
			{
				key : 'laji',
				msg :  '傻B'
			},
			{
				key : '1',
				msg :  '123'
			}
		],
		default : '再见'
	}
}

class App extends Component {
  render() {
    return (
      <Wechat dialog={dialog} config={config}></Wechat>
    );
  }
}

export default App;
