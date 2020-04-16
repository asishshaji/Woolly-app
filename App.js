import * as Font from 'expo-font';
import * as React from 'react';

import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import { Header } from 'react-native-elements'
import HomeScreen from './screens/HomeScreen'
import { Ionicons } from '@expo/vector-icons';
import Login from './screens/MobileLogin'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { SplashScreen } from 'expo';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import storeReducer from './reducers/ProductReducer'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

const Store = createStore(storeReducer)

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const containerRef = React.useRef();

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer ref={containerRef} >
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Login" component={Login}
                options={{ swipeEnabled: false }} />
              <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const Home = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} options={{
      header: ({ screen, previous, navigation }) => {
        return (
          <Header
            placement="left"
            leftComponent={{ icon: 'menu', color: 'black', onPress: () => navigation.toggleDrawer() }}
            centerComponent={{ text: 'Woolly farms', style: { color: 'black' } }}
            rightComponent={<View style={{ flexDirection: 'row', padding: 5 }}>
              <Ionicons name="ios-search" size={24} color="black" style={{ alignSelf: 'flex-end' }} onPress={() => alert('Search')} />
              <Ionicons name="md-cart" size={24} color="black" style={{ alignSelf: 'flex-end', marginLeft: 20 }} onPress={() => alert('Cart')} />
            </View>}
            backgroundColor="#fff"
          />
        )
      }
    }} />
  </Stack.Navigator>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
