import { StyleSheet } from "react-native";

export const stComponents = StyleSheet.create({
  container: {
    width: 300,
    height: 150,
    paddingHorizontal: 5,
    paddingTop: 5,
    display: "flex",
    flexDirection: "row",
  },
  item: {
    width: 150,
    height: 250,
    borderRadius: 7,
    borderRightWidth: 1,
    borderColor: "#00ff7f",
    paddingHorizontal: 10,
    marginHorizontal: 5,
    overflow: "hidden",
    paddingVertical: 20,
    marginBottom: 5,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 7.00,
    
    elevation: 24,
    
  },
  subItem: {
    padding: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
