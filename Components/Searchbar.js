import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = () => {
    return(
        <View style={styles.container}>
            <TextInput placeholder="Buscar..."/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 8
    },
    SearchInput:{
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16
    }
})

export default SearchBar;