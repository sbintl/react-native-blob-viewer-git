import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ModalSlider from './ModalSlider';
import { moderateScale } from 'react-native-size-matters';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://placeimg.com/640/640/nature',
        'https://placeimg.com/640/640/people',
        'https://placeimg.com/640/640/people',
        // 'https://placeimg.com/640/640/animals',
        // 'https://placeimg.com/640/640/beer',
        // 'https://placeimg.com/640/640/people',
        // 'https://placeimg.com/640/640/animals',
        // 'https://placeimg.com/640/640/beer',
        // 'https://placeimg.com/640/640/people',
        // 'https://placeimg.com/640/640/animals',
        // 'https://placeimg.com/640/640/beer',
        // 'https://placeimg.com/640/640/people',
        // 'https://placeimg.com/640/640/animals',
        // 'https://placeimg.com/640/640/beer',
      ],
      isGalleryViewVisible: true,
    };
  }
  componentDidMount() {
    this.toggleGalleryVisible();
  }
  selectedImages(images) {
    this.toggleGalleryVisible(), 
    console.log('final selected images', images);
  }
  updateImage(updateImage){
    console.log('delete update', updateImage)
    // if(){

    // }?
    this.setState({
      images:updateImage
    })
  }
  backBtn(backBtn) {
    this.toggleGalleryVisible()
    console.log("condition is")
  }

  toggleGalleryVisible() {
    this.setState({isGalleryViewVisible: !this.state.isGalleryViewVisible});
  }
  openUploadImage() {
    this.toggleGalleryVisible()
  }

  render() {
    let {images} = this.state;
    // console.log(images ,"app   status")

    return (
      <View style={{flex:1}}>
        <TouchableOpacity style={{backgroundColor:"lightblue",padding:moderateScale(10)}} onPress={() => this.openUploadImage()}>
          <Text>open Upload Image</Text>
        </TouchableOpacity>

        {/* isGalleryViewVisible */}

        <ModalSlider
          visible={this.state.isGalleryViewVisible}
          images={images}
          onSend={selectedImages => this.selectedImages(selectedImages)}
          updatingImage={updateImage => this.updateImage(updateImage)}
          onBack={backBtn => this.backBtn(backBtn)}
        />
      </View>
    );
  }
}
