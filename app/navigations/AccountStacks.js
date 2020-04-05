import { createStackNavigator } from "react-navigation-stack";
import MyAccountScreen from "../screens/MyAccount";

const AccountScreenStacks = createStackNavigator({
    TopRestaurants: {
        screen: MyAccountScreen,
        navigationOptions: () => ({
            title: "Mi cuenta"
        })
    }
})

export default AccountScreenStacks