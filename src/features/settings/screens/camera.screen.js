import React, { useRef, useState, useEffect, useContext } from "react";
import { RNCamera } from "react-native-camera";
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SettingsScreen } from "./settings.screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import styled from "styled-components/native";
import { fontSizes } from "../../../infastructure/theme/fonts";
import { colors } from "../../../infastructure/theme/colors";

export const CameraScreen = ({navigation}) => {
    const {user} = useContext(AuthenticationContext)

    const takePicture = async function (camera) {
        const options = {quality: 0.5, base64: true};
        const data = await camera.takePictureAsync(options);
        //  eslint-disable-next-line
        console.log(data.uri);
        AsyncStorage.setItem(`${user.uid}-photo`, data.uri)
        navigation.goBack()
    };

    const Container = styled.View`
      flex: 1;
      flex-direction: column;
      background-color: black;
    `
    const SnapContainer = styled.View`
      flex-direction: row;
      justify-content: center;
    `

    const SnapButton = styled.Text`
      font-size: ${(props) => props.theme.fontSizes.button};
    `
    const Capture = styled(TouchableOpacity)`
      background-color: ${(props) => props.theme.colors.bg.primary};
      border-radius: 5px;
      padding: 15px 20px;
      align-self: center;
      margin: 20px;
    `


    return (
        <Container>
            <RNCamera
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
            >
                {({camera, status, recordAudioPermissionStatus}) => {
                    if (status !== 'READY') return <SettingsScreen/>;
                    return (
                        <SnapContainer>
                            <Capture onPress={() => takePicture(camera)}>
                                <SnapButton> SNAP </SnapButton>
                            </Capture>
                        </SnapContainer>
                    );
                }}
            </RNCamera>
        </Container>
    )
}







