import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native-ui-lib'

const Retroalimentaciones = () => {
  return (
    <View>
      <Image source={require("../../../../assets/wip.png")} style={{
            width: 250,
            height: 200,
            marginTop: '50%',
            marginLeft: "auto",
            marginRight: "auto",
          }}
      />
    </View>
  )
}

export default Retroalimentaciones