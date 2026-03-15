import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        height: 120,
        width: '90%',
        marginHorizontal: '5%',
        marginTop: 20,
        borderRadius: 10,
        marginBottom: 10,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: '500'
    },
    taskDesc: {
        fontSize: 14,
        color: '#666',
        marginTop: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
        marginTop: 10
    },
    editText: {
        backgroundColor: '#4CAF50',
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 6,
        overflow: 'hidden'
    },
    deleteText: {
        backgroundColor: '#F44336',
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 6,
        overflow: 'hidden'
    }
});