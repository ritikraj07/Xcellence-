import {useState, useEffect} from 'react';
import { View, Dimensions, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import { Text, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
const phWidth = Dimensions.get('window').width;
function SearchCom({ navigation }) {
    const [search, setseach] = useState('')
    function handleserach() {
        console.log(search)
    }
    return (
        <ImageBackground source={require('./seaBG.png')} style={styles.searchView}  >
            <ImageBackground source={{ uri:'https://img.freepik.com/free-vector/blue-curve-frame-template_53876-114605.jpg'}} style={styles.header} >
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Icon name="arrow-back" type='ionicons' size={35} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                    <Image source={require('./logo2.png')}  style={styles.logo} resizeMode='cover' />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.searchInputView} onPress={() => handleserach()}>
                <TouchableOpacity>
                    <Icon name='search' size={35}  />
                </TouchableOpacity>
                <TextInput
                    placeholder='Search for products'
                    placeholderTextColor="black"
                    style={styles.searchInput}
                    onChangeText={setseach}
                />
                <TouchableOpacity>
                    <Icon name='mic' size={35} />
                </TouchableOpacity>
            </View>
            


        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    searchView: {
        flex: 1,
        width: '100%',
    },
    header: {
        width: '110%',
        height: 45,
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        justifyContent:'space-between'
    },
    logo: {
        width: 70,
        height: 35,
        marginRight:40
    },
    searchInputView: {
        flexDirection: 'row',
        borderWidthVertical: 1,
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor:'white',
        marginHorizontal: 0,
        paddingHorizontal: 12,
        paddingVertical:10,
        width: phWidth
    },
    searchInput: {
        fontSize: 18,
        width:'70%'
    },

})



export default SearchCom;