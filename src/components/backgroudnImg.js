import { ImageBackground, StyleSheet } from 'react-native'

const BackgroudnImg = ({ children }) => {
    return (
        <ImageBackground style={styles.imageBackground} blurRadius={3} resizeMode='cover'
            source={{ uri: 'https://plus.unsplash.com/premium_photo-1668473367234-fe8a1decd456' }} >
            {children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        // width: '100%',
        height: '100%',
    }
})


export default BackgroudnImg