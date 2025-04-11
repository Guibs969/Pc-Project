import { View, Image} from "react-native";
import { Divider } from "react-native-elements";
import {styles} from "./styles";


export function Header() {
  return (
    <View style={styles.container}>
     <Divider style={styles.divider}>
      <Image  
        source={require("../../../assets/images/icon.png")} 
        
      />
      
       </Divider>
     
    </View>
  );
}


  
