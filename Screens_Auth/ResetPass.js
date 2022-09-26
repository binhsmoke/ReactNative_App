
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
import { styles } from '../custom/styles';
import '../firebase/config'
import { sendPasswordResetEmail, getAuth } from 'firebase/auth'
import { errMess } from '../firebase/errMess';
const ResetPass = (props) => {
    const { navigation } = props
    const [userEmail, setUserEmail] = useState('')
    const [timer, setTimer] = useState(10)
    const validate = () => userEmail.length > 0
    const auth = getAuth()

    const ResetPwd = () => {
        sendPasswordResetEmail(auth, userEmail)
            .then(() => ToastAndroid.show("Verify code has been sent", 2000))
            .then(() => navigation.navigate('SignIn'))
            .catch((e) => {
                ToastAndroid.show(errMess(e.message), 2000)
                console.log("Reset PWD >>" + e.message);
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
                                name='lock'
                                type='font-awesome'
                                size={50}
                            />
                        </View>
                        <Text style={styles.txtTitle}>Reset password</Text>
                        <View style={styles.hr}></View>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputLabel}>Email</Text>
                            <TextInput
                                style={styles.input}
                                autoCapitalize={false}
                                onChangeText={val => setUserEmail(val)}
                            />
                        </View>
                        <Text style={styles.noteText}>* Verify code will be sent to this email</Text>
                        <TouchableOpacity
                            onPress={ResetPwd}
                            disabled={validate() == false}
                            style={[styles.OKButton, { backgroundColor: validate() == true ? "tomato" : "#808080" }]}>
                            <Text style={styles.ButtonText}>CONFIRM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.registerText}>
                                GO BACK
                            </Text>
                        </TouchableOpacity>


                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ResetPass
