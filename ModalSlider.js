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
import styles from './src/style/styles';
import SliderHeader from './src/component/SliderHeader';
import Video from 'react-native-video';

export default class ModalSlider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      isDelete: false,
      allPath: [],
      images: [],
      // lastImageLeft: true,
    };
  }

  defaultFunction = () => {
    let {allPath} = this.props;

    let image = allPath.map((value, index, array) => value.uri);

    this.setState({
      allPath: allPath,
      images: image,
    });
  };

  renderDocuments = item => {
    switch (item.type.split('/')[0]) {
      case 'image':
        return this.renderImage(item.uri, styles.customImage);
      case 'audio':
        return this.renderAudioPlayer(item);
      case 'video':
        return this.renderVideoPlayer(item);
      case 'file':
        return (
          <Image source={require('image/file.png')} style={styles.fileImage} />
        );

      default:
        return;
    }
  };

  renderVideoPlayer(item) {
    return (
      <Video
        source={{uri: item.uri}} // Can be a URL or a local file.
        ref={ref => {
          this.player = ref;
        }} // Store reference
        fullscreen={true}
        audioOnly={true}
        paused={true}
        resizeMode="contain"
        controls={true}
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        // onError={this.videoError} // Callback when video cannot be loaded
        //   resizeMode="stretch"
        onBuffer={val => {
          console.log('Buffering', val);
        }} // Callback when remote video is buffering
        onError={val => {
          console.log('error', val);
        }}
        style={{
          height: '100%',
          width: 400,
          backgroundColor: 'red',
          // position: 'absolute',
          // top: 0,
          // left: 0,
          // bottom: 0,
          // right: 0,
        }}
      />
    );
  }
  renderAudioPlayer(item) {
    // console.log(item.uri);
    return (
      <Video
        source={{uri: item.uri}} // Can be a URL or a local file.
        ref={ref => {
          this.player = ref;
        }} // Store reference
        fullscreen={true}
        audioOnly={true}
        paused={true}
        resizeMode="contain"
        controls={true}
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        // onError={this.videoError} // Callback when video cannot be loaded
        //   resizeMode="stretch"
        onBuffer={val => {
          console.log('Buffering', val);
        }} // Callback when remote video is buffering
        onError={val => {
          console.log('error', val);
        }}
        style={{
          height: '100%',
          width: 400,
          backgroundColor: 'blue',
          // position: 'absolute',
          // top: 0,
          // left: 0,
          // bottom: 0,
          // right: 0,
        }}
      />
    );
  }

  renderThumbnail = item => {
    switch (item.type.split('/')[0]) {
      case 'image':
        return this.renderImage(item.uri, styles.thumbnailImage);
      case 'audio':
        return (
          <Image
            source={require('image/audioIcon.png')}
            style={styles.thumbnailImage}
          />
        );
      case 'video':
        return (
          <Image
            source={require('image/videoIcon2.png')}
            style={styles.thumbnailImage}
          />
        );
      case 'file':
        return (
          <Image
            source={require('image/docIcon.png')}
            style={styles.thumbnailImage}
          />
        );
    }
  };

  renderImage(uri, styles) {
    return <Image source={{uri: uri}} style={styles} />;
  }
  componentDidMount() {
    this.defaultFunction();
  }

  deleteCurrentImage = () => {
    let {images, allPath} = this.state;
    let filteredImage = images.filter(
      (item, i) => i !== this.state.currentImageIndex,
    );
    let filteredArray = allPath.filter(
      (item, i) => i !== this.state.currentImageIndex,
    );

    if (filteredImage.length == 0) {
      this.BackButtonFunc();
      this.defaultFunction();
    } else {
      this.setState({
        images: filteredImage,
        allPath: filteredArray,
        isDelete: true,
      });
    }
    // filteredImage.length == 1
    //   ? this.setState({
    //       lastImageLeft: false,
    //     })
    //   : this.setState({
    //       lastImageLeft: true,
    //     });
  };
  // scrollToIndex = () => {
  //   // let randomIndex = Math.floor(Math.random(Date.now()) * this.props.data.length);
  //   this.flatListRef.scrollToIndex({
  //     animated: true,
  //     index: this.state.currentImageIndex,
  //   });
  //   console.log(this.state.currentImageIndex);
  // };

  BackButtonFunc = () => {
    this.props.onBack();
    this.componentDidMount();
  };
  onSend = selectedImages => {
    let {allPath} = this.state;
    this.props.onSend((selectedImages = allPath));
  };

  renderSlider() {
    let {allPath, currentImageIndex} = this.state;
    // console.log(allPath, 'path');
    return (
      <ImageSlider
        images={allPath}
        style={styles.slider}
        customButtons={(position, move, item) => (
          <FlatList
            horizontal={true}
            ref={ref => {
              this.flatListRef = ref;
            }}
            showsHorizontalScrollIndicator={false}
            style={styles.thumbnailImageView}
            data={allPath}
            extraData={allPath}
            keyExtractor={(item, i) => i}
            renderItem={({item, index}) => {
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

              // if (lastImageLeft) {
              return (
                <TouchableOpacity
                  key={index}
                  onPressIn={() => move(index)}
                  style={styles.thumbnailImageBtn}>
                  <View
                    style={position === index && styles.thumbnailCurrentImage}>
                    {this.renderThumbnail(item)}
                    {/* <Image style={styles.thumbnailImage} source={{uri: item}} /> */}
                  </View>
                </TouchableOpacity>
              );
              // }
            }}
          />
        )}
        customSlide={({index, item, style, width}) => (
          <TouchableOpacity
            key={index}
            
            style={[style, styles.customSlide]}
            onPressOut={() => this.SliderMove()}>
            {/* {console.log(index, item, width)} */}
            {this.renderDocuments(item)}
          </TouchableOpacity>
        )}
        /* {console.log(index, item.type,"hello")}, */
        /* <Image source={{uri: item}} style={styles.customImage} /> */
        
      />
    );
  }

  SliderMove = () => {
    setTimeout(() => {
      console.log('current ', this.state.currentImageIndex);
      this.flatListRef.scrollToIndex({
        animated: true,
        index: this.state.currentImageIndex,
      });
    }, 450);

    if (
      this.state.currentImageIndex == 0 ||
      this.state.currentImageIndex == 1
    ) {
      console.log('tr', this.state.currentImageIndex);
      console.log(this.state);
    }
   
  };

  render() {
    // let {lastImageLeft} = this.state;
    // disable all warning
    console.disableYellowBox = true;
    
    if (this.props.visible) {
      return (
        <View style={styles.container}>
          <SliderHeader
            {...this.state}
            BackButtonFunc={this.BackButtonFunc}
            deleteCurrentImage={this.deleteCurrentImage}
            onSend={this.onSend}
          />
          {this.props.images && this.renderSlider()}
          {this.renderSlider()}
        </View>
      );
    } else {
      return null;
    }
  }
}

