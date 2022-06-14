import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import React, { useState } from "react";
import { styles } from "./settings/AsesoriaSettings";
import Icon from "react-native-vector-icons/Entypo";
import { Picker, ExpandableSection, TextField } from "react-native-ui-lib";

const PlanAlimenticio = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [chevron, setChevron] = useState("chevron-up");

  const getHeaderElement = () => {
    return (
      <View style={styles.expandableSection}>
        <Icon name={chevron} size={30} />
        <Text style={styles.expandableHeader}>Plan Alimenticio</Text>
      </View>
    );
  };
  const handleOnExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded == false) {
      setChevron("chevron-down");
    } else {
      setChevron("chevron-up");
    }
  };
  return (
    <View>
      <View style={styles.expandableLayout}>
        <ExpandableSection
          expanded={isExpanded}
          sectionHeader={getHeaderElement()}
          onPress={handleOnExpand}
        >
          <Text style={styles.titleText}>Plan Alimenticio</Text>
          <ScrollView
            vertical
            showsVerticalScrollIndicator={true}
            style={{
              marginTop: 15,
              height: 200,
            }}
          ></ScrollView>
        </ExpandableSection>
      </View>
    </View>
  );
};

export default PlanAlimenticio;
