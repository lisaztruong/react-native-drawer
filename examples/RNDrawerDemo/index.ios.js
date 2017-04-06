/**
 * rn-drawer example app
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  AppRegistry,
  Text,
  View,
} from 'react-native';

import styles from './styles';
const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}

import Drawer from 'react-native-drawer';
import MyMainView from './MyMainView';
import MyControlPanel from './ControlPanel';

// import tweens from './tweens';

let counter = 0;
export class RNDrawerDemo extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      drawerType: 'overlay',
      openDrawerOffset:100,
      closedDrawerOffset:0,
      panOpenMask: .1,
      panCloseMask: .9,
      relativeDrag: false,
      panThreshold: .25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: 'linear',
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: false,
      negotiatePan: false,
      rightSide: true,
    };
  }

  setDrawerType(type){
    this.setState({
      drawerType: type
    })
  }

  tweenHandler(ratio){
    if(!this.state.tweenHandlerPreset){ return {} }
    return tweens[this.state.tweenHandlerPreset](ratio)
  }

  noopChange(){
    this.setState({
      changeVal: Math.random()
    })
  }

  openDrawer(){
    this.drawer.open()
  }

  setStateFrag(frag) {
    this.setState(frag);
  }

  goToLisa() {
  this.props.navigator.push({
    component: Lisa,
    title: 'Lisa',
  })
}

goToNewsfeed() {
  this.props.navigator.push({
    component: Newsfeed,
    title: 'Newsfeed',
  })
}

goToLogin() {
  this.props.navigator.push({
    component: Login,
    title: 'Login',
  })
}
goToSignup() {
  this.props.navigator.push({
    component: Signup,
    title: 'Sign up'
  })
}

  render() {
    var controlPanel = <MyControlPanel closeDrawer={() => {
      this.drawer.close();
    }} />
    return (

      <Drawer
        ref={c => this.drawer = c}
        type={this.state.drawerType}
        animation={this.state.animation}
        openDrawerOffset={this.state.openDrawerOffset}
        closedDrawerOffset={this.state.closedDrawerOffset}
        panOpenMask={this.state.panOpenMask}
        panCloseMask={this.state.panCloseMask}
        relativeDrag={this.state.relativeDrag}
        panThreshold={this.state.panThreshold}
        content={controlPanel}
        styles={drawerStyles}
        disabled={this.state.disabled}
        tweenHandler={this.tweenHandler.bind(this)}
        tweenDuration={this.state.tweenDuration}
        tweenEasing={this.state.tweenEasing}
        acceptDoubleTap={this.state.acceptDoubleTap}
        acceptTap={this.state.acceptTap}
        acceptPan={this.state.acceptPan}
        tapToClose={this.state.tapToClose}
        negotiatePan={this.state.negotiatePan}
        changeVal={this.state.changeVal}
        side={this.state.rightSide ? 'right' : 'left'}
        >
        <MyMainView
          drawerType={this.state.drawerType}
          setParentState={this.setStateFrag.bind(this)}
          openDrawer={this.openDrawer.bind(this)}
          openDrawerOffset={this.state.openDrawerOffset}
          closedDrawerOffset={this.state.closedDrawerOffset}
          panOpenMask={this.state.panOpenMask}
          panCloseMask={this.state.panCloseMask}
          relativeDrag= {this.state.relativeDrag}
          panStartCompensation= {this.state.panStartCompensation}
          tweenHandlerOn={this.state.tweenHandlerOn}
          disabled={this.state.disabled}
          panThreshold={this.state.panThreshold}

          acceptTap={this.state.acceptTap}
          acceptDoubleTap={this.state.acceptDoubleTap}
          acceptPan={this.state.acceptPan}
          tapToClose={this.state.tapToClose}

          rightSide={this.state.rightSide}


          />
          <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <TouchableOpacity onPress={this.goToLogin.bind(this)} style={lisastyles.button}>
          <Text style={lisastyles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goToSignup.bind(this)} style={lisastyles.button}>
          <Text style={lisastyles.buttonText}>
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goToNewsfeed.bind(this)} style={lisastyles.button}>
          <Text style={lisastyles.buttonText}>
            -nf-
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goToLisa.bind(this)} style={lisastyles.lisabutton}>
          <Text style={lisastyles.buttonText}>
            LISA
          </Text>
        </TouchableOpacity>
      </View>
      </Drawer>
    );
  }
}

var lisastyles = StyleSheet.create({
  buttonText: {
    fontSize: 40,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 80,
    width: 160,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 80,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  lisabutton: {
    height: 80,
    width: 160,
    backgroundColor: 'pink',
    borderColor: 'pink',
    borderWidth: 1,
    borderRadius: 80,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
});

AppRegistry.registerComponent('RNDrawerDemo', () => RNDrawerDemo);
