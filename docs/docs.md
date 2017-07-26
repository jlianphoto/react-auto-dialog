# react-auto-dialog

模仿微信对话组件

## Feature

- 自动对话
- 自定义多人物
- 图片预览（使用微信的js-sdk）
- 视频
- 模糊匹配


## Used

```bash
npm install -S react-auto-dialog
```

```js
import reactAutoDialog from 'react-auto-dialog'


class App extends Component {
  render() {
    return (
      <reactAutoDialog dialog={dialog} config={config}></reactAutoDialog>
    );
  }
}
```


### config

|key|description|defualt|type/options|
|:---|---|---|---|
| `speed`|对话速度 |2000|Number|
|`me`|定义自己（头像，人名）||Object|
|`orthers`|定义其他人||Array|
|`fuzzy`|自动播放结束时 ， 模糊匹配用户输入后的反馈.||Array|

- Eample

```js
let config = {
  //对话速度
  speed: 2000,
  me: {
    name : '德善', ////昵称
    img : require('./img/de.jpg') //头像
  },
  orthers:[
    {
      name : '正峰',
      img : '//img5.imgtn.bdimg.com/it/u=3451266450,2355062325&fm=26&gp=0.jpg'
    },
    {
      name : '正峰妈妈',
      img : '//img0.imgtn.bdimg.com/it/u=217392933,3688331757&fm=26&gp=0.jpg'
    },
  ],
  //自动对话结束后，用户任意输入一个字词，会匹配answer里面的一个key值 ， 例如 用户输入 123 ， 则反馈{'正峰' : '你输入1干什么'} ， 没有匹配到反馈default
  fuzzy : {
    answer : [
      {
        key : '1',
        msg :  {'正峰' : '你输入1干什么'}
      },
      {
        key : 'a',
        msg : {'正峰' : '你输入a干什么'}
      }
    ],
    default : {'正峰' : '了解组件更多相关配'}
  }
}

```


### dialog

tip

`{'tip' : 'this is a tip'}`

text

`{'name' : 'people's message'}`

image

`{'name' : {
	type : 'img',
	image : '../img/img1.jpg'
}}`

video （建议使用腾讯视频的分享 ， 把iframe的链接写入source）

`{'name' : {
	type : 'video',
	image : '../img/videoCover.jpg',
	source : 'http://iframe.html'
}}`

question (设置type为question , 自动对话会关闭 ， 等待用户输入 ， 用户输入后与key 进行匹配 ， 用户模糊匹配成功， 则返回下一条dialog , 匹配失败，则跳过下一条dialog ，开始自动播放)

`{'name' : {
	type : 'question',
	msg : 'your question',
	key : 'the key for match'
}}`


- Example

```js
let dialog = [
	{'tip' : 'NO.01 温暖的一句话'},
	{'正焕' : '哥，那手术失败的几率都不到百分之三，我都查过了'},
	{'正峰' : '小时候得心脏病的几率连百分之二都不到，所以哥哥很害怕那百分之三'},

	{'tip' : 'NO.03  再见初恋'},
	{'正焕' : '在这儿干什么'},
	{'me' : '有事想问你'},
	{'正焕' : '进我屋说吧，太冷了'},

	//image
	{'东龙' : {
		type : 'img',
		image : require('./img/img2.jpg')
	}},
	{'tip' : '......'},
	//video
	{'正焕' : {
		type : 'video',
		image : './img/videoCover.jpg',
		source : '//v.qq.com/iframe/player.html?vid=m0357eb6ia2&tiny=0&auto=0'
	}},
	
	//question
	{'东龙' : {
		type:'question',
		msg:'你觉得正八是不是傻',
		key : '不'
	}},
	{'东龙' : '可怜的正八，只是感到了观众'},
	{'东龙' : '我也觉得他很傻，可是啊，他就这样子，我也拿他没办法'},
]
```

[Full example code](https://github.com/jlianphoto/react-auto-dialog/blob/master/src/App.jsx)





