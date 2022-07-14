import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    color: "white",
  },
  cardContainer: {
    flexDirection: "column",
    flex: 0.6,
    flexWrap: "wrap",
    alignContent: "space-between",
  },
  cardsHolder: {
    flexDirection: "row",
    flex: 1,
    alignContent: "space-between",
  },
  cardColumn: {
    flexDirection: "column",
    flex: 0.8,
    flexWrap: "wrap",
    alignContent: "space-between",
    padding: 5,
  },
  cardSectionContent: {
    marginLeft:10,
    paddingTop: -10,
    padding: 10,
    flex: 1,
    flexWrap: "wrap",
    fontSize: 35,
  },
  card: {
    paddingTop: 15,
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
  cardTexts:{
    paddingTop: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  }
});
