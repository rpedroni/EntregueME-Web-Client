import {
  CREATE_LIST,
  CREATE_ITEM,
  DELETE_ITEM,
  CHANGE_CUSTOMER_LISTS
} from '../constants/ActionTypes';

export function createList(list) {
  return {
    type: CREATE_LIST,
    payload: {
      list: list,
      status: 'active'
    }
  };
}

export function createItem(listIndex, item) {
  return {
    type: CREATE_ITEM,
    payload: {
      listIndex: listIndex,
      item: item
    }
  };
}

export function deleteItem(listIndex, itemIndex) {
  return {
    type: DELETE_ITEM,
    payload: {
      listIndex: listIndex,
      itemindex: itemindex
    }
  };
}

export function changeCustomerLists(filter) {
  return {
    type: CHANGE_CUSTOMER_LISTS,
    payload: filter
  };
}
