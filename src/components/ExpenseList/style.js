import { StyleSheet } from 'react-native';
import { hp, wp } from '../../utility/responsive/responsive';

export const styles = StyleSheet.create({
    expenseSection: {
        flexDirection: 'row',
        paddingVertical: hp(1),
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    expenseInnerSection: {
        flexDirection: 'row',
        flex: 2
    },
    dateSection: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
        borderRadius: 10
    },
    detailSection: {
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    desc: {
        fontSize: 20,
        color: '#000'
    },
    deleteBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
})