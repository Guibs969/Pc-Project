import {styles} from './styles'
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Feather"

type Props = {
    title: string;
    onPress: () => void;
};

export function OptionButton({ title, onPress }: Props) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Icon name="chevron-right" size={24} color="#888" />
      </TouchableOpacity>
    );
  }