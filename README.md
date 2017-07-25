# react-auto-dialog

create auto dialog with react in wechat

## Feature

- auto dialog
- role assignment
- image preview
- video
- fuzzy matching


## Preview

![](https://jlianphoto.github.io/react-auto-dialog/img/GIF1.gif)

![](https://jlianphoto.github.io/react-auto-dialog/img/Gif2.gif)

## Demo

![](https://jlianphoto.github.io/react-auto-dialog/img/1500814394.png)


## Requirements

React

[flexible](https://github.com/amfe/lib-flexible/)

Wechat JS-SDK

## Used

```bash
npm react-auto-dialog -S
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

## DOCS

[中文文档](https://github.com/jlianphoto/react-auto-dialog/blob/master/docs/docs.md)


### config

|key|description|defualt|type/options|
|:---|---|---|---|
| `speed`|the dialog's speed |2000|Number|
|`me`|the message of the host||Object|
|`orthers`|orther people message||Array|
|`fuzzy`|when the dialog has finished , match the customer's word and answer the question.||Array|

- Eample

```js
let config = {
  speed: 2000,
  me: {
    name : '德善',
    img : require('./img/de.jpg')
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

video

`{'name' : {
	type : 'video',
	image : '../img/videoCover.jpg',
	source : 'http://iframe.html'
}}`

question

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
		image : './img/videCover.jpg',
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





