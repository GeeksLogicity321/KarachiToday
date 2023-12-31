import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import React, {useEffect} from 'react';
import {
  View,
  Modal,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

// local imports
import {fontsFamily, fontsSize} from '../../constants/fonts';
import colors from '../../constants/colors';
import images from '../../assets/images';
import globalStyle from '../../utils/globalStyle';

const {width, height} = Dimensions.get('window');

const SimpleModals = ({
  navigation,
  isVisible,
  onPress,
  icon = images.Tick,
  title = 'Success',
  message,
  ...props
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.lModalView}>
          <View style={{...globalStyle.center}}>
            <Image
              source={images.Bubbles}
              style={styles.imgStyleCont}
              resizeMode={'contain'}
            />
            <Image
              source={icon}
              style={styles.iconStyle}
              resizeMode={'contain'}
            />
          </View>
          <Text style={styles.txt1}>{title}</Text>
          <Text style={styles.txt2}>Please wait...</Text>
          <Text style={styles.txt3}>{message}</Text>
          <ActivityIndicator
            size={'large'}
            color={colors.primary}
            style={{
              transform: [{scale: 1.2}],
              marginTop: heightPercentageToDP(6),
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SimpleModals;

const styles = StyleSheet.create({
  centeredView: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  lModalView: {
    width: widthPercentageToDP(90),
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: widthPercentageToDP(6),
    paddingVertical: heightPercentageToDP(6),
  },
  txt1: {
    fontSize: fontsSize.lg2,
    width: widthPercentageToDP(70),
    color: colors.primary,
    textAlign: 'center',
    fontFamily: fontsFamily.bold,
    marginTop: heightPercentageToDP(2),
  },
  txt2: {
    fontSize: fontsSize.md2,
    width: widthPercentageToDP(70),
    color: colors.textLight,
    textAlign: 'center',
    fontFamily: fontsFamily.regular,
    marginTop: heightPercentageToDP(2),
  },
  txt3: {
    fontSize: fontsSize.md2,
    width: widthPercentageToDP(70),
    color: colors.textLight,
    textAlign: 'center',
    fontFamily: fontsFamily.regular,
    marginTop: heightPercentageToDP(2),
  },
  imgStyleCont: {
    width: width * 0.4,
    height: width * 0.4,
    marginLeft: widthPercentageToDP(-4),
    marginTop: heightPercentageToDP(-1),
  },
  iconStyle: {
    width: width * 0.1,
    height: width * 0.1,
    position: 'absolute',
    tintColor: 'white',
  },
});
