import {Text, View, Image } from "react-native";
import {styles} from "./styles";
import  {Header} from "../../components/Header";
import { Button } from "@/src/components/Button";
import { useNavigation } from '@react-navigation/native';

export function Login() {
const navigation = useNavigation();
 function handleEntrar ()  {

  navigation.navigate('Home');
  console.log('O botão entrar foi clicado!!');

  }

    
  return (
<>
  <Header/>
        <View style={styles.container}>
        <Text style={styles.text}> Gestão de Hardware - MEC  </Text>
        <Image  
        source={require("../../../assets/images/img.home.png")}
        style={styles.logo}
        />

      <View style={styles.button}>
        <Button 
        title="Entrar"
        onPreess={handleEntrar}
        />
      </View>
        <Image  
        source={require("../../../assets/images/mec_img.home.png")}
        style={styles.mini_footer}
        />


        </View>    
        </>

  )

};

