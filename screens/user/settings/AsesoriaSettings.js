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
    marginTop: 20
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
    paddingLeft: 20,
    marginBottom: 5,
    height: 60,
    backgroundColor: "#b6d885",
    // shadowColor: "black",
    // shadowOffset: {
    //   width: 10,
    //   height: 10,
    // },
    // shadowRadius: "15",
    // shadowOpacity: "0.2",
    // elevation: 15,
  },
  cardContainer: {
    flexDirection: "column",
    height: 200,
    paddingLeft: 10,
  }
});
