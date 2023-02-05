import { Image, View } from 'react-native';

const Logo = () => {
    return (
        <View>
            <Image style={{ width: 150, height: 150, borderRadius: 50 }} source={{
                uri: 'https://img.freepik.com/free-vector/computer-safety-technology-icon_53876-118352.jpg'
            }} />
        </View>
    );
}

export default Logo