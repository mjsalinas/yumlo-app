import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  expandableHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  expandableSection: {
    flexDirection: "row",
    flex: 1,
    padding: 5,
  },
  mainTitle: {
    marginTop: 10,
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    // paddingBottom: 10,
  },
  header: {
    flexDirection: "column",
    flex: 0.1,
    padding: 5,
    position: "relative",
  },
  card: {
    flexDirection: "row",
    marginBottom: 5,
    height: 100,
    backgroundColor: "#b6d885",
  },
  pickerElemento: {
    height: 60,
    marginTop: 10,
    borderRadius: 20,
    alignItems: "center",
      backgroundColor: "#afd479",
  },
  botonElemento: {
    color: "#000000",
    height: 60,
    marginTop: 10,
    borderRadius: 20,
    alignItems: "center",
    flex: 0.1,
      backgroundColor: "#afd479",
  },
  elementoPlan: {
    width: 90,
    height: 90,
    borderRadius: 30,
    backgroundColor: "rgba(52, 52, 52, 0.3)",
    zIndex: 1,
  },
});
