import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/views/home';
import Login from './src/views/login';
import Signup from './src/views/signup';
import ContextProvider, { GlobalContext } from './src/context/context';

const Stack = createNativeStackNavigator();

function App() {
  const { state } = useContext(GlobalContext)

  return (
    <ContextProvider>
      <NavigationContainer>

        <Stack.Navigator >
          <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='signup' component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>

      </NavigationContainer>
    </ContextProvider>


  );
}

const styles = StyleSheet.create({

});

export default App;
