import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Main from "./pages/Main";
import { Colors } from './styles/styles';
import {Pagination, Forms, FormsHeaders} from "./pages/health-forms/forms-utils";
import Statistic from "./pages/Statistic";
import Settings from "./pages/Settings";
import {Provider} from 'react-redux';
import Registration from "./pages/Registration";
import {getItem} from "./storage/storage";
import {storageKeys} from "./constants/enums";
import {store} from "./store";
import {setAuthStatus} from "./store/actions";
import {useAppSelector} from "./hooks";

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
            <BottomTabs.Screen
                name="STAT"
                component={Statistic}
                options={{
                    title: 'Журнал',
                    tabBarLabel: 'Журнал',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="stats-chart" size={size} color={color} />
                    ),
                }}
                navigationKey="MAIN"
            />
            <BottomTabs.Screen
                name="SETTINGS"
                component={Settings}
                options={{
                    title: 'Настройки',
                    tabBarLabel: 'Настройки',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }}
                navigationKey="MAIN"
            />
        </BottomTabs.Navigator>
    );
}

function Page() {
    const authStatus = useAppSelector((state) => state.authStatus);
    return authStatus ? (
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
                        Object.entries(Forms).map((item) => {
                            const name = item[0];
                            const component = Pagination[item[0]];
                            const title = FormsHeaders[item[0]];
                            return (<Stack.Screen
                                name={name}
                                component={component}
                                options={{
                                    presentation: 'modal',
                                    title: title
                                }}
                                navigationKey={name}
                            />)
                        })
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </>
    ) : <Registration />;
}

export default function App() {
    getItem(storageKeys.DATE_START).then(date => store.dispatch(setAuthStatus(date !== null)));
    return (
        <Provider store={store}>
            <Page />
        </Provider>
    );
}
