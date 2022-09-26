import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from '../custom/styles'
const RenderFood = (props) => {
    const { data: { item } } = props
    const numberWithComma = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.itemFooView}>
                <View style={styles.itemFooImgView}>
                    <Image style={styles.imgFooImg} source={{ uri: `${item.Fimg}` }} />
                </View>
                <View style={styles.itemFooTxtView}>
                    <Text style={styles.itemFooName}>{item.Fname}</Text>
                    <Text numberOfLines={1} style={styles.itemFooAdr}>
                        {item.Fadr.toUpperCase().trim()}</Text>
                    <Text>$ {numberWithComma(item.Fprice)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RenderFood
