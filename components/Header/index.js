import React, { useState, useCallback } from 'react';
import { Text, View, TextInput, TouchableOpacity} from 'react-native';
import useStyles from './styles';

const Header = ({ onAddItem }) => {
  const s = useStyles();

  const [itemText, setNewItem] = useState('');
  const onAdd = useCallback(() => {
    onAddItem(itemText);
    setNewItem('');
  }, [itemText]);

  return (
    <View style={s`.header`}>
      <Text style={s`.title`}>TO-DO</Text>
      <View style={s`.actionBox`}>
        <TextInput 
            placeholder="Add an item..."
            style={s`.actionLeft`}
            onChangeText={text => setNewItem(text)}
            value={itemText}
          />
        <TouchableOpacity onPress={onAdd} style={s`.actionRight`}>
          <Text style={s`.action`}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;