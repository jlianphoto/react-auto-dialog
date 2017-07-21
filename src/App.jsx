import React, { Component } from 'react';
import Wechat from './lib/wechat.jsx';



let dialog = [

	{'tip' : 'NO.14 亲爱的你不要担心'},
	{'德善' : '东龙，我想问件事'},
	{'东龙' : '问吧'},
	{'德善' : '为什么没有人喜欢我呢'},
	{'东龙' : '哦，阿泽……哎呦，看错了'},
	{'德善' : '我是认真的。'},
	{'东龙' : '我也是认真的。'},
	{'德善' : '为什么没有人喜欢我?看来我没资格被爱。'},
	{'东龙' : '德善呐'},
	{'德善' : '恩?'},
	{'东龙' : '你喜欢水分多的番薯还是面面的番薯?'},
	{'德善' : '水分多的'},
	{'东龙' : '你喜欢李文世还是朴南正?'},
	{'德善' : '李文世'},
	{'东龙' : '喜欢我还是喜欢阿泽?'},
	{'德善' : '阿泽'},
	{'东龙' : '烦死了。讨厌我吗?'},
	{'德善' : '还是更喜欢阿泽'},
	{'东龙' : '那么，喜欢正八还是喜欢善宇?'},
	{'德善' : '干嘛问这个'},
	{'东龙' : '德善呐，你呢，别在乎谁喜欢你，而是你，你喜欢的人是谁。那么肯定地说喜欢什么番薯，难道没有你喜欢的类型吗。德善，不，秀妍呐，除了等待别人喜欢你，你大可以喜欢别人。是吧?现在的孩子啊，只懂求根公式，不懂人生。可是你，不懂求根公式，人生也不懂。你懂什么呀?什么呀你?真是的。快起来吧。'},


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
			name : '东龙',
			img : 'http://img1.imgtn.bdimg.com/it/u=1064578235,340201784&fm=26&gp=0.jpg'
		},
		{
			name : 'J.Lian',
			img : 'https://qlogo4.store.qq.com/qzone/872821547/872821547/100?1398824048'
		},
		{
			name : '德善妈妈',
			img : require('./img/de_mother.jpg')
		},
	],
	fuzzy : {
		answer : [
			{
				key : 'laji',
				msg :  {'德善' : '你个垃圾'}
			},
			{
				key : '1',
				msg :  {'东龙' : '你输入1干什么'}
			}
		],
		default : {'J.Lian' : '想了解更多组件相关配置 , 回复1 , 或访问github地址:<a href="https://github.com/jlianphoto/react-auto-dialog">https://github.com/jlianphoto/react-auto-dialog<a/>'}
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
