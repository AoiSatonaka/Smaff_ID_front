import React,{Component} from 'react';
// import {Component} from 'react-dom'
import AppBar from '../components/AppBar'


export default class Home extends Component {

  async componentWillMount() {
    //データベース接続(Goのapiを呼ぶ)
    // this.state
  }

  render(){
    return(
      <div>
        <AppBar UserID={114514} UserName={"里中　蒼"} />
      </div>
    );
  }
}