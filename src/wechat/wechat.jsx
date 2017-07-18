import React, { Component } from 'react';
import './wechat.scss';

class Wechat extends Component {
  constructor(props) {
      super(props);
      this.dialogs = props.dialog;
      this.index = 0;

      this.state = {
        dialogs : [],
        isShow : false,
        writable : false,
        isSend : false,
        iframeSource:'https://v.qq.com/iframe/player.html?vid=m0357eb6ia2&tiny=0&auto=0',
      };

      this.timer = null;

      this.key = '';
      this.imgArr = [];
  }


  showImg = (source) =>{
    let wx = window.wx;
    wx.previewImage({
        current: 'source', // 当前显示图片的http链接
        urls: this.imgArr // 需要预览的图片http链接列表
    });
  }


  closeRadio = ()=>{
    this.setState({
      isShow : false
    })
    this.openTimer();
  }


  showRadio =(source) =>{
    this.closeTimer();
    this.setState({
      iframeSource : source,
      isShow : true
    })
  }


  inputChange = (e)=>{
    let isSend = e.target.value.length>0?true:false
    this.setState({
        isSend : isSend
    })
  }

  sendMsg = ()=>{
    if (!this.state.isSend) return;

    let $value = this.refs.input.value;
    let answer = {'me' : $value};

    this.state.dialogs.push(answer);
    if ($value.indexOf(this.key) == -1) {
      this.dialogs.splice(this.index,1);
    }else{
      this.dialogs.splice(this.index+1,1);
    }

    this.refs.input.value = '';
    this.setState({
        isSend : false
    })

    this.openTimer();
  }


  closeTimer = ()=>{
    clearInterval(this.timer);
    this.setState({writable : true});
  }


  openTimer = ()=>{
    this.timer = setInterval(()=>{
      if (this.index >= this.dialogs.length) {
        this.closeTimer();
        return
      }

      this.state.dialogs.push(this.dialogs[this.index]);
      this.setState({
        dialogs : this.state.dialogs,
        writable : false
      })
      this.$view.scrollIntoView()



      //if it's question , stop timer;
      let name = Object.keys(this.dialogs[this.index])[0],
          content = this.dialogs[this.index][name];
      let type = '';
      if (typeof content === 'string') {
        type = 'txt';
      }else{
        type = content.type;
      }

      if (type === 'question') {
        this.key = content.key;
        this.closeTimer();
      }

      if (type === 'img') {
        this.imgArr.push(content.source);
      }




      this.index++;
    },this.props.config.speed)
  }




  componentDidMount(){
    //timer
    this.$view = document.querySelector('#hiddenView');
    
    this.openTimer();

  }


  listHandler = ()=>{
      let list = this.state.dialogs.map((item,index)=>{
        let name = Object.keys(item)[0],
            content = item[name],
            img = null,
            who = '';

        if (name==='me') {
          name = this.props.config.mine.name;
          img = this.props.config.mine.img;
          who = 'mine'
        }else{
          img = this.props.config.orthers.find(obj=>obj.name === name).img;
          who = 'others';
        }


        let type = '';
        if (typeof content === 'string') {
          type = 'txt';
        }else{
          type = content.type;
        }


        let diffElement = null;
        switch(type){
          case 'img':
            var source = content.source;
            diffElement = <img src={source} onClick={this.showImg.bind(this , source)} alt='' className='type-img'/>
            break;

          case 'video':
            var cover = content.cover;
            var source = content.source;
            diffElement = <span className="radio" onClick={this.showRadio.bind(this,source)}>
                            <i className="icon-play"></i>
                            <img  src={cover} alt='' className='type-img'/>
                          </span>
            break
            
          case 'question':
            var question = content.msg;
            diffElement = <div className='bubble'>{question}</div>
            break

          default :
            diffElement = <div className='bubble'>{content}</div>
        }

        return  <li className={who} key={index}>
                    <img src={img} alt="" className='portrait'/>
                    <div className="content">
                      <p>{name}</p>
                      {diffElement}
                    </div>
                  </li>
      })

      return list;

  }


  render() {


    let list = this.listHandler();


    return (
      <div>
        <ul className = 'wechat'>
          {/*
          <li  className="mine" >
           <img src={require('../img/huan.jpg')} className='portrait' alt=""/>
           <div className="content">
             <p>sdf</p>
             <div className='bubble'>
               asfadfasdfa
             </div>
           </div>
          </li>  
          <li className="others">
            <img src={require('../img/huan.jpg')}  className='portrait' alt=''/>
            <div className='content'>
              <p>我啊</p>
              <img src='http://img4.imgtn.bdimg.com/it/u=1365112016,127878692&fm=26&gp=0.jpg' onClick={this.add} alt='' className='type-img'/>
            </div>
          </li>
          <li className="others">
            <img src={require('../img/huan.jpg')}  className='portrait' alt=''/>
            <div className='content'>
              <p>我啊</p>
              <span className="radio" onClick={this.showRadio}>
                <i className="icon-play"></i>
                <img  src='http://img4.imgtn.bdimg.com/it/u=1365112016,127878692&fm=26&gp=0.jpg' onClick={this.add} alt='' className='type-img'/>
              </span>
            </div>
          </li>
          */} 

          {list}
        </ul>
        <div className={this.state.isShow?'radio-wrapper':'hide radio-wrapper'}>
          <i className='icon-close' onClick={this.closeRadio}></i>
          {this.state.isShow && <iframe title="video" src={this.state.iframeSource}></iframe>}
        </div>
        

        <section className='input-wrapper'>
          <input ref='input' type="text" disabled={!this.state.writable} onKeyUp={this.inputChange}/>
          <button className={this.state.isSend?'active':''} onClick={this.sendMsg}>发送</button>
        </section>
        <div id="hiddenView"></div>
      </div>
    );
  }
}

export default Wechat;
