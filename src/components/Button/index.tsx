import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

type Props =  {
  tittle: string;
  onPreess: () => void;
}

export function Button({tittle, onPreess}:Props) {
  return (
    <View >
      <TouchableOpacity style={styles.button}onPress={onPreess} >
        <Text style={styles.buttonText}>{tittle}</Text>
      </TouchableOpacity>
     
    </View>
  );
}
export const styles = StyleSheet.create({

  button: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#1351B4", 
    padding: 15,
    borderRadius: 25,
    width:200,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

  
