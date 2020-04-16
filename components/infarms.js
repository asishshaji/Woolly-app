import {
    StyleSheet,
    Text,
    View
} from "react-native";

import React from "react";

const inFarm = (props) => (
    <View style={styles.container}>
        <View style={styles.upper}>
            <Text style={styles.countText}>{props.count}</Text>
        </View>
        <View style={styles.lower}>
            <Text style={styles.textFarm}>in farm</Text>
        </View>

    </View>
)
export default inFarm;

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: 45,
        borderRadius: 10,
        borderWidth: 1, borderColor: '#E6A830'
    }, upper:
    {
        flex: 2, justifyContent: 'center',
        alignItems: 'center',
    },
    lower:
    {
        flex: 1,
        backgroundColor: '#E6A830',
        borderRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textFarm: {
        fontSize: 11,
        color: '#fff',
    },
    countText: {
        fontWeight: 'bold'
    }
});