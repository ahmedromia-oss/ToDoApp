// App.tsx (replace your _layout.tsx with this)
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddTodoForm from '../app/addToDo';
import HomeScreen from '../app/home';
import { ToDoContextProvider } from '../ToDos/contexts/ToDoContext';

// Import your screens - adjust paths as needed

// Define your navigation types
export type RootStackParamList = {
  Home: undefined;
  AddToDo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <ToDoContextProvider>
          <StatusBar style="light" backgroundColor="#000000" translucent={false} />
          <Stack.Navigator
           screenOptions={{headerShown:false}}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Todo List',
                headerStyle: {
                  backgroundColor: '#000000',
                },
                headerTitleStyle: {
                  fontWeight: '700',
                  fontSize: 26,
                  color: '#ffffff',
                },
                headerTitleAlign: 'left',
              }}
            />
            
            <Stack.Screen
              name="AddToDo"
              component={AddTodoForm}
              options={{
                title: 'Add New Todo',
                presentation: 'modal',
                headerStyle: {
                  backgroundColor: '#1a1a1a',
                },
                headerTitleStyle: {
                  fontWeight: '600',
                  fontSize: 18,
                  color: '#ffffff',
                },
                headerTitleAlign: 'center',
                headerLeft: () => null,
                gestureEnabled: true,
                animationDuration: 300,
              }}
            />
          </Stack.Navigator>
      </ToDoContextProvider>
    </SafeAreaProvider>
  );
}