import { useState, useCallback } from 'react';
import { LayoutAnimation } from 'react-native';

export const getTodoItem = (name) => ({
  name,
  key: name + Math.random(),
  checked: false,
  done: false,
});

export const useAnimatedToggleList = (initialValue) => {
  const [toggleList, setToggleList] = useState(initialValue);

  const addToggleItem = useCallback((name) => {
    if (!name) return;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const newToggleList = [...toggleList];

    newToggleList.push(getTodoItem(name));
    
    setToggleList(newToggleList);
  }, [toggleList]);

  const toggleItem = useCallback((key) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    setToggleList((current) => {
      const newList = [...toggleList];
      const item = newList.find((item) => item.key === key);
      item.checked = !item.checked;
      
      return newList;
    });

    setTimeout(
      () => setToggleList((current) => {
        const newList = [...toggleList];
        const item = newList.find((item) => item.key === key);
        item.done = !item.done;

        return newList;
      }
    ), 100);
  }, [toggleList]);

  return [toggleList, toggleItem, addToggleItem];
}