//ANCHOR

// import React, {Component} from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableHighlight,
//   ScrollView,
// } from 'react-native';

// import ImageSlider from 'react-native-image-slider';

// class ModalSlider extends Component {
//   render() {
//     const images = [
//       'https://placeimg.com/640/640/nature',
//       'https://placeimg.com/640/640/people',
//       'https://placeimg.com/640/640/animals',
//       'https://placeimg.com/640/640/beer',
//       'https://placeimg.com/640/640/animals',
//       'https://placeimg.com/640/640/beer',
//       'https://placeimg.com/640/640/animals',
//       'https://placeimg.com/640/640/beer',
//       'https://placeimg.com/640/640/animals',
//       'https://placeimg.com/640/640/beer',
//       'https://placeimg.com/640/640/animals',
//       'https://placeimg.com/640/640/beer',
//       'https://placeimg.com/640/640/animals',
//       'https://placeimg.com/640/640/beer',
//       'https://placeimg.com/640/640/animals',
//       'https://placeimg.com/640/640/beer',
//       'https://placeimg.com/640/640/animals',
//       'https://placeimg.com/640/640/beer',
//       'https://placeimg.com/640/640/animals',
//       'https://placeimg.com/640/640/beer',
//       'https://placeimg.com/640/640/animals',
//       'https://placeimg.com/640/640/beer',
//       'https://placeimg.com/640/640/animals',
//       'https://placeimg.com/640/640/beer',

//     ]

//     setItemRef = element => {
//       console.log(element,"element")
//     };

//     setScrollViewRef = element => {
//       this.scrollViewRef = element;
//       console.log(element);
//     };

//     return (
//       <View style={styles.container}>
//         <ImageSlider
//           images={images}
//           onPress={({index}) => alert(index)}
//           customSlide={({index, item, style, width}) => (
//             // It's important to put style here because it's got offset inside
//             <View
//               key={index}
//               style={[
//                 style,
//                 styles.customSlide,
//                 {backgroundColor: index % 2 === 0 ? 'yellow' : 'green'},
//               ]}>
//               <Image source={{uri: item}} style={styles.customImage} />
//             </View>
//           )}
//           customButtons={(position, move) => (
//             // <View style={styles.buttons}>
//             <ScrollView
//               ref={ref => (this.scrollView = ref)}
//               onContentSizeChange={(contentWidth, contentHeight) => {
//                 console.log(contentHeight,contentWidth ,"console")
//                 this.scrollView.scrollTo({x:0,y:400,animated: true,});
//               }}
//               horizontal={true}
//               style={{backgroundColor: 'purple', height: 80}}>
//               {images.map((image, index) => {
//                 return (
//                   <TouchableHighlight
//                     ref={this.setItemRef}
//                     key={index}
//                     underlayColor="#ccc"
//                     onPress={() => move(index)}
//                     style={styles.button}>
//                     <Text style={position === index && styles.buttonSelected}>
//                       <Image
//                         source={{uri: image}}
//                         style={{height: 70, width: 100, backgroundColor: 'red'}}
//                       />
//                     </Text>
//                   </TouchableHighlight>
//                 );
//               })}
//             </ScrollView>
//             // </View>
//           )}
//         />
//       </View>
//     );
//   }
// }

// export default ModalSlider;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
//   slider: {backgroundColor: '#000', height: 350},
//   content1: {
//     width: '100%',
//     height: 50,
//     marginBottom: 10,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   content2: {
//     width: '100%',
//     height: 100,
//     marginTop: 10,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   contentText: {color: '#fff'},
//   buttons: {
//     backgroundColor: 'pink',
//     zIndex: 1,
//     // height: 80,
//     // width: 80,
//     marginTop: -25,
//     marginBottom: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   button: {
//     margin: 3,
//     width: 100,
//     height: 100,
//     opacity: 0.9,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonSelected: {
//     opacity: 1,
//     backgroundColor: 'blue',
//     padding: 5,
//   },
//   customSlide: {
//     backgroundColor: 'green',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   customImage: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'orange',
//   },
// });
