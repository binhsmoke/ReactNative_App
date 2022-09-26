import React, { useEffect, useState } from 'react'
import { Image, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'
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
                    <TouchableOpacity style={styles.detailDownLeftBox} >
                        <Text style={styles.detailDownLeftPlus}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.detailDownLeftNumber}>1</Text>
                    <TouchableOpacity style={styles.detailDownLeftBox} >
                        <Text style={styles.detailDownLeftPlus}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.detailDownRight}>
                    <TouchableOpacity style={styles.btnAddtoCart}>
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


/**import { Image, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../custom/styles'
import '../firebase/config'
import { getFirestore, collection, query, where, getDoc, doc } from 'firebase/firestore'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Food = (props) => {
    const { route: { params } } = props
    // console.log(params);
    const db = getFirestore()
    const [detail, setFood] = useState()
    const [number, setNumber] = useState(1)
    const LoadFood = async () => {
        const docRef = doc(db, "all_categories", params.key);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const { Cid, Cname, Cdes, Cimg, Cquantity } = docSnap.data()
            setFood({ Cid, Cname, Cdes, Cimg, Cquantity })
        } else {
            console.log("No such document!");
        }
    }
    useEffect(() => {
        LoadFood()
    }, [params.key])


    if (!detail) return <View style={styles.centerView}><ActivityIndicator size={'large'} /></View>
    return (
        <View style={styles.detailContainer}>
            <View style={styles.detailUp}>
                <View style={styles.detailUpTop} >
                    <Text style={styles.detailName}>{detail.Cname}</Text>
                </View>
                <Image style={styles.detailImg} source={{ uri: `${detail.Cimg}` }} />

                <View style={styles.detailUpBot}>
                    <Text style={styles.detailPrice}>$ {detail.Cquantity}</Text>
                    <Text style={styles.detailDes}>Mô tả - {detail.Cdes} </Text>
                    <Text style={styles.detailQuan}>Số lượng - {detail.Cquantity}</Text>
                    <Text style={styles.detailQuan}>Địa chỉ - Đang cập nhật</Text>
                </View>
            </View>
            <View style={styles.detailDown}>
                <View style={styles.detailDownLeft}>
                    <TouchableOpacity style={styles.detailDownLeftBox} >
                        <Text style={styles.detailDownLeftPlus}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.detailDownLeftNumber}>{detail.Cquantity}</Text>
                    <TouchableOpacity style={styles.detailDownLeftBox} >
                        <Text style={styles.detailDownLeftPlus}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.detailDownRight}>
                    <TouchableOpacity style={styles.btnAddtoCart}>
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

export default Food
 */