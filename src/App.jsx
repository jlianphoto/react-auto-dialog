import React, { Component } from 'react';
import Wechat from './wechat/wechat.jsx';



let dialog = [
	{'me' : '你去吃屎'},
	{'德善' : {
		type : 'img',
		source : 'http://img4.imgtn.bdimg.com/it/u=1365112016,127878692&fm=26&gp=0.jpg'
	}},
	{'me' : {
		type : 'video',
		cover : 'http://img4.imgtn.bdimg.com/it/u=1365112016,127878692&fm=26&gp=0.jpg',
		source : 'https://v.qq.com/iframe/player.html?vid=m0357eb6ia2&tiny=0&auto=0'
	}},
	{'德善' : {
		type : 'question',
		msg : '你是不是傻',
		key : '是'
	}},
	{'德善' : '我知道了 , 你是傻'},
	{'德善' : '知道了, 你不是傻'},
	{'德善' : '垃圾,垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾垃圾'},
	{'me' : '你去吃屎'},
	{'德善' : 'bye'},
	// {'me' : '你去吃屎'},
	// {'德善' : '垃圾'},
	// {'me' : '你去吃屎'},
	// {'德善' : '垃圾'},
	// {'me' : '你去吃屎'},
	// {'德善' : '垃圾'},
	// {'me' : '你去吃屎'},
	// {'德善' : '垃圾'},
	// {'me' : '你去吃屎'},
	// {'德善' : '垃圾'},
	// {'me' : '你去吃屎'},
	// {'德善' : '垃圾'},
	// {'me' : '你去吃屎'},
	// {'德善' : '垃圾'},
	// {'me' : '你去吃屎'},
	// {'德善' : '垃圾'},
	// {'me' : '你去吃屎'},
	// {'德善' : '垃圾'}
]



let config = {
	speed: 1000,
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
		key : [
			{
				key : 'laji',
				msg :  '傻B'
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
