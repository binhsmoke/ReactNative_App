import React, { useState } from 'react';
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
import { styles } from '../custom/styles'
import '../firebase/config'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { errMess } from '../firebase/errMess';


export default SignIn = (props) => {
    const { navigation } = props
    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')
    const [info, setInfo] = useState('')
    const validate = () => userEmail.length > 0 && userPass.length > 0
    const auth = getAuth()
    const db = getFirestore()
    const LoginUser = () => {
        signInWithEmailAndPassword(auth, userEmail, userPass)
            .then(() => ToastAndroid.show(`Signed In`, 2000))
            .catch(e => {
                ToastAndroid.show(errMess(e.message), 2000)
                console.log('Sign In err: >>' + e.message);
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
                                name='check'
                                type='font-awesome'
                                size={50}
                            />
                        </View>
                        <Text style={styles.txtTitle}>Sign In</Text>
                        <View style={styles.hr}></View>
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
                            onPress={LoginUser}>
                            <Text style={styles.ButtonText}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.registerText}>
                                Create an account
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ResetPass')}>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}


