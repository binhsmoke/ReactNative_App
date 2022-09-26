import { Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../custom/styles'
import Icon from 'react-native-vector-icons/FontAwesome5'

const HeaderCategory = () => {
    const [modal, setModal] = useState(false)

    return (
        <View style={styles.headerCatContainer}>
            <View style={styles.headerCatTop}>
                <TouchableOpacity style={styles.headerCatTopLeft}>
                    <Icon styles={styles.headerLeftIcon}
                        name='tasks'
                        size={20}
                        color='black' />
                </TouchableOpacity>
                <View style={styles.headerCatTopCenter}>
                    <Text style={styles.headerCatTopCentertxtUp}>Location</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name='map-marker-alt'
                            size={17}
                            color='pink' />
                        <Text style={styles.headerCatTopCentertxtDown} numberOfLines={1}>Quận 4, Tp Hồ Chí Minh</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.headerCatTopRight}
                    onPress={() => setModal((vis) => !vis)}>
                    <Icon styles={styles.headerLeftIcon}
                        name='bell'
                        size={20} />
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 22, marginTop: 35, fontWeight: 'bold' }}>WHAT'S ON MENU</Text>
            {/* Modal */}
            <View style={styles.modalContainer}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modal}
                >
                    <View style={{ ...styles.modalContainer, marginTop: -100 }}>
                        <View style={styles.modalView}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalTitle}>News</Text>
                                <TouchableOpacity
                                    onPress={() => setModal((vis) => !vis)}>
                                    <Icon name='window-close' size={30} color='white' />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.modalTxt}>Bạn chưa có thông báo nào. Xin vui lòng quay lại sau. {'\n\n'}-Bình</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default HeaderCategory