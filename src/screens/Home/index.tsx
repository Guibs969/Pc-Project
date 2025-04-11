import  {Text, View } from "react-native";
import  {styles} from "./styles";
import  {Header} from "../../components/Header";
import { NaviBar } from "../../components/NaviBar";


export function Home() {

    

 
    
  
  return (
        <> 
        <Header/>
        <View style={styles.container}>


                <Text style={styles.text}>

                Home


                </Text>


        </View>    
        <NaviBar/>
        </>

  )

};

