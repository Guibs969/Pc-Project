import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export function OptionsDrawerContent(props) {
  return (
    <DrawerContentScrollView style={styles.drawer} {...props}>
      <View style={styles.nameCard}>
        <View style={styles.nameIcon}>
          <Text style={styles.userName}>Marcos de Lima Prado</Text>
          <Text style={styles.userInfo}>Estagiário</Text>
          <Text style={styles.userInfo}>000.000.000-00</Text>
        </View>
        <Icon name='user-circle' size={60} color="#2E2E2E" />
      </View>

      <DrawerItem
        label="Meus Dados"
        labelStyle={styles.drawerItemLabel}
        icon={({ color, size }) => <Icon name="id-card" size={size} color={color} />}
        style={styles.drawerItem}
        onPress={() => {}}
      />
      <DrawerItem
        label="Histórico de Acesso"
        labelStyle={styles.drawerItemLabel}
        icon={({ color, size }) => <Icon name="history" size={size} color={color} />}
        style={styles.drawerItem}
        onPress={() => {}}
      />
      <DrawerItem
        label="Configurações"
        labelStyle={styles.drawerItemLabel}
        icon={({ color, size }) => <Icon name="cog" size={size} color={color} />}
        style={styles.drawerItem}
        onPress={() => {}}
      />
      <DrawerItem
        label="Ajuda/Suporte"
        labelStyle={styles.drawerItemLabel}
        icon={({ color, size }) => <Icon name="question-circle" size={size} color={color} />}
        style={styles.drawerItem}
        onPress={() => {}}
      />
      <DrawerItem
        label="Sobre o aplicativo"
        labelStyle={styles.drawerItemLabel}
        icon={({ color, size }) => <Icon name="info-circle" size={size} color={color} />}
        style={styles.drawerItem}
        onPress={() => {}}
      />
      <DrawerItem
        label="Alterar Senha"
        labelStyle={styles.drawerItemLabel}
        icon={({ color, size }) => <Icon name="lock" size={size} color={color} />}
        style={styles.drawerItem}
        onPress={() => {}}
      />
      <DrawerItem
        label="Sair da conta"
        labelStyle={[styles.drawerItemLabel, { color: '#B00020' }]}
        icon={({ color, size }) => <Icon name="sign-out" size={size} color="#B00020" />}
        style={styles.drawerItem}
        onPress={() => {}}
      />
    </DrawerContentScrollView>
  );
}
