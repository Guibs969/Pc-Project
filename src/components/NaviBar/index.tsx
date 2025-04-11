import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';


export function NaviBar() {
  const navigation = useNavigation();

  function handleOptionHome ()  {

    navigation.navigate('Login'); // Só esta assim para teste , más logo depois vou implementar mais coisas
    console.log('O botão Home foi apertado!');
  
    }


  return (
    <>
    <Divider/><Divider/><Divider/><Divider/>{/*Isso aqui é apenas algo estetico, atrapalha em nada o app */}
    <View style={styles.container}>
      <TouchableOpacity  onPress={handleOptionHome}>
      <Icon name="home" size={50} color="#000"  />
      <Text style={styles.text}>Inicio</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={handleOptionHome}>
      <Icon name="users" size={50} color="#000" />
      <Text style={styles.text}>Usuários</Text>
           
      </TouchableOpacity>
      <TouchableOpacity  onPress={handleOptionHome}>
      <Icon name="barcode" size={50} color="#000" />
      <Text style={styles.text}>BarCode</Text>
           
      </TouchableOpacity>


      <TouchableOpacity  onPress={handleOptionHome}>
      <Icon name="desktop" size={50} color="#000" 
      />
      <Text style={styles.text}>Desktops</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={handleOptionHome}>
      <Icon name="sliders" size={50} color="#000" 
      />
      <Text style={styles.text}>Opções</Text>
      </TouchableOpacity>

    </View>
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    padding:20,
   
  },

  text: {
    textAlign:'center',
    color: "#gray",
    fontSize: 14,
    
  },
});