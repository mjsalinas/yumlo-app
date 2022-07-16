import _ from "lodash";
import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Image, Picker, TextField } from "react-native-ui-lib";
import { styles } from "./PagoAsesoriaSettings";
import { SvgUri } from "react-native-svg";
import { useSelector } from "react-redux";
import { selectUser } from "../../../src/Reducer";
import  Axios  from "axios";
import { API } from "../../../api";

const PagoAsesoria = () => {
  const { user, selectedAsesoria } = useSelector(selectUser);

  const [selectedNutricionistaId, setSelectedNutricionistaId] = useState(null);
  const [selectedNutricionista, setSelectedNutricionista] = useState({});
  const [nutricionistas, setNutricionistas] = useState([]);
  
  useEffect(() => {
    if(nutricionistas.length === 0){
       Axios.get(API + `/usuariosNutricionistas`).then((res) => {
        setNutricionistas(res.data);
    });
    }
  }, []);


  const handleOnRealizarPago = () => {
    Axios.post(API + `/pago`, {
      id_nutricionista: selectedNutricionistaId,
      id_paciente: user.id_usuario,
      fecha: new Date().toISOString().slice(0, 10).replace("T", " "),
    }).then((res) => {
      setConfiguraciones(res.data);
      clearFields();
    });
  }
  return (
    <View>
      <LinearGradient
        colors={["#afd479", "#799f0c"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
      <View
        style={{
          height: 60,
          marginTop: 10,
          borderRadius: 20,
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Picker
          placeholder="Seleccione nutricionista"
          value={selectedNutricionista}
          floatingPlaceholder
          enableModalBlur={false}
          onChange={(item) => {
            setSelectedNutricionista(item)
            setSelectedNutricionistaId(item.value);
          }}
          topBarProps={{
            title: "Nutricionistas",
            containerStyle: { marginTop: 40 },
          }}
          showSearch
          searchPlaceholder={"Buscar nutricionista"}
          migrateTextField
        >
          {_.map(nutricionistas, (option) => (
            <Picker.Item
              value={option.id_usuario || ""}
              label={option.nombre + " " + option.apellido + " - L 1,400.00 " || ""}
            />
          ))}
        </Picker>
      </View>
      <Image
        //   uri={'https://yumlog-bucket.s3.us-east-2.amazonaws.com/uploads/eb735ef4-7397-4c94-aa12-a9dde351829b'}
        //   width="100%"
        //  height="100%"
        source={require("../../../assets/tarjeta.png")}
        style={{
          width: 160,
          height: 160,
          position: "absolute",
          marginTop: 60,
          marginLeft: 130,
          zIndex: 1,
        }}
      />
      <View
        style={{
          height: 450,
          paddingTop: 50,
          padding: 15,
          marginTop: 90,
          borderRadius: 40,
          backgroundColor: "white",
        }}
      >
        <TextField
          migrate
          placeholder="Numeros de Tarjeta"
          style={styles.input}
          onChangeText={(value) => {}}
        />
        <TextField
          migrate
          placeholder="Titular de Tarjeta"
          style={styles.input}
          onChangeText={(value) =>{}}
        />
        <TextField
          migrate
          placeholder="CVV"
          style={styles.input}
          onChangeText={(value) => {}}
        />
        <TextField
          migrate
          placeholder="Fecha Vencimiento"
          style={styles.input}
          onChangeText={(value) => {}}
        />
        <Button style={styles.button} onPress={handleOnRealizarPago}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Realizar Pago
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default PagoAsesoria;
