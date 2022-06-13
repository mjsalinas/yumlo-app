import { View, Text } from 'react-native'
import React, {useEffect} from 'react'

const Asesoria = ({route, navigation}) => {

    const {option} = route.params;

    useEffect (()=>{

        console.log(option)
    })
  return (
    <View>
      <Text>Asesoria</Text>
    </View>
  )
}

export default Asesoria