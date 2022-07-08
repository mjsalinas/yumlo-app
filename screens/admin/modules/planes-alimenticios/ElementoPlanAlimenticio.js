import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Card } from 'react-native-ui-lib';

const ElementoPlanAlimenticio = () => {
    const styles = StyleSheet.create({
        header: {
        
        },
      
      });
  return (
    <View>
      <Card
              flex
              center
              style={styles.card}
            >
                  <Card.Section
                content={[
                  {
                    text:
                      "Asesoria #" +
                      option.id_asesoria +
                      "\nDr." +
                      option.id_nutricionista,
                    white: true,
                  },
                ]}
                style={styles.cardSectionContent}
              />
            </Card>
    </View>
  )
}

export default ElementoPlanAlimenticio