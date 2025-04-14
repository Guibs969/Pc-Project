import { TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";

interface PcCardProps {
  title: string;
  description:string;
  onPress: () => void;
}

export function PcCard({title,description, onPress}:PcCardProps){

return (

    <>
    <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.container2}>
    <Icon name="laptop" size={50} color="#000"/> 
        <Text style={styles.title}>{title} </Text>
     </View>
        <Text style={styles.text}>{description}</Text>
    </TouchableOpacity>

      </>



);  
}
