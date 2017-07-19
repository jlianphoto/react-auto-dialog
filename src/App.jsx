import React, { Component } from 'react';
import Wechat from './lib/wechat.jsx';



let dialog = [
	{'me' : '你去吃屎'},
	{'德善' : {
		type : 'img',
		image : 'http://img4.imgtn.bdimg.com/it/u=1365112016,127878692&fm=26&gp=0.jpg'
	}},
	// {'me' : {
	// 	type : 'img',
	// 	image : 'http://image.bingodu.com/group1/M04/09/D3/CgELI1hSgTqAfjKmAABxJF7qaQA08.jpeg'
	// }},
	{'me' : {
		type : 'video',
		image : 'http://img4.imgtn.bdimg.com/it/u=1365112016,127878692&fm=26&gp=0.jpg',
		source : 'https://v.qq.com/iframe/player.html?vid=m0357eb6ia2&tiny=0&auto=0'
	}},

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
		}
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
