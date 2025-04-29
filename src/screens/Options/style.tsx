import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title : {
    top: 5,
    marginBottom: 20,
    color: "#1351B4",
    fontSize: 24,
  },
  settings : {
    width: '90%',
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: '#E8F0FE',
    padding: 10,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    },
  nome : {
    fontWeight: 'bold',
  },
});