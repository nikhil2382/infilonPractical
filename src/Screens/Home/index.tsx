import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  TextInput,
  View,
} from 'react-native';
import {Card} from '../../component';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {
  fetchData,
  getNewSplitedData,
  searchItems,
} from '../../actions/actions.ts';
import debounce from 'lodash.debounce';
import style from './style.tsx';
import {ItemType} from '../../reducers/reducer.ts';

const Home = () => {
  const dispatch = useDispatch();

  const {isImageDataLoading, imageData, splitedImageData, searchedItems} =
    useSelector(state => state.reducer);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState(2);

  const handleSearch = () => {
    dispatch(searchItems(searchQuery));
  };

  const debouncedSearch = debounce(handleSearch, 500);

  const handleInputChange = (text: string) => {
    setSearchQuery(text);
    debouncedSearch(text);
  };

  const handleLoadMore = () => {
    if (!isImageDataLoading && page < imageData.length / 10) {
      dispatch(getNewSplitedData(page + 1));
      setPage(page + 1);
    }
  };

  const isSearch = searchQuery.length <= 0;

  const renderFooter = () => {
    return isImageDataLoading ? (
      <ActivityIndicator style={style.loader} size="large" />
    ) : null;
  };

  const renderItem = ({item, index}: {item: ItemType; index: number}) => (
    <Card key={index} item={item} />
  );

  const fetchImageData = () => dispatch(fetchData());

  useEffect(() => {
    fetchImageData();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.searchBoxContainer}>
        <TextInput
          style={style.searchBoxTextInput}
          placeholder={'Search...'}
          value={searchQuery}
          onChangeText={handleInputChange}
        />
      </View>

      {isImageDataLoading ? (
        <View style={style.container}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <FlatList
          data={isSearch ? splitedImageData : searchedItems}
          onRefresh={fetchImageData}
          refreshing={isImageDataLoading}
          renderItem={renderItem}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
