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
    expandableSectionInsertFields: {
      flexDirection: "row",
      alignContent: "space-between",
      paddingLeft: 5,
    },
    expandableSectionEditFields: {
      flexDirection: "row",
      alignContent: "space-between",
      paddingLeft: 15,
      paddingTop: 10,
      height: 200,
      backgroundColor: "#b6d885",
      borderRadius: 25,
    },
    expandableLayout: {
      //   padding: 15,
    },
    editButtons: {
      flexDirection: "row",
      alignContent: "space-between",
      paddingLeft: 5,
      paddingTop: 10,
    },
    card: {
      flexDirection: "row",
      alignContent: "space-between",
      paddingLeft: 15,
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
  });
