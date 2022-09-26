import React, { useCallback, useEffect, useState } from 'react'
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    ToastAndroid,
    RefreshControl,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';       //npx expo install expo-image-picker
import { styles } from '../custom/styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import '../firebase/config'
import { signOut, getAuth } from 'firebase/auth'
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const Profile = () => {
    const [info, setInfo] = useState({})
    const auth = getAuth()
    const db = getFirestore()
    //load user
    const docRef = doc(db, "all_users", `${auth.currentUser.uid}`)
    const LoadUser = async () => {
        const snapshot = await getDoc(docRef)
        if (snapshot.exists()) {
            const { Uname, Uemail, Uimg } = snapshot.data()
            setInfo({ Uname, Uemail, Uimg })
        } else {
            console.log("No snap shot")
        }
        return snapshot
    }
    //fetch user
    useEffect(() => {
        LoadUser()
    }, [info])

    const LogOut = () => {
        signOut(auth)
            .then(() => ToastAndroid.show("Signed Out", 2000))
            .catch((e) => {
                ToastAndroid.show("Signed Out Error", 2000)
                console.log("Signed Out >>>>" + e.message)
            })
    }
    // on refresh
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true)
        LoadUser()
        setRefreshing(false)
        ToastAndroid.show('Refreshed OK', 1000)
    });

    //img pick
    let openImagePickerAsync = async () => {
        try {
            let pickerResult = await ImagePicker.launchImageLibraryAsync();
            if (pickerResult.cancelled === true) return
            await uploadImgtoFb(pickerResult.uri)
        } catch (e) { console.log(e.message) }
    }

    //Upload new image to storage
    const storage = getStorage();
    //after picking the image from local, i upload it to firebase via blob
    const uploadImgtoFb = async (anImg) => {
        const avatarRef = ref(storage, `${auth.currentUser.email}`);
        //convert chosen picture to blob
        const blob = await new Promise((res, rej) => {
            const xhr = new XMLHttpRequest()
            xhr.onload = function () {
                res(xhr.response)
            }
            xhr.onerror = function () {
                rej(new TypeError('Network request fail - reject blob'))
            }
            xhr.responseType = 'blob'
            xhr.open("GET", anImg, true)
            xhr.send(null)
        })
        await uploadBytes(avatarRef, blob, { contentType: 'image/jpeg' })
        getDownloadURL(avatarRef).then((link) => {
            updateDoc(docRef, {
                Uimg: `${link}`
            })
        })

    }


    //View
    if (!info) return <View style={styles.centerView}><ActivityIndicator size={'large'} /></View>
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false} refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh} />}>
            <>
                <View>
                    <Image
                        style={styles.coverImage}
                        source={{ uri: 'https://picsum.photos/500/500?random=123' }}
                    />
                </View>
                <View style={styles.profileContainer}>
                    <View>
                        <View style={styles.profileImageView}>
                            <Image
                                style={styles.profileImage}
                                source={{
                                    uri: info.Uimg
                                }}
                            />
                            <TouchableOpacity style={styles.changeImage} onPress={openImagePickerAsync} >
                                <Icon
                                    color='#000'
                                    name='camera'
                                    type='font-awesome'
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.nameAndBioView}>
                            <Text style={styles.userFullName}>{info.Uname}</Text>
                            <Text style={styles.userBio}>{info.Uemail}</Text>
                        </View>
                        <View style={styles.interactButtonsView}>
                            <TouchableOpacity style={styles.interactButton} >
                                <Text style={styles.interactButtonText}>My Cart</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    ...styles.interactButton,
                                    backgroundColor: 'white',
                                    borderWidth: 2,
                                    borderColor: 'tomato',
                                }}
                                onPress={LogOut}>
                                <Text style={{ ...styles.interactButtonText, color: 'tomato' }}>
                                    Sign Out
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        </ScrollView>
    )
}

export default Profile

