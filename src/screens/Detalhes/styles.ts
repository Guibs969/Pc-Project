import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#29292E",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 45,
  },
  card: {
    backgroundColor: "#1F1F23",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text:{
    color:"white",
    fontSize:20,
  },
  buttonDiv: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonEdit: {
    flexDirection: "row",
    backgroundColor: "#007BFF", 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    gap: 10, 
  },
  buttonDelete: {
    flexDirection: "row",
    backgroundColor: "#DC3545", 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    gap: 10, 
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },

});