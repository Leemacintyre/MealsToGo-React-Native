import React, { useState, useContext } from "react";
import {
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton,
    AuthInput, Title, ErrorContainer,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { makePretty } from "../../../utils/makePretty";
import { ActivityIndicator, Colors } from "react-native-paper";

export const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const {onRegister, error, isLoading} = useContext(AuthenticationContext);
    return (
        <AccountBackground>
            <AccountCover/>
            <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthInput
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <Spacer size="large">
                    <AuthInput
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setPassword(p)}
                    />
                </Spacer>
                <Spacer size="large">
                    <AuthInput
                        label="Repeat Password"
                        value={repeatedPassword}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setRepeatedPassword(p)}
                    />
                </Spacer>
                {error && (
                    <Spacer size="large">
                        <ErrorContainer>
                            <Text variant="error">{error}</Text>
                        </ErrorContainer>
                    </Spacer>
                )}
                <Spacer size="large">
                    {
                        !isLoading ?
                            <AuthButton
                                icon="email"
                                mode="contained"
                                onPress={() => onRegister(email, password, repeatedPassword)}
                            >
                                Register
                            </AuthButton>
                            :
                            <ActivityIndicator
                                animating={true}
                                color={Colors.limeA700}
                                size={50}
                            />

                    }
                </Spacer>
            </AccountContainer>
            <Spacer size={'large'}>
                <AuthButton mode={'contained'} onPress={() => navigation.goBack()}>
                    Back
                </AuthButton>
            </Spacer>
        </AccountBackground>
    );
};
