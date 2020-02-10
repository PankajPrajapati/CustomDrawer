import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Dimensions } from 'react-native'
import HomeScreen from '../Home/HomeScreen'
import FoodList from '../Favourite/FoodList'


import DrawerMenu from './Drawer'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const HomeNavigator = createStackNavigator({
    HomeScreen,
},
    {
        initialRouteName: 'HomeScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f7f7f7'
            },
            headerTintColor: 'gray',
            gestureEnabled: false,
            drawerLockMode: 'locked-closed',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            layout: {
                orientation: ["portrait"],
            },
        },
    });

const FavouriteNavigator = createStackNavigator({
    FoodList,
},
    {
        initialRouteName: 'FoodList',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f7f7f7'
            },
            headerTintColor: 'gray',
            gestureEnabled: false,
            drawerLockMode: 'locked-closed',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            layout: {
                orientation: ["portrait"],
            },
        },
    });

const DrawerNavigator = createDrawerNavigator({
    HomeScreen: HomeNavigator,
    FavouriteScreen: FavouriteNavigator
}, {
    initialRouteName: 'HomeScreen',
    drawerBackgroundColor: 'red',
    contentComponent: DrawerMenu,
    drawerLockMode: "locked-closed",
    disableGestures: true,
    drawerWidth: screenWidth - 60,
    edgeWidth: 0,
    contentOptions: {
        activeTintColor: 'yellow',
    },
    layout: {
        orientation: ["portrait"],
    },
});

export default RootController = createAppContainer(DrawerNavigator);