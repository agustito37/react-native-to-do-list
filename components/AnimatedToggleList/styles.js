import { Styles } from 'react-native-use-styles';
import { secondary, text } from '../../App.styles';

export default Styles({
  list: {
    backgroundColor: secondary,
    flex: 1,
  },
  item: {
    height: 70,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  name: {
    fontSize: 19,
    color: text,
    flex: 0.7,
  },
  rightBox: {
    marginLeft: 'auto',
  }
});