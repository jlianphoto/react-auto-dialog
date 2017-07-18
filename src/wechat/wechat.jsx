import React, { Component } from 'react';
import './wechat.scss';

class Wechat extends Component {
  constructor(props) {
      super(props);
      this.dialogs = props.dialog;
      this.index = 1;

      this.state = {
        dialogs : [this.dialogs[0]],
        isShow : false,
        writable : true,
        isSend : false,
        iframeSource:'https://v.qq.com/iframe/player.html?vid=m0357eb6ia2&tiny=0&auto=0',
      };

      this.timer = null;
  }


  showImg = () =>{
    console.log(1111)
  }

  closeRadio = ()=>{
    this.setState({
      isShow : false
    })
  }

  showRadio = (source)=>{
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
    this.refs.input.value = '';
    this.setState({
        isSend : false
    })
  }




  componentDidMount(){
    //timer
    this.$view = document.querySelector('#hiddenView');
    this.timer = setInterval(()=>{
      if (this.index >= this.dialogs.length) {
        clearInterval(this.timer);
        return
      }
      this.state.dialogs.push(this.dialogs[this.index])
      this.setState({
        dialogs : this.state.dialogs
      })
      this.$view.scrollIntoView()
      this.index++;
    },5000)
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
          case 'txt':
            diffElement = <div className='bubble'>
                            {content}
                          </div>
            break;

          case 'img':
            var source = content.source;
            diffElement = <img src={source} onClick={this.showImg} alt='' className='type-img'/>
            break;

          case 'video':
            var cover = content.cover;
            var source = content.source;
            diffElement = <span className="radio" onClick={(source) =>{this.showRadio(source)}}>
                            <i className="icon-play"></i>
                            <img  src={cover} alt='' className='type-img'/>
                          </span>
            break
            
          case 'question':
            var question = content.msg;
            diffElement = <div className='bubble'>
                            {question}
                          </div>
            break
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
          {this.state.isShow && <iframe allowfullscreen="true" title="video" src={this.state.iframeSource}></iframe>}
        </div>
        

        <section className='input-wrapper'>
          <input ref='input' type="text" disabled={!this.state.writable} onKeyUp={this.inputChange}/>
          <button className={this.state.isSend&&'active'} onClick={this.sendMsg}>发送</button>
        </section>
        <div id="hiddenView"></div>
      </div>
    );
  }
}

export default Wechat;
