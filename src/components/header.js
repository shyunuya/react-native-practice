import React from 'react';
import { Text, View, Image } from 'react-native';

// declaration of component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Image source={require('../img/avai-front-logo.png')} />
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'rgb(206, 179, 210)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  textStyle: {
    fontSize: 20,
  },
};

export default Header;
