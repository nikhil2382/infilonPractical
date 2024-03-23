import * as TYPES from '../actions/types';

export interface ItemType {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  isToggleEnabled: boolean;
}

export interface FilterItemType {
  id: number;
  albumId: number;
}

interface state {
  imageData: Array<ItemType>;
  splitedImageData: Array<ItemType>;
  searchedItems: Array<ItemType>;
  filterItem: Array<FilterItemType>;
  isImageDataLoading: boolean;
}

const initialState: state = {
  imageData: [],
  splitedImageData: [],
  searchedItems: [],
  filterItem: [],
  isImageDataLoading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_DATA:
      return {...state, isImageDataLoading: true};
    case TYPES.GET_DATA_SUCCESS:
      const responseData = action.data
        .map(item => ({
          ...item,
          isToggleEnabled: true,
        }))
        .filter(item => {
          return !state.filterItem.some(
            i => i.id === item.id && i.albumId === item.albumId,
          );
        });

      return {
        ...state,
        imageData: responseData,
        splitedImageData: [...responseData].slice(0, 10),
        isImageDataLoading: false,
      };
    case TYPES.GET_DATA_FAILURE:
      return {...state, isImageDataLoading: false};

    case TYPES.GET_SPLITED_DATA:
      return {
        ...state,
        splitedImageData: [...state.imageData].slice(0, action.data * 10),
        isImageDataLoading: false,
      };

    case TYPES.HIDE_ITEM:
      return {
        ...state,
        filterItem: [...state.filterItem, action.data],
        isImageDataLoading: false,
      };

    case TYPES.SHOW_ITEM:
      return {
        ...state,
        filterItem: [...state.filterItem].filter(
          item => JSON.stringify(item) !== JSON.stringify(action.data),
        ),
        isImageDataLoading: false,
      };

    case TYPES.SEARCH_ITEMS:
      if (action.data.trim() === '') {
        return {
          ...state,
          searchedItems: [],
          isImageDataLoading: false,
        };
      } else {
        const results = [...state.imageData].filter(item =>
          item.title.toLowerCase().includes(action.data.toLowerCase()),
        );

        return {
          ...state,
          searchedItems: results,
          isImageDataLoading: false,
        };
      }

    default:
      return state;
  }
};
