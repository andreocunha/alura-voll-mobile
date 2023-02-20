import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

import Home from './Home';
import Explorar from './Explorar';
import Consultas from './Consultas';
import Perfil from './Perfil';

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#002851', // cor de fundo do bottom tab
        },
        tabBarActiveTintColor: '#339CFF', // cor dos ícones quando a tela está selecionada
        tabBarInactiveTintColor: '#FFFFFF', // cor dos ícones quando a tela não está selecionada
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen
        name="Consultas"
        component={Consultas}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Explorar" 
        component={Explorar} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
