import { View, Text, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

export default function Example  () {
const example = useSelector((state)=>state.counter)  
  return(

    <View style={styles.example}>
        <Text style={styles.ınText}>Başka componentten ulaşılan state:</Text>
        <Text style={styles.text}> {example.count}</Text>
    </View>
  )
  

}

const styles = StyleSheet.create({
    example: {
      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
        
      
      
    },
    text: {
        fontSize: 45
    },
    ınText: {
        fontSize: 20
    }
  });