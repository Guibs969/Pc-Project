import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import {styles} from './styles'

export function OptionsDrawerContent(props) {
  return (
    <DrawerContentScrollView style={styles.drawer} {...props}>
      <View style={styles.nameCard}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Marcos de Lima Prado</Text>
        <Text>Estagiário</Text>
        <Text>000.000.000-00</Text>
      </View>

      <DrawerItem label="Meus Dados" onPress={() => {}} />
      <DrawerItem label="Contatos" onPress={() => {}} />
      <DrawerItem label="Notificações" onPress={() => {}} />
      <DrawerItem label="Sair da conta" onPress={() => {}} />
    </DrawerContentScrollView>
  );
}
