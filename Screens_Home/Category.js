import {
    ActivityIndicator,
    FlatList,
    View,
    RefreshControl,
    ToastAndroid,
} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { styles } from '../custom/styles'
import '../firebase/config'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import RenderCategory from './RenderCategory'
import HeaderCategory from './HeaderCategory'

const Category = (props) => {
    const { navigation } = props
    // get data from firebase
    const [catInfo, setCatInfo] = useState(null)
    const db = getFirestore()
    const LoadCat = async () => {
        let arr = []
        const querySnapshot = await getDocs(collection(db, "all_categories"));
        try {
            querySnapshot.forEach((doc) => {
                const { Ckey, Cname, Cquantity, Cimg } = doc.data()
                arr.push({ Ckey, Cname, Cquantity, Cimg, Cid: doc.id })
                // console.log(doc.id, typeof (doc.id), " => ", doc.data(), "\narr =>", arr);
            })
            setCatInfo(arr)
        } catch (err) {
            console.log(err.message);
        }
    }

    // show data 1st time
    useEffect(() => {
        LoadCat()
    }, [])

    // on refresh
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(async () => {
        try {
            setRefreshing(true)
            await LoadCat()
            setRefreshing(false)
            ToastAndroid.show('Refreshed OK', 1000)
        } catch (err) {
            console.log(err.message);
        }
    });

    if (!catInfo) return <View style={styles.centerView}><ActivityIndicator size={'large'} /></View>
    return (
        <>
            <View style={styles.categoryContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<HeaderCategory />}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh} />}
                    data={catInfo.sort((a, b) => a.Ckey.localeCompare(b.Ckey))}
                    numColumns={2}
                    renderItem={({ item }) => <RenderCategory data={{ item }}
                        onPress={() => navigation.navigate('Food', { ...item })} />}
                />
            </View>
        </>
    )
}

export default Category
