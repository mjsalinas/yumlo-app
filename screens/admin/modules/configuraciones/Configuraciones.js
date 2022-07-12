import { View, Text, StyleSheet, ScrollView } from "react-native";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import {
  Picker,
  ExpandableSection,
  TextField,
  Card,
  Image,
} from "react-native-ui-lib";
import Icon from "react-native-vector-icons/Entypo";
import Axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../src/Reducer";
import { API } from "../../../../api";
import { RNS3 } from "react-native-aws3";
import { Keys as aws } from "../../../../Keys";
import { S3Image } from "aws-amplify-react-native";
import { LinearGradient } from "expo-linear-gradient";

const Configuraciones = () => {
  const { user, selectedAsesoria } = useSelector(selectUser);
  let urlll;
  const [valorConfiguracion, setValorConfiguracion] = useState("");
  const [tituloConfiguracion, setTituloConfiguracion] = useState("");
  const [valorConfiguracionDetalle, setValorConfiguracionDetalle] =
    useState("");
  const [descripcionConfiguracionDetalle, setDescripcionConfiguracionDetalle] =
    useState("");
  const [selectedCategory, setSelectedCategory] = useState({});
  const [imageFile, setImageFile] = useState({});

  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const [configuraciones, setConfiguraciones] = useState([]);
  const [configuracionesDetalle, setConfiguracionesDetalle] = useState([]);
  const [configuracionesIsExpanded, setConfiguracionesIsExpanded] =
    useState(true);
  const [
    configuracionesDetallesIsExpanded,
    setConfiguracionesDetallesIsExpanded,
  ] = useState(true);
  const [configuracionesChevron, setConfiguracionesChevron] =
    useState("chevron-up");
  const [configuracionesDetalleChevron, setConfiguracionesDetalleChevron] =
    useState("chevron-up");
  const [imageIcon, setImageIcon] = useState("image");

  useEffect(() => {
    Axios.get(API + `/configuraciones/${user.usuario}`).then((res) => {
      setConfiguraciones(res.data);
    });
  }, [user]);

  const styles = StyleSheet.create({
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
      paddingLeft: 15,
      paddingBottom: 15,
    },
    expandableSectionEditFields: {
      flexDirection: "row",
      alignContent: "space-between",
      paddingLeft: 15,
      paddingTop: 10,
      height: 400,
      backgroundColor: "#b6d885",
      shadowColor: "black",
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowRadius: "15",
      shadowOpacity: "0.2",
      elevation: 15,
      borderRadius: 25,
    },
    expandableLayout: {
      padding: 15,
    },
    editButtons: {
      flexDirection: "row",
      alignContent: "space-between",
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

  const handleOnExpandConfiguraciones = () => {
    setConfiguracionesIsExpanded(!configuracionesIsExpanded);
    if (!configuracionesIsExpanded == false) {
      setConfiguracionesChevron("chevron-down");
    } else {
      setConfiguracionesChevron("chevron-up");
    }
  };

  const handleOnExpandConfiguracionesDetalle = () => {
    setConfiguracionesDetallesIsExpanded(!configuracionesDetallesIsExpanded);
    if (!configuracionesDetallesIsExpanded == false) {
      setConfiguracionesDetalleChevron("chevron-down");
    } else {
      setConfiguracionesDetalleChevron("chevron-up");
    }
  };

  const handleOnPressLoadImage = () => {
    if (imageIcon == "image") {
      loadImage();
    } else {
      unloadImage();
    }
  };

  const loadImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
    });
    const file = {
      name: result.uri.substr(
        result.uri.lastIndexOf("/") + 1,
        result.uri.lastIndexOf(".") - (result.uri.lastIndexOf("/") + 1)
      ),
      uri: result.uri,
      type:
        result.type +
        "/" +
        result.uri.substr(result.uri.lastIndexOf(".") + 1 - result.uri.length),
    };
    setImageFile(file);
    setImageIsLoaded(true);
    setImageIcon("cross");
    return;
  };

  const unloadImage = () => {
    setImageFile({});
    setImageIsLoaded(false);
    setImageIcon("image");
    return;
  };

  const handleOnPressAddConfiguracion = () => {
    Axios.post(API + `/configuraciones`, {
      descripcion: tituloConfiguracion,
      valor: valorConfiguracion,
      ingresado_por: user.usuario,
    }).then((res) => {
      setConfiguraciones(res.data);
      clearFields();
    });
  };

  const handleOnPressAddConfiguracionDetalle = () => {
    uploadImageAws();

    Axios.post(API + `/configuracionDetalle`, {
      id_configuracion: selectedCategory.value,
      descripcion: descripcionConfiguracionDetalle,
      recurso: valorConfiguracionDetalle,
    }).then((res) => {
      setConfiguracionesDetalle(res.data);
      clearFields();
    });
  };
  const uploadImageAws = () => {
    const config = {
      keyPrefix: "uploads/",
      bucket: "yumlog-bucket",
      region: "us-east-2",
      accessKey: aws.accessKeyId,
      secretKey: aws.secretAccessKey,
      successActionStatus: 201,
    };

    RNS3.put(imageFile, config).then((response) => {
      setValorConfiguracionDetalle(response.body.postResponse.location);
    });
    return;
  };
  const getHeaderElement = (title) => {
    return (
      <View style={styles.expandableSection}>
        <Icon
          name={
            title == "Configuraciones"
              ? configuracionesChevron
              : configuracionesDetalleChevron
          }
          size={30}
        />
        <Text style={styles.expandableHeader}>{title}</Text>
      </View>
    );
  };
  const clearFields = () => {
    setTituloConfiguracion("");
    setValorConfiguracion("");
  };
  return (
    <ScrollView>
        <LinearGradient
        // Background Linear Gradient
        colors={["#afd479", "#799f0c"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
      <View style={styles.expandableLayout}>
        <ExpandableSection
          expanded={configuracionesIsExpanded}
          sectionHeader={getHeaderElement("Configuraciones")}
          onPress={handleOnExpandConfiguraciones}
        >
          <View style={styles.expandableSectionInsertFields}>
            <View
              style={{
                flexDirection: "column",
                flex: 0.45,
                alignContent: "space-between",
                paddingTop: 5,
              }}
            >
              <TextField
                migrate
                placeholder="Titulo"
                onChangeText={(value) => setTituloConfiguracion(value)}
              />
            </View>

            <View
              style={{
                flexDirection: "column",
                flex: 0.45,
                alignContent: "space-between",
                marginLeft: 10,
                paddingTop: 5,
              }}
            >
              <TextField
                migrate
                placeholder="Valor"
                onChangeText={(value) => setValorConfiguracion(value)}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                flex: 0.2,
                marginLeft: 10,
              }}
            >
              <Icon
                name={"add-to-list"}
                size={30}
                onPress={handleOnPressAddConfiguracion}
              />
            </View>
          </View>

          <ScrollView
            vertical
            showsVerticalScrollIndicator={true}
            style={{ height: 200 }}
          >
            <View>
              {_.map(configuraciones, (option) => (
                <Card flex center style={styles.card} onPress={() => {}}>
                  <View
                    style={{
                      flexDirection: "column",
                      flex: 0.45,
                      alignContent: "space-between",
                      paddingTop: 5,
                    }}
                  >
                    <TextField
                      migrate
                      placeholder="Titulo"
                      disabled={true}
                      value={option.descripcion}
                      style={{ color: "white" }}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "column",
                      flex: 0.45,
                      alignContent: "space-between",
                      marginLeft: 10,
                      paddingTop: 5,
                    }}
                  >
                    <TextField
                      migrate
                      placeholder="Valor"
                      disabled={true}
                      value={option.valor}
                      style={{ color: "white" }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 0.2,
                      marginLeft: 10,
                    }}
                  >
                    <View style={styles.editButtons}>
                      <View style={{ marginLeft: 5 }}>
                        <Icon
                          name={"trash"}
                          size={20}
                          onPress={() => {
                            //on delete config
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </Card>
              ))}
            </View>
          </ScrollView>
        </ExpandableSection>
      </View>
      <View style={styles.expandableLayout}>
        <ExpandableSection
          expanded={configuracionesDetallesIsExpanded}
          sectionHeader={getHeaderElement("Configuraciones Detalle")}
          onPress={handleOnExpandConfiguracionesDetalle}
        >
          <View style={{ marginLeft: 10 }}>
            <Picker
              placeholder="Seleccione categoria"
              value={selectedCategory}
              floatingPlaceholder
              enableModalBlur={false}
              onChange={(item) => {
                setSelectedCategory(item);
              }}
              topBarProps={{
                title: "Configuraciones",
                containerStyle: { marginTop: 40 },
              }}
              showSearch
              searchPlaceholder={"Buscar categoria de configuracion"}
              migrateTextField
            >
              {_.map(configuraciones, (option) => (
                <Picker.Item
                  value={option.id_configuracion}
                  label={option.descripcion + " - " + option.valor}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.expandableSectionInsertFields}>
            <View
              style={{
                flexDirection: "column",
                flex: 0.8,
                alignContent: "space-between",
                paddingTop: 5,
              }}
            >
              <TextField
                migrate
                placeholder="Descripcion"
                onChangeText={(value) =>
                  setDescripcionConfiguracionDetalle(value)
                }
              />
            </View>

            <View
              style={{
                flexDirection: "column",
                flex: 0.2,
                alignContent: "space-between",
                marginLeft: 10,
              }}
            >
              <Icon
                name={imageIcon}
                size={30}
                onPress={handleOnPressLoadImage}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                flex: 0.2,
                marginLeft: 10,
              }}
            >
              <Icon
                name={"add-to-list"}
                size={30}
                onPress={handleOnPressAddConfiguracionDetalle}
              />
            </View>
          </View>

          <ScrollView
            vertical
            showsVerticalScrollIndicator={true}
            style={{ height: 200 }}
          >
            <View>
              {_.map(configuracionesDetalle, (option) => (
                <Card flex center style={styles.card} onPress={() => {}}>
                  <View
                    style={{
                      flexDirection: "column",
                      flex: 0.8,
                      alignContent: "space-between",
                      paddingTop: 5,
                    }}
                  >
                    <TextField
                      migrate
                      placeholder="Descripcion"
                      disabled={true}
                      value={option.descripcion}
                      style={{ color: "white" }}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "column",
                      flex: 0.2,
                      marginLeft: 10,
                    }}
                  >
                    <View style={styles.editButtons}>
                      <View style={{ marginLeft: 5 }}>
                        <Icon name={"trash"} size={20} onPress={() => {}} />
                      </View>
                    </View>
                  </View>
                </Card>
              ))}
            </View>
          </ScrollView>
        </ExpandableSection>
      </View>
    </ScrollView>
  );
};

export default Configuraciones;
