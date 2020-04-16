import {
    Button,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React from "react";

const width = Dimensions.get('window').width

export default function Login({ navigation }) {
    return (
        <View style={styles.container}


        >
            <TouchableOpacity style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 100000
            }} activeOpacity={1} onPress={() => { navigation.navigate('Home') }}>
                <View
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Next</Text>
                </View>
            </TouchableOpacity>
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <Image source={{ uri: "http://woolly.io/wp-content/uploads/2017/10/Untitled-1-03.png" }}
                    resizeMode="center"
                    style={styles.logoStyle} />
                <View style={styles.bottomContainer}>
                    <View style={styles.phone}>
                        <TextInput placeholder="Enter your mobile number" />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.textInfo}>We will send an OTP to this number to verify its you</Text>
                    </View>
                </View>
            </KeyboardAwareScrollView>


        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    logoStyle: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: width / 2 - 75
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    bottomContainer: {
        flex: 1,
        alignItems: "center"
    },
    phone: {
        width: width - 50,
        padding: 15,
        borderRadius: 5,
        borderColor: '#E6A830',
        borderWidth: 1
    },
    infoContainer: {
        width: width - 50,
        padding: 15,

    },
    textInfo: {
        color: 'grey'
    },
    buttonContainer: {
        width: width,
        height: 50,
        backgroundColor: '#62A531',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
    }
});