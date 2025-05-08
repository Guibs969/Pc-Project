import { View, TouchableOpacity, Text } from "react-native";
import { Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { styles } from "./styles";

type DrawerParamList = {
  Home: undefined;
  Desktop: undefined;
  Detalhes: { id: number };
};

export function NaviBar() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  function handleOptionHome () {
    navigation.navigate('Home');
    console.log('O botão Home foi apertado!');
  }
  function handleOptionDesktop () {
    navigation.navigate('Desktop');
    console.log('O botão Desktop foi apertado!');
  }

  function handleOptionsButton () {
    navigation.openDrawer();
    console.log("O botão Options foi apertado!");
  }

  return (
    <>
      <Divider /><Divider /><Divider /><Divider />
      <View style={styles.container}>
        <TouchableOpacity onPress={handleOptionHome}>
          <Icon name="home" size={50} color="#000" />
          <Text style={styles.text}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleOptionHome}>
          <Icon name="barcode" size={50} color="#000" />
          <Text style={styles.text}>BarCode</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleOptionDesktop}>
          <Icon name="desktop" size={50} color="#000" />
          <Text style={styles.text}>Desktops</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleOptionsButton}>
          <Icon name="sliders" size={50} color="#000" />
          <Text style={styles.text}>Opções</Text>
        </TouchableOpacity>
      </View>
    </>
  );}