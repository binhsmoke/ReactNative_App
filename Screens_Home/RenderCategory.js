import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'
import { styles } from '../custom/styles'

const RenderCategory = (props) => {
    const { data: { item } } = props
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.itemCatView}>
                    <View style={styles.itemCatImageView}>
                        <Image style={styles.itemCatImage} source={{ uri: `${item.Cimg}` }} />
                    </View>
                    <View >
                        <Text style={styles.itemCatName}>{item.Cname}</Text>
                    </View>
                    <View >
                        <Text style={styles.itemCatDes}>{item.Cdes}</Text>
                    </View>
                    <View >
                        <Text style={styles.itemCatQuan}>Số lượng: {item.Cquantity}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default RenderCategory
