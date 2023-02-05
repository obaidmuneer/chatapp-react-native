import { Pressable, Text } from 'react-native';

const Anchor = ({ navigation, route, to, title }) => {
    return (
        <Pressable
            onPress={() => navigation.navigate(to)}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#ab47bc' : '#8e24aa',
                },
                {
                    alignSelf: 'flex-end',
                    padding: 5,
                    borderRadius: 2,
                    marginTop:5
                },
            ]}
        >
            <Text style={{ color: 'white' }} >
                {title}
            </Text>
        </Pressable>
    );
}

export default Anchor