import { Text, View, Image } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { NaviBar } from "@/src/components/NaviBar";
import {styles} from "./style"
import Icon from "react-native-vector-icons/FontAwesome";
import { Header } from "@/src/components/Header";
import { OptionButton } from "@/src/components/OptionButton";

export function Options() {
    const navigation = useNavigation();

    return (
        <>
            <Header/>
            <View style={styles.container}>
                <Text style={styles.title}> Opções </Text>
                <View style={styles.settings}>
                    <View>
                        <Text style={styles.nome}>MARCOS DE LIMA PRADO</Text>
                        <Text>Estagiário</Text>
                        <Text>000.000.000-00</Text>
                    </View>
                    <Icon name="user-circle" size={50} color="#000" 
                    />
                </View>
                <View>
                    <OptionButton title="Meus dados" onPress={() => console.log("Meus dados")}/>
                    <OptionButton title="Configurações do Sistema" onPress={() => console.log("Configurações do Sistema")}/>
                    <OptionButton title="Preferências de Notificação" onPress={() => console.log("Preferências de Notificação")}/>
                    <OptionButton title="Segurança e Privacidade" onPress={() => console.log("Segurança e Privacidade")}/>
                    <OptionButton title="Gerenciar Usuários" onPress={() => console.log("Gerenciar Usuários")}/>
                    <OptionButton title="Configurações de Atualização" onPress={() => console.log("Configurações de Atualização")}/>
                    <OptionButton title="Configurações de Acesso" onPress={() => console.log("Configurações de Acesso")}/>
                    <OptionButton title="Alterar Senha" onPress={() => console.log("Alterar Senha")}/>
                    <OptionButton title="Sair da Conta" onPress={() => console.log("Sair da Conta")}/>
                </View>
                    
            </View>
            <NaviBar/>
        </>
    )
}