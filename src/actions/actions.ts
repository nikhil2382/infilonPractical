import * as TYPES from './types.ts';
import {ItemType} from '../reducers/reducer.ts';
import {GET_SPLITED_SEARCH_ITEMS, HIDE_ITEM, SHOW_ITEM} from './types.ts';

export const fetchData = () => {
  return {type: TYPES.GET_DATA};
};
export const fetchDataSuccess = (data: ItemType[]) => {
  return {type: TYPES.GET_DATA_SUCCESS, data};
};
export const fetchDataFailure = () => {
  return {type: TYPES.GET_DATA_FAILURE};
};

export const getNewSplitedData = (data: number) => {
  return {type: TYPES.GET_SPLITED_DATA, data};
};

export const searchItems = (data: string) => {
  return {type: TYPES.SEARCH_ITEMS, data};
};
export const hideItem = (data: {id: number; albumId: number}) => {
  return {type: TYPES.HIDE_ITEM, data};
};
export const showItem = (data: {id: number; albumId: number}) => {
  return {type: TYPES.SHOW_ITEM, data};
};
