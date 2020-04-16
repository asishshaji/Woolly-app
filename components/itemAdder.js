import {
    StyleSheet,
    Text,
    View
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Ionicons } from '@expo/vector-icons';
import React from "react";

const ItemAdder = (props) => {
    const carts = useSelector(state => state.userCart);
    const dispatch = useDispatch()

    const itemCount = carts.map(item => {
        if (item.itemId == props.id)
            return item.count
    })
    return (
        <View style={styles.container}>
            <View style={[styles.common, styles.sub]}>
                <Ionicons name="md-remove" size={22} color="#fff" onPress={() => dispatch({
                    "type": "RM_ITEM", itemId: props.id
                })} />
            </View>
            <View style={[styles.common, styles.value]}>
                <Text>{itemCount}</Text>
            </View>
            <View style={[styles.common, styles.adder]}>
                <Ionicons name="md-add" size={22} color="#fff" onPress={() => dispatch({
                    "type": "ADD_ITEM", itemId: props.id
                })} />

            </View>
        </View>
    )
}
export default ItemAdder;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: '#62A531',
        height: 30,
        width: 110
    },
    common: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    value: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#62A531'
    }
});