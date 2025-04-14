import { View,  TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

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


  
