import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View
} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import React from "react";

const { width, height } = Dimensions.get('screen')


const SubscribeCard = (props) => (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: props.item.imageurl }} style={styles.imageContainer} resizeMode="center" />
            <View style={styles.textContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Subscribe</Text>
                <Text style={{ fontSize: 14, marginTop: 5 }} >The best of our produces delivered straight to your door step each week.</Text>
                <Ionicons name="md-arrow-forward" size={24} color="#62A531" style={{ alignSelf: 'flex-end' }} />
            </View>
        </View>

    </View>
)
export default SubscribeCard;

const styles = StyleSheet.create({
    container: {
        width: width - 40, borderRadius: 7, margin: 8, height: 150,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        backgroundColor: 'white'
    }, imageContainer: { height: 140, width: 90, margin: 5, backgroundColor: 'white' },
    textContainer: {
        margin: 10,
        width: 0,
        flexGrow: 1,
        flex: 1,
        justifyContent: 'center'
    }
});