import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ModalSlider from './ModalSlider';
import {moderateScale} from 'react-native-size-matters';
import Video from 'react-native-video';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // images: [
      //   'https://placeimg.com/640/640/people',
      //   'https://placeimg.com/640/640/nature',
      //   'https://placeimg.com/640/640/nature',
      //   'https://placeimg.com/640/640/people',
      // ],
      allPath: [
        {
          filename: 'image-f260adeb-15bf-4673-9fae-45846211ce77.jpg',
          size: 0,
          type: 'file/text.txt',
          uri: 'https://www.w3schools.com/html/movie.mp4',
        },
        {
          filename: 'image-f260adeb-15bf-4673-9fae-45846211ce77.jpg',
          size: 0,
          type: 'image/jpeg',
          uri: 'https://placeimg.com/640/640/nature',
        },
        {
          filename: 'image-f260adeb-15bf-4673-9fae-45846211ce77.jpg',
          size: 0,
          type: 'image/jpeg',
          uri: 'https://placeimg.com/640/640/people',
        },
        {
          filename: 'image-f260adeb-15bf-4673-9fae-45846211ce77.jpg',
          size: 0,
          type: 'video/org',
          uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
        },
        {
          filename: 'image-f260adeb-15bf-4673-9fae-45846211ce77.jpg',
          size: 0,
          type: 'image/jpeg',
          uri: 'https://placeimg.com/640/640/animals',
        },
        {
          filename: 'image-f260adeb-15bf-4673-9fae-45846211ce77.jpg',
          size: 0,
          type: 'audio/org',
          uri: 'https://www.w3schools.com/tags/horse.mp3',
        },
        {
          filename: 'image-f260adeb-15bf-4673-9fae-45846211ce77.jpg',
          size: 0,
          type: 'video/org',
          uri: 'https://www.w3schools.com/html/movie.mp4',
        },
        {
          filename: 'image-f260adeb-15bf-4673-9fae-45846211ce77.jpg',
          size: 0,
          type: 'audio/org',
          uri: 'https://www.w3schools.com/tags/horse.mp3',
        },
        {
          filename: 'image-f260adeb-15bf-4673-9fae-45846211ce77.jpg',
          size: 0,
          type: 'video/org',
          uri: 'https://www.w3schools.com/html/movie.mp4',
        },
        {
          filename: 'image-f260adeb-15bf-4673-9fae-45846211ce77.jpg',
          size: 0,
          type: 'audio/org',
          uri: 'https://www.w3schools.com/tags/horse.mp3',
        },
        {
          filename: 'image-f260adeb-15bf-4673-9fae-45846211ce77.jpg',
          size: 0,
          type: 'video/org',
          uri: 'https://www.w3schools.com/html/movie.mp4',
        },
        {
          filename: 'image-f260adeb-15bf-4673-9fae-45846211ce77.jpg',
          size: 0,
          type: 'audio/org',
          uri: 'https://www.w3schools.com/tags/horse.mp3',
        },
        {
          filename: 'image-f260adeb-15bf-4673-9fae-45846211ce77.jpg',
          size: 0,
          type: 'video/org',
          uri: 'https://www.w3schools.com/html/movie.mp4',
        },
        
      ],
      isGalleryViewVisible: true,
    };
  }

  openUploadImage = () => {
    this.setState({isGalleryViewVisible: !this.state.isGalleryViewVisible});
  };
  selectedImages = selectedImages => {
    alert('send image', selectedImages);
  };

  render() {
    let {allPath} = this.state;
    // console.log("all state",this.state)
    return (
      // <View style={{flex: 1}}>
      //   <TouchableOpacity
      //     style={{backgroundColor: 'lightblue', padding: moderateScale(10)}}
      //     onPress={() => this.openUploadImage()}>
      //     <Text>open Upload Image</Text>
      //   </TouchableOpacity>

        <ModalSlider
          allPath={allPath}
          // {...this.state}
          visible={this.state.isGalleryViewVisible}
          onSend={selectedImages => this.selectedImages(selectedImages)}
          onBack={this.openUploadImage}
          // updateImage={this.updateImage}
        />
        
      // </View>
    );
  }
}
var styles = StyleSheet.create({
  backgroundVideo: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    backgroundColor:"red",
    height:"100%",
    width:"100%",
  },
});