import { Image, Text, View, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../custom/styles'
import '../firebase/config'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import RenderFood from './RenderFood'

const Food = (props) => {
    const { route: { params } } = props
    const catId = params.Cid
    const catKey = params.Ckey
    const { navigation } = props
    const db = getFirestore()
    const [foodInfo, setFoodInfo] = useState()
    const LoadFood = async () => {
        let arr = []
        const querySnapshot = await getDocs(collection(db, `all_categories/${catId}/${catKey}`));
        try {
            querySnapshot.forEach((doc) => {
                const { Fname, Fprice, Fadr, Fimg } = doc.data()
                arr.push({ Fname, Fprice, Fadr, Fimg, Fid: doc.id })
                // console.log(doc.id, typeof (doc.id), " => ", doc.data(), "\narr =>", arr);
            })
            setFoodInfo(arr)
        } catch (err) {
            console.log(err.message, '>>>>> err');
        }
    }
    useEffect(() => {
        LoadFood()
    }, [])

    if (!foodInfo) return <View style={styles.centerView}><ActivityIndicator size={'large'} /></View>
    return (
        <View style={{ ...styles.container, backgroundColor: null }}>
            <Text style={styles.txtTitleFood}>{params.Cname.toUpperCase()}</Text>
            <FlatList data={foodInfo}
                renderItem={({ item }) => <RenderFood data={{ item }}
                    onPress={() => navigation.navigate('Detail', { ...item, catId, catKey })} />} />
        </View>
    )
}

export default Food
