import React, { Component } from 'react';
import createReactClass from 'create-react-class';
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
        isSend : false
      };

      this.timer = null;
  }


  closeRadio = ()=>{
    this.setState({
      isShow : false
    })
  }

  showRadio = ()=>{
    this.setState({
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



  // componentDidMount(){
  //   console.log(this.dialogs)
  //   console.log(this.props.config)
  //   //timer
  //   this.$view = document.querySelector('#hiddenView');
  //   this.timer = setInterval(()=>{
  //     if (this.index >= this.dialogs.length) {
  //       clearInterval(this.timer);
  //       return
  //     }
  //     this.state.dialogs.push(this.dialogs[this.index])
  //     this.setState({
  //       dialogs : this.state.dialogs
  //     })
  //     this.$view.scrollIntoView()
  //     this.index++;
  //   },this.props.config.speed)
  // }


  render() {

    // let list = this.state.dialogs.map((item,index)=>{
    //   let name = Object.keys(item)[0],
    //       content = item[name],
    //       img = null,
    //       who = '';

    //   if (name==='me') {
    //     name = this.props.config.mine.name;
    //     img = this.props.config.mine.img;
    //     who = 'mine'
    //   }else{
    //     img = this.props.config.orthers.find(obj=>obj.name === name).img;
    //     who = 'others';
    //   }


    //   let type = '';
    //   if (typeof content === 'string') {
    //     type = 'txt';
    //   }else{
    //     type = content.type;
    //   }


    //   switch(type){
    //     case 'txt':
          
    //       break;
    //     case 'img':
          
    //       break;
    //     case 'video':

    //       break
    //     case 'question':

    //       break
    //     case 'answer':

    //       break
    //   }

      

    //     return  <li className={who} key={index}>
    //               <img src={img} alt=""/>
    //               <div className="content">
    //                 <p>{name}</p>
    //                 <div className='bubble'>
    //                   {content}
    //                 </div>
    //               </div>
    //             </li>
    // })





    return (
      <div>
        <ul className = 'wechat'>
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
        </ul>
        <div className={this.state.isShow?'radio-wrapper':'hide radio-wrapper'}>
          <i className='icon-close' onClick={this.closeRadio}></i>
          {this.state.isShow && <iframe allowfullscreen="true" src="https://v.qq.com/iframe/player.html?vid=m0357eb6ia2&tiny=0&auto=0"></iframe>}
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
