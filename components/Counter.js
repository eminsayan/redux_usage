import { View, StyleSheet,Text, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, refresh } from "../redux/Slice";

export default function Counter  () {
    const selector = useSelector((state)=>state.counter);
    const dispatch = useDispatch();

  return(

    <View style={styles.counter}>
        <Text style={{color:'white', marginBottom:30, fontSize:45, fontWeight:'bold', fontStyle: 'italic'}}>{selector.count}</Text>
        <TouchableOpacity style={styles.button} onPress={()=>dispatch(increase())}><Text style={styles.ınText}>Increase</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>dispatch(decrease())}><Text style={styles.ınText}>Decrease</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>dispatch(refresh())}><Text style={styles.ınText}>Refresh</Text></TouchableOpacity>

    </View>
  )
  

}


const styles = StyleSheet.create({
    counter: {
      width:300,
      height:300,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      marginTop:0,
      borderWidth:2
    },
    button: {
        backgroundColor: 'white',
        width:100,
        borderRadius:40,
        alignItems: 'center',
        justifyContent: 'center',
        margin:3,
        height:30,
    },
    ınText:{
       fontWeight:'bold' 
    }
  });