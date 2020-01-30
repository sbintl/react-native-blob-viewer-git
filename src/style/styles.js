import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
const iconAdjust = {
  width: 25,
  height: 25,
  resizeMode: 'contain',
};
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 999,
  },
  headerBox: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    height: moderateScale(50),
    width: '100%',
    position: 'absolute',
    top: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: moderateScale(10),
    zIndex: 99,
  },
  backIcon: {
    ...iconAdjust,
  },
  deleteSendBox: {
    flexDirection: 'row',
  },
  trashBtn: {
    ...iconAdjust,
    marginRight: moderateScale(15),
  },
  sendBtn: {
    ...iconAdjust,
    marginLeft: moderateScale(15),
  },
  slider: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  customSlide: {
    paddingTop: moderateScale(50),
  },
  customImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    // backgroundColor:"green"
  },
  thumbnailImageScrollView: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: moderateScale(5),
  },

  thumbnailImageView: {
    flexDirection: 'row',
    zIndex: 999,
    height: moderateScale(85),
  },

  thumbnailImageBtn: {
    margin: moderateScale(3),
    width: moderateScale(70),
    height: moderateScale(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnailImage: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(5),
  },
  thumbnailCurrentImage: {
    padding: moderateScale(2),
    // backgroundColor: '#bab6c8',
    // backgroundColor: 'red',
    borderRadius: moderateScale(5),
    borderColor:'#bab6c8',
    borderWidth: 3,
  },
  fileImage: {
    height: moderateScale(200),
    width: moderateScale(200),
    resizeMode: 'contain',
    position: 'absolute',
    top:'40%',
    left:'25%',
  },
});
