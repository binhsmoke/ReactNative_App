import {
    StyleSheet,
    Dimensions
} from 'react-native'
import { Icon } from 'react-native-vector-icons/FontAwesome5';


export const styles = StyleSheet.create({
    /* Trang Login - Sign Up - Reset PWD*/
    container: {
        flex: 1,
        position: 'relative',
    },
    hinh1: {
        width: Dimensions.get('window').height * 0.7,
        height: Dimensions.get('window').height * 0.7,
        backgroundColor: '#f8a236',
        borderRadius: 1000,
        position: 'absolute',
        right: Dimensions.get('window').width * 0.25,
        top: -50,
    },
    hinh2: {
        width: Dimensions.get('window').height * 0.4,
        height: Dimensions.get('window').height * 0.4,
        backgroundColor: '#FFC17A',
        borderRadius: 1000,
        position: 'absolute',
        bottom: Dimensions.get('window').width * -0.2,
        right: Dimensions.get('window').width * -0.3,
    },
    centerView: {
        width: '100%',
        top: '15%',
    },
    khung: {
        width: '80%',
        backgroundColor: '#fafafa',
        borderRadius: 20,
        alignSelf: 'center',
        paddingHorizontal: 14,
        paddingBottom: 30,
        elevation: 5,
    },
    logoBox: {
        width: 100,
        height: 100,
        backgroundColor: 'tomato',
        borderRadius: 1000,
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: -50,
        marginBottom: -50,
        elevation: 2,
    },
    txtTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
    },
    hr: {
        width: '100%',
        height: 0.5,
        backgroundColor: 'black',
        marginTop: 6,
    },
    inputBox: {
        marginTop: 10,
    },
    inputLabel: {
        fontSize: 18,
        marginBottom: 6,
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: '#dfe4ea',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    OKButton: {
        // backgroundColor: 'tomato',
        marginTop: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    ButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    registerText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
    },
    forgotPasswordText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
    },
    noteText: {
        textAlign: 'left',
        marginTop: 10,
        fontSize: 12,
        color: 'red'
    },
    /* TAB BAR */
    // tabBar: {
    //     tabBarLabelStyle: { fontSize: 18, color: 'tomato' },
    //     tabBarItemStyle: {
    //         width: Dimensions.get('window').width / 2,
    //         height: Dimensions.get('window').height / 15,
    //         borderRadius: 100,
    //     },
    //     tabBarStyle: {
    //         height: 50
    //     }
    // },


    /** Profile */
    coverImage: { height: 250, width: '100%' },
    profileContainer: {
        backgroundColor: '#fff',
        marginTop: -100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    profileImageView: { alignItems: 'center', marginTop: -50, position: 'relative' },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#fff',

    },
    changeImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        position: 'absolute',
        bottom: '0%',
        right: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameAndBioView: { alignItems: 'center', marginTop: 10 },
    userFullName: { fontSize: 26 },
    userBio: {
        fontSize: 18,
        color: '#333',
        marginTop: 4,
    },
    interactButtonsView: {
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    interactButton: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'tomato',
        margin: 5,
        borderRadius: 8,
    },
    interactButtonText: {
        color: '#fff',
        fontSize: 18,
        paddingVertical: 6,
    },
    /* Item Category*/
    categoryContainer: {
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    itemContainer: {
        marginTop: 50,
        width: Dimensions.get('window').width / 2.2,
        backgroundColor: null
    },
    itemCatView: {
        height: Dimensions.get('window').height / 3.6,
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: 'tomato',
        elevation: 10,
    },
    itemCatImageView: { alignItems: 'center', marginTop: -40 },
    itemCatImage: {
        width: 120,
        height: 120,
        borderRadius: 100,
        elevation: 2
    },
    itemCatName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemCatDes: {
        fontSize: 14,
        color: 'grey',
        textAlign: 'left'
    },
    itemCatQuan: {
        fontSize: 14,
        textAlign: 'left'
    },
    //*Header category*//
    headerCatContainer: {
        flex: 1,
        marginTop: 20
    },
    headerCatTop: {
        width: '100%',
        height: 50,
        flexDirection: 'row'
    },
    headerCatTopLeft: {
        borderRadius: 100,
        borderWidth: .1,
        elevation: 1,
        width: 50,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    headerCatTopCenter: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        marginHorizontal: 10,
    },
    headerCatTopRight: {
        borderRadius: 100,
        borderWidth: .1,
        elevation: 1,
        width: 50,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    headerCatTopCentertxtUp: {
        fontSize: 16,
        color: 'grey'
    },
    headerCatTopCenterViewDown: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerCatTopCentertxtDown: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 12
    }
    ,
    //*Modal//
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    modalView: {
        width: '80%',
        backgroundColor: 'tomato',
        borderRadius: 10,
        padding: 15,
        elevation: 5,
        alignSelf: 'center',
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modalTitle: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    modalTxt: {
        color: 'white',
        fontSize: 16,
        marginTop: 20,
    }
    ,
    /**item food */
    txtTitleFood: {
        fontSize: 26,
        fontWeight: 'bold',
        margin: 15,
        textDecorationLine: 'underline'
    },
    itemFooContainer: {
        marginTop: 20,
        width: '100%'
    },
    itemFooView: {
        height: Dimensions.get('window').height / 6,
        width: '95%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderRadius: 5,
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row'

    },
    itemFooImgView: {
        alignItems: 'center',
        width: '40%',
        height: '100%',
        alignItems: 'flex-start'
    },
    imgFooImg: {
        width: '90%',
        height: '100%',
        borderRadius: 8,
        resizeMode: 'cover'

    },
    itemFooTxtView: {
        width: '60%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 5
    },
    itemFooName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    itemFooAdr: {
        fontSize: 14,
        fontStyle: 'italic',
        color: 'grey'
    }
    ,
    /** Food Detail*/
    detailContainer: {
        flex: 1,
        backgroundColor: 'tomato'
    },
    detailUp: {
        backgroundColor: 'white',
        height: Dimensions.get('window').height * 0.75,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 15,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    detailUpTop: {
        width: '100%',
        alignItems: 'center',
        height: '8%'
    },
    detailUpBot: {
        height: '40%',
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 15,
    },
    detailUpMid: {
        height: '50%'
    },
    detailImg: {
        marginTop: 20,
        height: 220,
        width: 220,
        borderRadius: 1000,
        resizeMode: 'cover'
    },

    detailDown: {
        backgroundColor: 'tomato',
        flex: 1,
        flexDirection: 'row'
    },

    detailDownRight: {
        flex: .9,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    btnAddtoCart: {
        backgroundColor: 'white',
        borderRadius: 7,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txtAddtoCart: {
        color: 'tomato',
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 16,
        fontSize: 16
    },
    detailDownLeft: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailDownLeftBox: {
        width: '30%',
        height: '30%',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }, detailDownLeftPlus: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },

    detailDownLeftNumber: {
        marginHorizontal: 15,
        fontSize: 22,
        color: 'white'
    },
    detailName: {
        fontSize: 28,
        fontWeight: 'bold'
    },


    detailPrice: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'orange'
    },
    detailDes: {
        fontSize: 13,
        color: 'grey',
        textAlign: 'left',
        marginVertical: 8

    },
    detailAdr: {
        fontSize: 16,
        fontWeight: 'bold',
    }

});