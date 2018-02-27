import React, { Component } from 'react';
import Wechat from './lib/wechat';
import './App.scss';


let dialog = [
	{'tip' : 'NO.01 温暖的一句话'},
	{'正焕' : '哥，那手术失败的几率都不到百分之三，我都查过了'},
	{'正峰' : '小时候得心脏病的几率连百分之二都不到，所以哥哥很害怕那百分之三'},
	{'正峰妈妈' : '快睡吧，明天早晨做手术'},
	{'正峰' : '我睡不着'},
	{'正峰妈妈' : '为什么睡不着，害怕吗?'},
	{'正峰' : '有点'},
	{'正峰妈妈' : '正峰啊，妈妈今天问了所有的护士，手术会不会不成功，说是完全不会，真的。你见过妈妈说谎吗?还有啊，晚上妈妈和爸爸出去吃了排骨，如果我担心手术，还能出去吃饭吗。爸爸妈妈真的一点都不担心你的手术，所以你也不要担心。快点，好好睡一觉，知道了吗。怎么了，我的儿子。那么大的手术也挺过来了。'},
	{'正峰' : '妈妈很坚强……妈妈很坚强，但是我身体也弱心也软。'},
	{'正峰妈妈' : '我儿子哪儿弱了，你像妈妈一样很坚强。那么大的手术，不是谁都能挺过来的。正峰啊，那已经很厉害了。你是比妈妈更坚强、更厉害的人。快睡吧，妈妈去看会儿电视。'},
	{'tip' : '话里带着心情，所以每一句话都带着体温，在这冷冰冰的恶言相向的世界里，让你坚持活下去的，维持生活体温的，也不是名言，也不是有知识的话语，而是带着你粗鲁的体温的温暖的一句话。'},

	{'tip' : 'NO.02 亲爱的你不要担心'},
	{'me' : '东龙，我想问件事'},
	{'东龙' : '问吧'},
	{'me' : '为什么没有人喜欢我呢'},
	{'东龙' : '哦，阿泽……哎呦，看错了'},
	{'me' : '我是认真的。'},
	{'东龙' : '我也是认真的。'},
	{'me' : '为什么没有人喜欢我?看来我没资格被爱。'},
	{'东龙' : '德善呐'},
	{'me' : '恩?'},
	{'东龙' : '你喜欢水分多的番薯还是面面的番薯?'},
	{'me' : '水分多的'},
	{'东龙' : '你喜欢李文世还是朴南正?'},
	{'me' : '李文世'},
	{'东龙' : '喜欢我还是喜欢阿泽?'},
	{'me' : '阿泽'},
	{'东龙' : '烦死了。讨厌我吗?'},
	{'me' : '还是更喜欢阿泽'},
	{'东龙' : '那么，喜欢正八还是喜欢善宇?'},
	{'me' : '干嘛问这个'},
	{'东龙' : '德善呐，你呢，别在乎谁喜欢你，而是你，你喜欢的人是谁。那么肯定地说喜欢什么番薯，难道没有你喜欢的类型吗。德善，不，秀妍呐，除了等待别人喜欢你，你大可以喜欢别人。是吧?现在的孩子啊，只懂求根公式，不懂人生。可是你，不懂求根公式，人生也不懂。你懂什么呀?什么呀你?真是的。快起来吧。'},
	{'东龙' : {
		type : 'img',
		image : require('./img/img2.jpg')
	}},

	{'tip' : 'NO.03  再见初恋'},
	{'正焕' : '在这儿干什么'},
	{'me' : '有事想问你'},
	{'me' : '那个'},
	{'正焕' : '进我屋说吧，太冷了'},
	{'正焕' : '说吧'},
	{'me' : '哦'},
	{'正焕' : '什么事啊？'},
	{'me' : '我这周要去参加一对一联谊'},
	{'me' : '德善高中二年级，名字叫崔在英'},
	{'me' : '祖贤的小学同学'},
	{'me' : ' 我要不要去参加联谊'},
	{'me' : ' 我要不要去参加联谊啊？'},
	{'tip' : '......'},
	
	{'tip' : '人生就像一盒巧克力，打开之前永远都不知道下一个吃到的是什么味道，就算是拿到了一颗超苦的巧克力豆，也无能为力，这就是我所选择的命运，不能后悔，不能哭哭啼啼，也不能……心痛。'},
	
	{'东龙' : '德善，善宇，东龙，正焕，崔泽，你最喜欢哪个？'},
]





class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			process : 0,
			isShow : 'block'
		}

		this.config = {
			speed: 2000,
			preload: true,
			process : this.process,
			me: {
				name : '德善',
				img : require('./img/de.jpg')
			},
			orthers:[
				{
					name : '正峰',
					img : require('./img/feng.jpg')
				},
				{
					name : '正峰妈妈',
					img : require('./img/z_mother.jpg')
				},
				{
					name : '正焕',
					img : require('./img/huan.jpg')
				},
				{
					name : '东龙',
					img : require('./img/dong.jpg')
				},
				{
					name : '崔泽',
					img : require('./img/ze.jpg')
				},
				{
					name : '善宇',
					img : require('./img/yu.jpg')
				}
			],
			fuzzy : {
				answer : [
					{
						key : '德',
						msg :  {'me' : {
							type : 'video',
							image : 'http://shp.qpic.cn/qqvideo_ori/0/d03875nc1zl_496_280/0',
							source : 'https://v.qq.com/iframe/player.html?vid=d03875nc1zl&tiny=0&auto=0'
						}}
					},
					{
						key : '焕',
						msg :  {'正焕' : {
							type : 'video',
							image : require('./img/cover.jpg'),
							source : '//v.qq.com/iframe/player.html?vid=m0357eb6ia2&tiny=0&auto=0'
						}},
					},
					{
						key : '宇',
						msg : {'善宇' : {
							type : 'video',
							image : 'http://shp.qpic.cn/qqvideo_ori/0/c0188xk4c3z_496_280/0',
							source : 'https://v.qq.com/iframe/player.html?vid=c0188xk4c3z&tiny=0&auto=0'
						}}
					},
					{
						key : '泽',
						msg : {'崔泽':{
							type : 'video',
							image : 'http://puui.qpic.cn/qqvideo_ori/0/d05020davl1_496_280/0',
							source : 'https://v.qq.com/iframe/player.html?vid=g0399i6y9re&tiny=0&auto=0'
						}}
					},
					{
						key : '龙',
						msg : {'东龙':{
							type : 'video',
							image : 'http://puui.qpic.cn/qqvideo_ori/0/m0364cxj4xl_496_280/0',
							source : 'https://v.qq.com/iframe/player.html?vid=m0364cxj4xl&tiny=0&auto=0'
						}}
					}
				],
				default : {'正焕' : '了解组件更多相关配：<a href="https://github.com/jlianphoto/react-auto-dialog">https://github.com/jlianphoto/react-auto-dialog<a/>'}
			}
		}
	}

	
	process = (percentage)=>{
		this.setState({
			process : percentage
		})
		if (percentage===100) {
			this.setState({
				isShow : 'none'
			})
		}
	}



	render() {
		return (
		    <div>	
		    	<div className='preload-wrapper' style={{display:this.state.isShow}}>
		    		<section>
		    			<img src={require('./img/preload.jpg')} alt='loading'/>
		    			<p>{this.state.process}%</p>
		    		</section>
		    		
		    	</div>
		  		<Wechat dialog={dialog} config={this.config}></Wechat>
		    </div>
		);
	}
}

export default App;
