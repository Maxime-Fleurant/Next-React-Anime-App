export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Anime = {
  __typename?: 'Anime';
  id: Scalars['ID'];
  englishTitle?: Maybe<Scalars['String']>;
  romajiTitle?: Maybe<Scalars['String']>;
  nativeTitle?: Maybe<Scalars['String']>;
  desciption?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<Scalars['String']>;
  xLargeCoverImage?: Maybe<Scalars['String']>;
  largeCoverImage?: Maybe<Scalars['String']>;
  trailer: Scalars['String'];
  status: Scalars['String'];
  format: Scalars['String'];
  popularity: Scalars['Float'];
  studio: Studio;
  characters: Array<Maybe<Character>>;
  reviews: Array<Maybe<Review>>;
  externalLinks: Array<Maybe<ExternalLink>>;
  genres: Array<Maybe<Genre>>;
  tags: Array<Maybe<Tag>>;
};

export type BaseAnimeInput = {
  englishTitle?: Maybe<Scalars['String']>;
  romajiTitle?: Maybe<Scalars['String']>;
  nativeTitle?: Maybe<Scalars['String']>;
  desciption?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<Scalars['String']>;
  xLargeCoverImage?: Maybe<Scalars['String']>;
  largeCoverImage?: Maybe<Scalars['String']>;
  trailer: Scalars['String'];
  popularity: Scalars['Float'];
  status: Scalars['String'];
  format: Scalars['String'];
  studioId: Scalars['Float'];
  genreIds?: Maybe<Array<Maybe<Scalars['Float']>>>;
  tagIds?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type BaseCharacterInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  largeImg: Scalars['String'];
  mediumImg: Scalars['String'];
};

export type Character = {
  __typename?: 'Character';
  id: Scalars['ID'];
  name: Scalars['String'];
  nativeName: Scalars['String'];
  largeImg: Scalars['String'];
  mediumImg: Scalars['String'];
  description: Scalars['String'];
  anime: Anime;
};

export type CharacterInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  largeImg: Scalars['String'];
  mediumImg: Scalars['String'];
  animeId: Scalars['Float'];
};

export type CreateReviewInput = {
  summary: Scalars['String'];
  body: Scalars['String'];
  score: Scalars['Float'];
  animeId: Scalars['Float'];
  userId: Scalars['Float'];
};

export type CreateUserInput = {
  name: Scalars['String'];
  password: Scalars['String'];
};

export type ExternalLink = {
  __typename?: 'ExternalLink';
  site: Scalars['String'];
  url: Scalars['String'];
};

export type ExternalLinkInput = {
  site: Scalars['String'];
  url: Scalars['String'];
  animeId?: Maybe<Scalars['Float']>;
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteAnime: Scalars['String'];
  createAnime: Anime;
  addGenreFromAnime: Anime;
  removeGenreFromAnime: Anime;
  updateAnime: Anime;
  deleteCharacter: Scalars['String'];
  createCharacter: Character;
  updateCharacter: Character;
  deleteStudio: Scalars['String'];
  createStudio: Studio;
  deleteUser: Scalars['String'];
  createUser: User;
  deleteReview: Scalars['String'];
  createReview: Review;
  updateReview: Review;
};

export type MutationDeleteAnimeArgs = {
  id: Scalars['String'];
};

export type MutationCreateAnimeArgs = {
  externalLinkData?: Maybe<Array<ExternalLinkInput>>;
  charactersData?: Maybe<Array<BaseCharacterInput>>;
  animeData: BaseAnimeInput;
};

export type MutationAddGenreFromAnimeArgs = {
  genreIds: Array<Scalars['Float']>;
  animeId: Scalars['Float'];
};

export type MutationRemoveGenreFromAnimeArgs = {
  genreIds: Array<Scalars['Float']>;
  animeId: Scalars['Float'];
};

export type MutationUpdateAnimeArgs = {
  updateData: UpdateAnimeInput;
  animeId: Scalars['Float'];
};

export type MutationDeleteCharacterArgs = {
  id: Scalars['String'];
};

export type MutationCreateCharacterArgs = {
  characterData: CharacterInput;
};

export type MutationUpdateCharacterArgs = {
  characterData: UpdateCharacterInput;
  characterId: Scalars['Float'];
};

export type MutationDeleteStudioArgs = {
  id: Scalars['String'];
};

export type MutationCreateStudioArgs = {
  studioName: Scalars['String'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeleteReviewArgs = {
  id: Scalars['String'];
};

export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};

export type MutationUpdateReviewArgs = {
  input: UpdateReviewInput;
  id: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  Animes: Array<Anime>;
  Anime: Anime;
  searchAnime: Array<Anime>;
  Characters: Array<Character>;
  Character: Character;
  Studios: Array<Studio>;
  Studio: Studio;
  Users: Array<User>;
  User: User;
  login: LoginResult;
  Reviews: Array<Review>;
  Review: Review;
};

export type QueryAnimeArgs = {
  id: Scalars['ID'];
};

export type QuerySearchAnimeArgs = {
  searchInput: SearchAnimeInput;
};

export type QueryCharacterArgs = {
  id: Scalars['ID'];
};

export type QueryStudioArgs = {
  id: Scalars['ID'];
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryLoginArgs = {
  password: Scalars['String'];
  name: Scalars['String'];
};

export type QueryReviewArgs = {
  id: Scalars['ID'];
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['ID'];
  summary: Scalars['String'];
  body: Scalars['String'];
  animeId: Scalars['ID'];
};

export type SearchAnimeInput = {
  text?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  tagsIn?: Maybe<Array<Scalars['Float']>>;
  genresIn?: Maybe<Array<Scalars['Float']>>;
  limit: Scalars['Float'];
};

export type Studio = {
  __typename?: 'Studio';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
};

export type UpdateAnimeInput = {
  englishTitle?: Maybe<Scalars['String']>;
  romajiTitle?: Maybe<Scalars['String']>;
  nativeTitle?: Maybe<Scalars['String']>;
  desciption?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<Scalars['String']>;
  xLargeCoverImage?: Maybe<Scalars['String']>;
  largeCoverImage?: Maybe<Scalars['String']>;
  trailer?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Float']>;
  studioId?: Maybe<Scalars['Float']>;
};

export type UpdateCharacterInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type UpdateReviewInput = {
  summary?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  reviews: Array<Review>;
};
