import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function Input({
    label,
    otherInputProps,
    handleChange,
    handleValue,
}) {
    const [bgColor, setbgColor] = useState(null)
    return (
        <View style={styles.inputContainer} >
            <Text style={styles.label} >{label}</Text>
            <TextInput
                onFocus={() => setbgColor('white')}
                onBlur={() => setbgColor(null)}
                style={{ ...styles.input, backgroundColor: bgColor }
                }
                {...otherInputProps}
                onChangeText={handleChange}
                value={handleValue}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 5,
        borderRadius: 2,
        borderWidth: 1,
        padding: 4,
        // backgroundColor: 'white'
    },
    label: {
        marginBottom: 3,
        fontWeight: '600',
        fontSize: 18,
    },
    inputContainer: {
        // padding: 5,
        width: 270,
    },
});
