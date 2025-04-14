import  {Text, View } from "react-native";
import  {styles} from "./styles";
import  {Header} from "../../components/Header";
import  {NaviBar} from "../../components/NaviBar";
import { PcCard } from "@/src/components/PcCard";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

export function Home() {
  const navigation = useNavigation();

  function handlePc(){

    navigation.navigate('Login');

  }
    
  
  return (
        <> 
        <Header/>
        <View style={styles.container}>
                <Text style={styles.text}> Computadores - MEC </Text>

                        <FlatList style={styles.list}
                          data={['PC', 'PC', 'PC','PC']}
                          keyExtractor={(item, index) => index.toString()} 
                          renderItem={({})=>(
                            <>
                              <PcCard
                                title="PC-123421"
                                description="  ✅ Disponível i7 • 16GB RAM • SSD 512GB"
                                onPress={handlePc}
                              />
                                <PcCard
                                  title="PC-233454"
                                  description=" 🔴 Em Uso  Ryzen 5 • 32GB RAM • HDD 1TB"
                                  onPress={handlePc}
                                />
                             
                            </>
                          )}
                            />



        </View>    
        <NaviBar/>
        </>

  )

};

