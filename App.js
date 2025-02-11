import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { Store } from './redux/Store';
import Counter from './components/Counter';
import Example from './components/Example';

export default function App() {

  return (
    <Provider store={Store}>

    <View style={styles.container}>
      <Example style={styles.example}/>
      <Counter style={styles.counter}/>
      <StatusBar style="auto" />
    </View>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:30,
    
  },
  example:{
    marginBottom:10,
    
  }
});
