import React, { Component } from 'react';
import './wechat.scss';

class Wechat extends Component {
  constructor(props) {
      super(props);
      this.dialogs = props.dialog;
      this.index = 1;

      this.state = {
        dialogs : [this.dialogs[0]]
      };

      this.timer = null;
      this.add = this.add.bind(this);
  }


  add(){
    let aaa = {
      '德善' : '粉肠粉肠粉肠粉肠粉肠粉肠'
    }
    this.state.dialogs.push(aaa);
    this.setState({
      data : this.state.data
    })
    let wx = window.wx;
    console.log(111)
    wx.previewImage({
        current: 'http://img4.imgtn.bdimg.com/it/u=1365112016,127878692&fm=26&gp=0.jpg', // 当前显示图片的http链接
        urls: ['http://img4.imgtn.bdimg.com/it/u=1365112016,127878692&fm=26&gp=0.jpg','http://img4.imgtn.bdimg.com/it/u=1365112016,127878692&fm=26&gp=0.jpg'] // 需要预览的图片http链接列表
    });
  }



  componentDidMount(){
    console.log(this.dialogs)
    console.log(this.props.config)
    //timer
    // this.$view = document.querySelector('#hiddenView');
    // this.timer = setInterval(()=>{
    //   if (this.index >= this.dialogs.length) {
    //     clearInterval(this.timer);
    //     return
    //   }
    //   this.state.dialogs.push(this.dialogs[this.index])
    //   this.setState({
    //     dialogs : this.state.dialogs
    //   })
    //   this.$view.scrollIntoView()
    //   this.index++;
    // },this.props.data.speed)
  }


  render() {

    // let list = this.state.dialogs.map((item,index)=>{
    //   let name = Object.keys(item)[0],
    //       content = item[name],
    //       img = null,
    //       type = '';

    //   if (name==='me') {
    //     name = this.props.data.mine.name;
    //     img = this.props.data.mine.img;
    //     type = 'mine'
    //   }else{
    //     img = this.props.data.orthers.find(obj=>obj.name === name).img;
    //     type = 'others';
    //   }


    //     return  <li className={type} key={index}>
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
        <button onClick={this.add}>试试</button>
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
        </ul>
        <div id="hiddenView"></div>
      </div>
    );
  }
}

export default Wechat;
