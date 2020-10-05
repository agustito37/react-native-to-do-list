import { Styles } from 'react-native-use-styles';
import { secondary, text } from '../../App.styles';

export default Styles({
  header: {
    alignItems: 'center',
    height: 76,
    flexDirection: 'column',
    paddingHorizontal: 14,
  },
  title: {
    color: secondary,
    fontWeight: 'bold',
    fontSize: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBox: {
    marginTop: 8,
    flexDirection: 'row',
    height: 30
  },
  actionLeft: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    color: text
  },
  actionRight: {
    width: 36,
  },
  action: {
    fontWeight: 'bold',
    fontSize: 24,
    color: secondary,
    textAlign: 'center',
  },
});