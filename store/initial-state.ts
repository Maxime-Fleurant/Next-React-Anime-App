export const searchObj = {
  __typename: 'searchObj',
  id: '1',
  tag_in: null,
  genre_in: null,
  format: null,
  status: null,
  text: null,
  page: 1,
};

export const searchAnimePage = {
  __typename: 'searchAnimePage',
  id: '1',
  searchObj,
};

export const initialState = {
  searchAnimePage,
};
