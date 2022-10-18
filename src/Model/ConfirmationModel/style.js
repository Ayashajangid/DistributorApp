import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../../utility/responsive/responsive';

export const styles = StyleSheet.create({
    mainSection: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalSection: {
        width: wp(80),
        height: hp(20),
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    modalInnerScetion: {
        flexDirection: 'row',
        width: wp(40),
        justifyContent: 'space-between'
    },
    submitBtn: {
        paddingVertical: hp(1),
        paddingHorizontal: wp(4),
        backgroundColor: '#ccc',
        borderRadius: 15
    },
    cancelBtn: {
        paddingVertical: hp(1),
        paddingHorizontal: wp(4),
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15
    }
})