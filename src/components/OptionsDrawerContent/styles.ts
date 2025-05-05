import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#F4F6F8',
  },

  nameCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#fff',
    borderRadius: 15,
  },

  nameIcon: {
    flex: 1,
    flexDirection: 'column',
  },

  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E2E2E',
  },

  userInfo: {
    fontSize: 14,
    color: '#555',
  },

  drawerItem: {
    marginVertical: 0,
  },

  drawerItemLabel: {
    fontSize: 16,
    color: '#2E2E2E',
  },
});
