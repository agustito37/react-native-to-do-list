import React from 'react';
import { FlatList, Text, View } from 'react-native';
import CheckBox from 'react-native-check-box'
import { primary } from '../../App.styles';
import useStyles from './styles';

const AnimatedToggleList = ({ list, toggleItem }) => {
  const s = useStyles();

  return (
    <FlatList
      style={s`.list`}
      data={list.filter(({ done }) => !done)}
      keyExtractor={({ key }) => key}
      renderItem={({ item: { key, name, checked } }) => (
        <View style={s`.item`}>
          <Text style={s`.name`}>{name}</Text>
          <View style={s`.rightBox`}>
            <CheckBox
              isChecked={checked}
              onClick={() => toggleItem(key)}
              checkBoxColor={primary}
              uncheckedCheckBoxColor={primary}
            />
          </View>
        </View>
      )}
    />
   );
};

export default AnimatedToggleList;