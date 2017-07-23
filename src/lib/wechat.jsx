import React, { Component } from 'react';
import preload from './preload';
import './wechat.scss';

class Wechat extends Component {
  constructor(props) {
      super(props);
      this.dialogs = props.dialog;
      this.index = 0;

      this.speed = this.props.config.speed || 2000;

      this.state = {
        dialogs : [],
        isShow : false,
        writable : false,
        isSend : false,
        iframeSource:'',
      };

      this.timer = null;

      this.key = '';
      this.imgArr = [];

      this.end = false;
  }


  showImg = (source) =>{
    let wx = window.wx;
    if (wx) {
      wx.previewImage({
          current: source,
          urls: this.imgArr
      });
    }
  }


  closeRadio = ()=>{
    this.setState({
      isShow : false
    })
    this.state.writable || this.openTimer();
  }


  showRadio =(source) =>{
    this.closeTimer();
    this.setState({
      iframeSource : source,
      isShow : true
    })
  }


  sendMsg = ()=>{
    if (!this.state.writable) return;

    let $value = this.refs.input.value;
    let answer = {'me' : $value};
    this.state.dialogs.push(answer);

    if (this.end) {
      this.defaultFuzzyAnswer($value)
    }else{
      this.fuzzyAnswer($value);
    }

    this.refs.input.value = '';
    this.setState({
      dialogs : this.state.dialogs,
      writable : false
    })

    this.openTimer();


  }

  //fuzzy answer
  fuzzyAnswer($value){
    if ($value.indexOf(this.key) === -1) {
      this.dialogs.splice(this.index,1);
    }else{
      this.dialogs.splice(this.index+1,1);
    }
  }

  //default fuzzey answer
  defaultFuzzyAnswer($value){

    let match = this.props.config.fuzzy.answer.find(item=>$value.indexOf(item.key) !== -1);
    let answer = null;
    if (match) {
      answer =  match.msg
    }else{
      answer = this.props.config.fuzzy.default;
    }
    this.dialogs.push(answer);

  }


  closeTimer = ()=>{
    clearInterval(this.timer);
    this.setState({writable : true});
  }


  openTimer = ()=>{
    this.timer = setInterval(()=>{
      if (this.index >= this.dialogs.length) {
        this.closeTimer();
        this.end = true;
        return
      }

      this.state.dialogs.push(this.dialogs[this.index]);
      this.setState({
        dialogs : this.state.dialogs,
        writable : false
      })


      //if it's question , stop timer; 
      //if the number of words are more than 50 , slow down
      let name = Object.keys(this.dialogs[this.index])[0],
          content = this.dialogs[this.index][name];
      let type = '';
      if (typeof content === 'string') {
        type = 'txt';
        this.slowDown(content);
      }else{
        type = content.type;
      }

      if (type === 'question') {
        this.key = content.key;
        this.closeTimer();
      }

      if (type === 'img') {
        this.imgArr.push(content.image);
      }


      this.index++;
    },this.speed)
  }


  slowDown(words){
    let n = parseInt(words.length/50,10); 
    if (n>0) {
      clearInterval(this.timer);

      let time = this.speed + 1000*n;
      setTimeout(_=>{
          this.openTimer();
      },time)
    }
  }




  componentDidMount(){
    this.$view = document.querySelector('#hiddenView');
    
    //start
    preload(this.props.config , this.props.dialog , _=>this.openTimer());
  }

  componentDidUpdate(){
    this.$view.scrollIntoView();
  }


  listHandler = ()=>{
      let list = this.state.dialogs.map((item,index)=>{
        let name = Object.keys(item)[0],
            content = item[name],
            img = null,
            who = '';

        if (name === 'tip') {
          return <li className='tips' key={index}><span>{content}</span></li>
        }

        let type = '';
        if (typeof content === 'string') {
          type = 'txt';
        }else{
          type = content.type;
        }

        if (name==='me') {
          name = this.props.config.me.name;
          img = this.props.config.me.img;
          who = 'mine'
        }else{
          img = this.props.config.orthers.find(obj=>obj.name === name).img;
          who = 'others';
        }


        

        let diffElement = null;
        switch(type){
          case 'img':
            var source = content.image;
            diffElement = <img src={source} onClick={this.showImg.bind(this , source)} alt='' className='type-img'/>
            break;

          case 'video':
            var cover = content.image;
            // eslint-disable-next-line
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
            diffElement = <div className='bubble' dangerouslySetInnerHTML={{__html: content}} />
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
          {list}
        </ul>
        <div className={this.state.isShow?'wechat-radio-wrapper':'hide wechat-radio-wrapper'}>
          <i className='icon-close' onClick={this.closeRadio}></i>
          {this.state.isShow && <iframe title="video" src={this.state.iframeSource}></iframe>}
        </div>
        

        <section className='wechat-input-wrapper'>
          <input ref='input' type="text" disabled={!this.state.writable}/>
          <button onClick={this.sendMsg}>发送</button>
        </section>
        <div id="hiddenView"></div>
      </div>
    );
  }
}

export default Wechat;
