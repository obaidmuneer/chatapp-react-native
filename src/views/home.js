import React, { useContext } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
} from 'react-native';
import { GlobalContext } from '../context/context';

function Home({ navigation }) {
    const { state, dispatch } = useContext(GlobalContext);

    const handleLogout = () => {
        dispatch({
            type: 'user',
            payload: null
        })
        navigation.navigate('login')
    }
    return (
        <View style={styles.container} >
            <Text style={styles.header} >
                Welcome to Home {state?.user?.name}
            </Text>

            <Button title='Logout' onPress={handleLogout} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    header: {
        fontSize: 24
    }
})

export default Home;
