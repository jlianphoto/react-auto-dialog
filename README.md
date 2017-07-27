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

## DOCS

[中文文档](https://github.com/jlianphoto/react-auto-dialog/blob/master/docs/docs.md)


### config

|key|description|defualt|type/options|
|:---|---|---|---|
| `speed`|the dialog's speed |2000|Number|
| `preload`|picture preload |false|Boolean|
| `process`|when the preload is `true` , this function can tell you the loading progress ||Function|
|`me`|the message of the host||Object|
|`orthers`|orther people message||Array|
|`fuzzy`|when the dialog has finished , match the customer's word and answer the question.||Array|

- Eample

```js
let config = {
  speed: 2000,
  preload : true,
  process : percentage=>{console.log(percentage)}
  me: {
    name : 'myName',
    img : require('./img/myName.jpg')
  },
  orthers:[
    {
      name : 'mother',
      img : require('./img/mother.jpg')
    },
    {
      name : 'father',
      img : require('./img/father.jpg')
    },
  ],
  fuzzy : {
    answer : [
      {
        key : '1',
        msg :  {'mother' : 'hi~'}
      },
      {
        key : 'a',
        msg : {'father' : 'ok~'}
      }
    ],
    default : {'mother' : "doesn't match any keywords"}
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
	key : 'the key for matching'
}}`


- Example

```js
let dialog = [
	{'tip' : 'this is a tip'},
	{'mother' : 'how are you'},
	{'me' : 'i am find , thank you'},
	//image
	{'father' : {
		type : 'img',
		image : require('./img/img2.jpg')
	}},
	//video
	{'me' : {
		type : 'video',
		image : './img/videCover.jpg',
		source : '//v.qq.com/iframe/player.html?vid=m0357eb6ia2&tiny=0&auto=0'
	}},
	
	//question
	{'father' : {
		type:'question',
		msg:'are you ok ?',
		key : 'yes'
	}},
	{'me' : 'if this message includes yes , it will be sent'},
	{'me' : "if this message doesn't includes yes , it will be sent"},
]
```

[Full example code](https://github.com/jlianphoto/react-auto-dialog/blob/master/src/App.jsx)





