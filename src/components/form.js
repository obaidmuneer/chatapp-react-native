import { StyleSheet, View, Button } from 'react-native';

Form = ({ children, handleSubmit }) => {
    return (
        <View>
            {children}
            <View>
                <Button
                    onPress={handleSubmit}
                    title="Submit"
                    color="#841584"
                />
            </View>
        </View>
    );
}

export default Form