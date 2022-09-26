
import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { styles } from '../custom/styles';
import { errMess } from '../firebase/errMess'
import '../firebase/config'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
export default SignUp = (props) => {
    const { navigation } = props
    const db = getFirestore()
    const auth = getAuth()
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')
    const validate = () => userName.length > 0 && userEmail.length > 0 && userPass > 0

    const RegisterUser = () => {
        createUserWithEmailAndPassword(auth, userEmail, userPass)
            .then(() => {
                const docRef = doc(db, "all_users", `${auth.currentUser.uid}`)
                const docData = {
                    Uid: auth.currentUser.uid,
                    Uname: userName,
                    Uemail: userEmail,
                    Uimg: 'https://randomuser.me/api/portraits/lego/4.jpg'
                }
                setDoc(docRef, docData)
            })
            .then(() => ToastAndroid.show(`Signed Up - ${userName}`, 2000))
            .catch(e => {
                ToastAndroid.show(errMess(e.message), 2000)
                console.log('Sign Up err: >>' + e.message);
            })
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.hinh1}></View>
                <View style={styles.hinh2}></View>
                <View style={styles.centerView}>
                    <View style={styles.khung}>
                        <View style={styles.logoBox}>
                            <Icon
                                color='#fff'
                                name='user-plus'
                                type='font-awesome'
                                size={50}
                            />
                        </View>
                        <Text style={styles.txtTitle}>Sign Up</Text>
                        <View style={styles.hr}></View>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputLabel}>Username</Text>
                            <TextInput
                                style={styles.input}
                                autoCapitalize={'characters'}
                                onChangeText={(val) => setUserName(val)}
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputLabel}>Email</Text>
                            <TextInput
                                style={styles.input}
                                autoCapitalize={false}
                                onChangeText={(val) => setUserEmail(val)}
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputLabel}>Password</Text>
                            <TextInput
                                style={styles.input}
                                autoCapitalize={false}
                                secureTextEntry={true}
                                keyboardType='number-pad'
                                onChangeText={(val) => setUserPass(val)}
                            />
                        </View>

                        <TouchableOpacity
                            disabled={validate() == false}
                            style={[styles.OKButton, { backgroundColor: validate() == true ? "tomato" : "#808080" }]}
                            onPress={RegisterUser}>
                            <Text style={styles.ButtonText}>REGISTER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.registerText}>
                                Already have an account
                            </Text>
                        </TouchableOpacity>



                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}


