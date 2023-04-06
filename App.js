import 'react-native-url-polyfill/auto';
import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { store } from './store';
import { Provider } from 'react-redux';
import BasketScreen from './screens/BasketScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen 
            name="Basket" 
            component={BasketScreen} 
            options={{ headerShown: false, presentation: 'modal' }} />
          <Stack.Screen 
            name="PlaceOrder" 
            component={PlaceOrderScreen} 
            options={{ headerShown: false, presentation: 'fullScreenModal' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}