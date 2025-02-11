import { ImageBackground, StyleSheet } from 'react-native';
import Header from './src/screens/header';
import Login from './src/screens/login';

const background = require('./assets/img/bg.jpg')

export default function App() {
  return (
    <ImageBackground
      source={background}
      style={styles.container}
      resizeMode='cover'
    >
      <Header 
      title='Welcome to my App!' 
      iconName='moon'
      iconSize={200}
      iconColor='#571991'
      />
      <Login/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
