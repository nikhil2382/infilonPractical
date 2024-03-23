import {Image, Switch, Text, View} from 'react-native';
import {ItemType} from '../../reducers/reducer.ts';
import {useState} from 'react';
import {hideItem, showItem} from '../../actions/actions.ts';
import {useDispatch} from 'react-redux';
import style from './style.tsx';

interface Props {
  item: ItemType;
}
const Card = ({item}: Props) => {
  const dispatch = useDispatch();

  const {id, albumId, url, title, isToggleEnabled} = item;

  const [isEnabled, setIsEnabled] = useState<boolean>(isToggleEnabled);
  const toggleSwitch = () => {
    if (isEnabled) {
      dispatch(hideItem({id, albumId}));
    } else {
      dispatch(showItem({id, albumId}));
    }
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={style.container}>
      <Image source={{uri: url}} style={style.image} />

      <View style={style.detailContainer}>
        <Text style={style.title}>{title}</Text>

        <Switch
          trackColor={{false: '#767577', true: '#767577'}}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={style.switch}
        />
      </View>
    </View>
  );
};

export default Card;
