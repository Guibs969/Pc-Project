import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#29292E",
    borderRadius: 10,
    margin: 5,
    padding: 10,
    alignItems: "center",
  },

  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  content: {
    flex: 1, 
  },

  title: {
    color: "#1351B4",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  text: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 18, 
  },
});