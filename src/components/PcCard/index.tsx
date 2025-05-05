import { TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";

interface PcCardProps {
  title: string;
  description: string;
  onPress: () => void;
}

export function PcCard({ title, description, onPress }: PcCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.logo}>
        <Icon name="laptop" size={60} color="#000" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}