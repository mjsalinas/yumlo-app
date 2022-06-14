import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  header: {
    flexDirection: "column",
    flex: 0.1,
    padding: 5,
    position: "relative",
  },
  card: {
    marginBottom: 5,
    height: 80,
    backgroundColor: "#b6d885",
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: "15",
    shadowOpacity: "0.2",
    elevation: 15,
  },
  cardContainer: {
    flexDirection: "column",
    flex: 0.8,
    paddingTop: 10,
    height: 400,
  }
});
