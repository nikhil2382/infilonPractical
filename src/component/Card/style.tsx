import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    borderRadius: 12,
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 12,
    padding: 12,
    borderColor: '#000000',
    borderWidth: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  detailContainer: {
    flex: 1,
    marginHorizontal: 12,
    width: '100%',
  },
  title: {
    flex: 1,
    color: '#000000',
  },
  switch: {
    alignSelf: 'flex-end',
  },
});

export default style;
