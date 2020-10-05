import './App.styles';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useGlobalStyles } from 'react-native-use-styles';
import { INITIAL_TODO_ITEMS } from './constants';
import { useAnimatedToggleList } from './utils';
import Header from './components/Header';
import AnimatedToggleList from './components/AnimatedToggleList';

export default function App() {
  const s = useGlobalStyles();
  const [todoList, toggleItem, addToggleItem] = useAnimatedToggleList(INITIAL_TODO_ITEMS);

  return (
    <SafeAreaView style={s`.container`}>
      <Header onAddItem={addToggleItem} />
      <AnimatedToggleList list={todoList} toggleItem={toggleItem} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
