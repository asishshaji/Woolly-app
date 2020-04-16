import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View
} from "react-native";

import InFarm from './infarms'
import ItemAdder from './itemAdder'
import React from "react";

const { width, height } = Dimensions.get('screen')


const ItemCard = (props) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={{ uri: props.item.imageurl }}
                style={styles.img} resizeMode="center" />

        </View>
        <View style={styles.textContainer}>
            <Text style={styles.nameText}>{props.item.name}</Text>
            <Text style={styles.priceText}>Rs {props.item.price}</Text>
            <View style={styles.controllerContainer}>
                <ItemAdder id={props.item.id}/>
                <InFarm count={props.item.count} />
            </View>
        </View>


    </View>
)
export default ItemCard;

const styles = StyleSheet.create({
    controllerContainer: {
        width: (width - 20) / 2 +10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        alignItems:'flex-end'
    },
    container: {
        width: width - 20, borderRadius: 7, margin: 8, height: 150,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    imageContainer: { flex: 2, justifyContent: 'center' },
    img: {
        flex: 1, height: null, width: null
        , backgroundColor: 'white', borderRadius: 7, marginLeft: 10
    },
    textContainer: { flex: 3, alignItems: 'flex-start', marginTop: 20, marginLeft: 10 },
    nameText: { fontSize: 20, fontWeight: '200' },
    priceText: { fontWeight: 'bold', marginTop: 5 },
    toolsContainer: { flex: 1, flexDirection: 'row', marginTop: 8, alignItems: 'center', marginBottom: 18, justifyContent: 'space-evenly' },
    adderContainer: {
        flex: 1, flexDirection: 'row', borderRadius: 5, borderColor: '#62A531', borderWidth: 1, justifyContent: 'space-around', height: 30,
    },
    plusContainer: { backgroundColor: '#62A531', justifyContent: 'center', flex: 1, alignItems: 'center' },
    countContainer: { justifyContent: 'center', backgroundColor: '#fff', flex: 1, alignItems: 'center' },
    farmContainer: { flex: 1, alignItems: 'flex-end', marginRight: 10 },
    box: {
        height: 45, width: 42, borderWidth: 1, borderColor: '#E6A830',
        borderRadius: 10, justifyContent: 'center', alignItems: 'center',
    },
    textCountContainer: { flex: 2, alignItems: 'center', justifyContent: 'center' },
    infarmContainer: {
        flex: 1, backgroundColor: '#E6A830', borderRadius: 8,
        width: 40, borderTopLeftRadius: 0, borderTopRightRadius: 0, alignItems: 'center', padding: 2
    }


});