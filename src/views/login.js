import { useContext, useRef, useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import Anchor from '../components/anchor'
import BackgroudnImg from '../components/backgroudnImg'
import Form from '../components/form'
import Input from '../components/input'
import Logo from '../components/logo'
import { GlobalContext } from '../context/context'

const Login = ({ navigation, route }) => {
    const { state, dispatch } = useContext(GlobalContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const passRef = useRef('')

    const handleSubmit = () => {
        dispatch({
            type: "user",
            payload: {
                email,
                name: 'obaid muneer'
            }
        });
        navigation.navigate('home')
    }
    return (
        <BackgroudnImg>
            <View style={styles.container} >
                <View style={styles.formContainer} >
                    <Logo />
                    <Form handleSubmit={handleSubmit} >
                        <Input label={'Email'} otherInputProps={
                            {
                                returnKeyType: 'next',
                                onSubmitEditing: () => passRef.current.focus()
                            }
                        }
                            handleValue={email}
                            handleChange={setEmail}
                        />
                        <Input label={'Password'} otherInputProps={
                            {
                                secureTextEntry: true,
                                ref: passRef,
                                onSubmitEditing: handleSubmit
                            }
                        }
                            handleChange={setPassword}
                            handleValue={password} />
                    </Form>
                    <Anchor to={'signup'} title='signup' navigation={navigation} />
                </View>
            </View >
        </BackgroudnImg>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        alignItems: 'center',
        marginTop:-80
    }
})

export default Login