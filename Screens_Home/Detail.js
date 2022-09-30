import React, { useCallback, useEffect, useState } from 'react'
import { Image, Text, View, ActivityIndicator, TouchableOpacity, ToastAndroid } from 'react-native'
import { styles } from '../custom/styles'
import '../firebase/config'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import Icon from 'react-native-vector-icons/FontAwesome5'
const Detail = (props) => {
    const { route: { params } } = props
    const db = getFirestore()
    const [detail, setDetail] = useState()
    const LoadDetail = async () => {
        const docRef = doc(db, `all_categories/${params.catId}/${params.catKey}`, `${params.Fid}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const { Fname, Fadr, Fdes, Fquantity, Fimg, Fprice } = docSnap.data()
            setDetail({ Fname, Fadr, Fdes, Fquantity, Fimg, Fprice })
            // console.log('detail >>> ', detail);
        } else {
            console.log("No such document!");
        }
    }
    //
    const numberWithComma = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };
    /////////////////
    const [num, setNum] = useState(1)
    let textLog = '';
    if (num > 0) {
        textLog = num;
    } else if (num <= 0) {
        setNum(1)
    }

    const addToCart = () => {
        ToastAndroid.show(`You order x${num} ${detail.Fname} \n Total : ${numberWithComma(num * detail.Fprice)} VND`, ToastAndroid.LONG)
    }

    //
    useEffect(() => {
        LoadDetail()
    }, [params.Fkey])
    if (!detail) return <View style={styles.centerView}><ActivityIndicator size={'large'} /></View>
    return (
        <View style={styles.detailContainer}>
            <View style={styles.detailUp}>
                <View style={styles.detailUpTop} >
                    <Text style={styles.detailName}>{detail.Fname}</Text>
                </View>
                <View style={styles.detailUpMid}>
                    <Image style={styles.detailImg} source={{ uri: `${detail.Fimg}` }} />
                </View>

                <View style={styles.detailUpBot}>
                    <View><Text style={styles.detailPrice}>$ {numberWithComma(detail.Fprice)}</Text></View>
                    <View><Text style={styles.detailDes} numberOfLines={4} >Mô tả: {detail.Fdes} </Text></View>
                    <View><Text style={styles.detailAdr} numberOfLines={2} >Địa chỉ - {detail.Fadr}</Text></View>
                </View>
            </View>
            <View style={styles.detailDown}>
                <View style={styles.detailDownLeft}>
                    <TouchableOpacity style={styles.detailDownLeftBox}
                        onPress={() => {
                            setNum((current) => current - 1);
                        }}>
                        <Text style={styles.detailDownLeftPlus}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.detailDownLeftNumber}>{textLog}</Text>
                    <TouchableOpacity style={styles.detailDownLeftBox}
                        onPress={() => {
                            setNum((current) => current + 1);
                        }} >
                        <Text style={styles.detailDownLeftPlus}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.detailDownRight}>
                    <TouchableOpacity style={styles.btnAddtoCart} onPress={addToCart}>
                        <Icon
                            size={20}
                            name='cart-plus'
                            type='font-awesome'
                            color={'tomato'} />
                        <Text style={styles.txtAddtoCart}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default Detail

