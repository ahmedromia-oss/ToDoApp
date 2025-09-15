// _layout.tsx
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToDoContextProvider } from "../ToDos/contexts/ToDoContext";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ToDoContextProvider>
        <StatusBar style="light" backgroundColor="#000000" translucent={false} />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1a1a1a',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 18,
              color: '#ffffff',
            },
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: '#0a0a0a',
            },
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen 
            name="home"
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
            name="addToDo"
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
        </Stack>
      </ToDoContextProvider>
    </SafeAreaProvider>
  );
}