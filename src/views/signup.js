import { useContext, useRef, useState } from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import Anchor from '../components/anchor';
import BackgroudnImg from '../components/backgroudnImg';
import Form from '../components/form';
import Input from '../components/input';
import Logo from '../components/logo';
import { GlobalContext } from '../context/context';

export default function Signup({ navigation }) {
    const { state, dispatch } = useContext(GlobalContext)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    const nameRef = useRef('')
    const emailRef = useRef('')
    const passRef = useRef('')
    const confirmPassRef = useRef('')

    const handleSubmit = () => {
        Keyboard.dismiss()
        dispatch({
            type: 'user',
            payload: {
                email,
                name: 'Obaid Muneer'
            }
        })
        navigation.navigate('home')
    }
    return (
        <BackgroudnImg>
            <View style={styles.container} >
                <View style={styles.formContainer} >
                    <Logo />
                    <Form handleSubmit={handleSubmit} >
                        <Input label="Name:" otherInputProps={{
                            ref: nameRef,
                            onSubmitEditing: () => emailRef.current.focus()
                        }}
                            handleChange={setEmail}
                            handleValue={email}
                        />
                        <Input label="Email :" otherInputProps={{
                            ref: emailRef,
                            onSubmitEditing: () => passRef.current.focus()

                        }}
                            handleChange={setName}
                            handleValue={name}
                        />
                        <Input label={"Pass :"} otherInputProps={{
                            secureTextEntry: true,
                            ref: passRef,
                            onSubmitEditing: () => confirmPassRef.current.focus()

                        }}
                            handleChange={setPass}
                            handleValue={pass}
                        />
                        <Input label={"Confirm Pass :"} otherInputProps={{
                            secureTextEntry: true,
                            ref: confirmPassRef,
                            onSubmitEditing: handleSubmit
                        }}
                            handleChange={setConfirmPass}
                            handleValue={confirmPass}
                        />
                    </Form>
                    <Anchor to={'login'} title={'Login'} navigation={navigation} />
                </View>
            </View>
        </BackgroudnImg>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBackground: {
        height: '100%',
    },
    formContainer: {
        alignItems: 'center'
    }
});
