import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../style/styles';


export default class SliderHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderHeader() {
    // console.log("header Props", this.props)
    // console.log("modal slider Props", this.modalSliderProps)
    return (
      <View style={styles.headerBox}>
        <TouchableOpacity onPress={ this.props.BackButtonFunc}>
          
          <Image
            style={styles.backIcon}
            source={require('image/backIcon.png')}
          />
        </TouchableOpacity>

        <View style={styles.deleteSendBox}>
          <TouchableOpacity onPress={this.props.deleteCurrentImage}>
            {/* <Image style={styles.backIcon} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} /> */}
            <Image
              style={styles.trashBtn}
              source={require('image/deleteFilled.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.onSend}>
            {/* <Image style={styles.backIcon} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} /> */}
            <Image
              style={styles.sendBtn}
              source={require('image/sendIcon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }




  render() {
    return (
      this.renderHeader()
    );
  }
}
