import React, { Component } from 'react';
import {
  Switch,
  SliderIOS,
  PickerIOS,
  PickerItemIOS,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

import SliderJS from 'react-native-slider';

import styles from './styles';
import Button from './Button';

export default class MyMainView extends Component {
  setParentState(args){
    this.props.setParentState(args)
  }

  render(){
    return (
      <ScrollView
        pointerEvents="box-none"
        style={styles.scrollView}
        scrollEventThrottle={200}
        contentInset={{top: 0}}
        >
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Drawer Configuration
          </Text>

          <Button
            onPress={this.props.openDrawer}
            text="Open Drawer"
            />

          {/*type*/}
          <Text style={styles.categoryLabel}>Drawer Type</Text>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Overlay</Text>
            <Switch
              onValueChange={this.setParentState.bind(this, {drawerType:'overlay'})}
              style={styles.rowInput}
              disabled={this.props.drawerType === 'overlay'}
              value={this.props.drawerType === 'overlay'} />
          </View>
          
          {/*others*/}
          <Text style={styles.categoryLabel}>Others</Text>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Accept Tap</Text>
            <Switch
              onValueChange={ (value) => { this.setParentState({'acceptTap': value})} }
              style={styles.rowInput}
              value={this.props.acceptTap} />
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Accept Pan</Text>
            <Switch
              onValueChange={ (value) => { this.setParentState({'acceptPan': value})} }
              style={styles.rowInput}
              value={this.props.acceptPan} />
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Right Side (not hot changeable)</Text>
            <Switch
              onValueChange={ (value) => { this.setParentState({'rightSide': value})} }
              style={styles.rowInput}
              value={this.props.rightSide} />
          </View>
        </View>
      </ScrollView>
    )
  }
}



// Shadow props are not supported in React-Native Android apps.
// The below part handles this issue.

// iOS Styles
var iosStyles = StyleSheet.create({
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 5},
    shadowRadius: 5,
    shadowOpacity: 0.75,
  }
});

const iosMinTrTintColor = '#1073ff';
const iosMaxTrTintColor = '#b7b7b7';
const iosThumbTintColor = '#343434';

// Android styles
const androidStyles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
  },
  track: {
    height: 4,
    borderRadius: 4 / 2,
  },
  thumb: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
  },
  touchArea: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  debugThumbTouchArea: {
    position: 'absolute',
    backgroundColor: 'green',
    opacity: 0.5,
  }
});

const androidMinTrTintColor = '#26A69A';
const androidMaxTrTintColor = '#d3d3d3';
const androidThumbTintColor = '#009688';


const sliderStyles = (Platform.OS === 'ios') ? iosStyles : androidStyles;
const minimumTrackTintColor = (Platform.OS === 'ios') ? iosMinTrTintColor : androidMinTrTintColor;
const maximumTrackTintColor = (Platform.OS === 'ios') ? iosMaxTrTintColor : androidMaxTrTintColor;
const thumbTintColor = (Platform.OS === 'ios') ? iosThumbTintColor : androidThumbTintColor;
