import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  TouchableHighlight,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {Component, PureComponent} from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import ImageSlider from 'react-native-image-slider';
import SliderHeader from './src/component/SliderHeader';
import styles from './src/style/styles';

export default class ModalSlider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      isDelete: false,
    };
  }
  renderSlider() {
    let {images} = this.props;
    console.log(images ,"All image")
    return (
      <ImageSlider
        images={images}
        style={styles.slider}
        customSlide={({index, item, style, width}) => (
          <View key={index} style={[style, styles.customSlide]}>
            <Image source={{uri: item}} style={styles.customImage} />
          </View>
        )}
        customButtons={(position, move, item) => (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.thumbnailImageView}
            data={images}
            extraData={images}
            renderItem={({item, index}) => {
              // console.log("renderitem",item,index,position)
              if (this.state.isDelete) {
                if (position > 0) {
                  move(position - 1);
                  this.setState({isDelete: false});
                }
              }
              if (position === index) {
                this.setState({
                  currentImageIndex: index,
                });
              }
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => move(index)}
                  style={styles.thumbnailImageBtn}>
                  <View
                    style={position === index && styles.thumbnailCurrentImage}>
                    <Image style={styles.thumbnailImage} source={{uri: item}} />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        )}
      />
    );
  }
  render() {
    console.log()
    let {currentImageIndex, isDelete} = this.state;

    if (this.props.visible) {
      return (
        <View style={styles.container}>
          <SliderHeader 
            currentImageIndex={currentImageIndex} 
            isDelete={isDelete}
            allProps = {this.props}
          />
          {this.props.images &&
            this.props.images.length > 0 &&
            this.renderSlider()}
        </View>

        // (this.renderSlider())
      );
    } else {
      return null;
    }
  }
}
