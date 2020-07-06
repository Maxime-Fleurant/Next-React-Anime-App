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
  bannerImage?: Maybe<Scalars['String']>;
  characters: Array<Maybe<Character>>;
  desciption?: Maybe<Scalars['String']>;
  englishTitle?: Maybe<Scalars['String']>;
  externalLinks: Array<Maybe<ExternalLink>>;
  format: Scalars['String'];
  genres: Array<Maybe<Genre>>;
  id: Scalars['ID'];
  largeCoverImage?: Maybe<Scalars['String']>;
  mediumCoverImage?: Maybe<Scalars['String']>;
  nativeTitle?: Maybe<Scalars['String']>;
  popularity: Scalars['Float'];
  reviews: Array<Maybe<Review>>;
  romajiTitle?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  studio: Studio;
  tags: Array<Maybe<Tag>>;
  trailer: Scalars['String'];
  xLargeCoverImage?: Maybe<Scalars['String']>;
};

export type BaseAnimeInput = {
  bannerImage?: Maybe<Scalars['String']>;
  desciption?: Maybe<Scalars['String']>;
  englishTitle?: Maybe<Scalars['String']>;
  format: Scalars['String'];
  genreIds?: Maybe<Array<Maybe<Scalars['Float']>>>;
  largeCoverImage?: Maybe<Scalars['String']>;
  nativeTitle?: Maybe<Scalars['String']>;
  popularity: Scalars['Float'];
  romajiTitle?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  studioId: Scalars['Float'];
  tagIds?: Maybe<Array<Maybe<Scalars['Float']>>>;
  trailer: Scalars['String'];
  xLargeCoverImage?: Maybe<Scalars['String']>;
};

export type BaseCharacterInput = {
  description: Scalars['String'];
  largeImg: Scalars['String'];
  mediumImg: Scalars['String'];
  name: Scalars['String'];
};

export type Character = {
  __typename?: 'Character';
  anime: Anime;
  description: Scalars['String'];
  id: Scalars['ID'];
  largeImg: Scalars['String'];
  mediumImg: Scalars['String'];
  name: Scalars['String'];
  nativeName?: Maybe<Scalars['String']>;
};

export type CharacterInput = {
  animeId: Scalars['Float'];
  description: Scalars['String'];
  largeImg: Scalars['String'];
  mediumImg: Scalars['String'];
  name: Scalars['String'];
};

export type CreateReviewInput = {
  animeId: Scalars['Float'];
  body: Scalars['String'];
  score: Scalars['Float'];
  summary: Scalars['String'];
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
  animeId?: Maybe<Scalars['Float']>;
  site: Scalars['String'];
  url: Scalars['String'];
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
  addGenreFromAnime: Anime;
  createAnime: Anime;
  createCharacter: Character;
  createReview: Review;
  createStudio: Studio;
  createUser: User;
  deleteAnime: Scalars['String'];
  deleteCharacter: Scalars['String'];
  deleteReview: Scalars['String'];
  deleteStudio: Scalars['String'];
  deleteUser: Scalars['String'];
  removeGenreFromAnime: Anime;
  updateAnime: Anime;
  updateCharacter: Character;
  updateReview: Review;
};

export type MutationAddGenreFromAnimeArgs = {
  animeId: Scalars['Float'];
  genreIds: Array<Scalars['Float']>;
};

export type MutationCreateAnimeArgs = {
  animeData: BaseAnimeInput;
  charactersData?: Maybe<Array<BaseCharacterInput>>;
  externalLinkData?: Maybe<Array<ExternalLinkInput>>;
};

export type MutationCreateCharacterArgs = {
  characterData: CharacterInput;
};

export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};

export type MutationCreateStudioArgs = {
  studioName: Scalars['String'];
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeleteAnimeArgs = {
  id: Scalars['String'];
};

export type MutationDeleteCharacterArgs = {
  id: Scalars['String'];
};

export type MutationDeleteReviewArgs = {
  id: Scalars['String'];
};

export type MutationDeleteStudioArgs = {
  id: Scalars['String'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};

export type MutationRemoveGenreFromAnimeArgs = {
  animeId: Scalars['Float'];
  genreIds: Array<Scalars['Float']>;
};

export type MutationUpdateAnimeArgs = {
  animeId: Scalars['Float'];
  updateData: UpdateAnimeInput;
};

export type MutationUpdateCharacterArgs = {
  characterData: UpdateCharacterInput;
  characterId: Scalars['Float'];
};

export type MutationUpdateReviewArgs = {
  id: Scalars['Float'];
  input: UpdateReviewInput;
};

export type Query = {
  __typename?: 'Query';
  Anime: Anime;
  Animes: Array<Anime>;
  Character: Character;
  Characters: Array<Character>;
  login: LoginResult;
  Review: Review;
  Reviews: Array<Review>;
  searchAnime: Array<Anime>;
  Studio: Studio;
  Studios: Array<Studio>;
  User: User;
  Users: Array<User>;
};

export type QueryAnimeArgs = {
  id: Scalars['ID'];
};

export type QueryCharacterArgs = {
  id: Scalars['ID'];
};

export type QueryLoginArgs = {
  name: Scalars['String'];
  password: Scalars['String'];
};

export type QueryReviewArgs = {
  id: Scalars['ID'];
};

export type QuerySearchAnimeArgs = {
  searchInput: SearchAnimeInput;
};

export type QueryStudioArgs = {
  id: Scalars['ID'];
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Review = {
  __typename?: 'Review';
  animeId: Scalars['ID'];
  body: Scalars['String'];
  id: Scalars['ID'];
  summary: Scalars['String'];
};

export type SearchAnimeInput = {
  format?: Maybe<Scalars['String']>;
  genresIn?: Maybe<Array<Scalars['String']>>;
  limit: Scalars['Float'];
  skip: Scalars['Float'];
  status?: Maybe<Scalars['String']>;
  tagsIn?: Maybe<Array<Scalars['String']>>;
  text?: Maybe<Scalars['String']>;
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
};

export type UpdateAnimeInput = {
  bannerImage?: Maybe<Scalars['String']>;
  desciption?: Maybe<Scalars['String']>;
  englishTitle?: Maybe<Scalars['String']>;
  largeCoverImage?: Maybe<Scalars['String']>;
  nativeTitle?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Float']>;
  romajiTitle?: Maybe<Scalars['String']>;
  studioId?: Maybe<Scalars['Float']>;
  trailer?: Maybe<Scalars['String']>;
  xLargeCoverImage?: Maybe<Scalars['String']>;
};

export type UpdateCharacterInput = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateReviewInput = {
  body?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
  summary?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  reviews: Array<Review>;
};
