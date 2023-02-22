import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Main from "./pages/Main";
import { Colors } from './constants/styles';
import {InputsNames} from "./constants/constants";
import {Inputs} from "./constants/constants";
import {Pagination} from "./pages/health-forms/pagination";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Tabs() {
    return (
        <BottomTabs.Navigator
            screenOptions={() => ({
                headerStyle: { backgroundColor: Colors.colors.primary500 },
                headerTintColor: 'white',
                tabBarStyle: { backgroundColor: Colors.colors.primary500 },
                tabBarActiveTintColor: Colors.colors.accent500
            })}
        >
            <BottomTabs.Screen
                name="MAIN"
                component={Main}
                options={{
                    title: 'Сегодняшнее самочувствие',
                    tabBarLabel: 'Самочувствие',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="hourglass" size={size} color={color} />
                    ),
                }}
                navigationKey="MAIN"
            />
        </BottomTabs.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: Colors.colors.primary500 },
                        headerTintColor: 'white',
                    }}
                >
                    <Stack.Screen
                        name="TABS"
                        component={Tabs}
                        options={{ headerShown: false }}
                        navigationKey="TABS"
                    />
                    {
                        Object.entries(Inputs).map((item) => (
                            <Stack.Screen
                                name={item[0]}
                                component={Pagination[item[0]]}
                                options={{
                                    presentation: 'modal',
                                    title: InputsNames[item[0]]
                                }}
                                navigationKey={item[0]}
                            />)
                        )
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
