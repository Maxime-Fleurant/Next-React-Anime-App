// IMPORT
import React, { FunctionComponent, useEffect, Dispatch, SetStateAction } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Select, Input } from 'antd';
import { tags, genres, formats, status } from '../scrap/const';

// TYPE DEFINITION
export type TsearchAnimeForm = FunctionComponent<{
  submitAction: (formData: {}) => void;
}>;

// REACT
const SearchAnimeForm: TsearchAnimeForm = ({ submitAction }) => {
  const { Option } = Select;

  const { register, handleSubmit, errors, triggerValidation, formState, control } = useForm({
    mode: 'onBlur',
  });

  console.log(formState.isValid);

  const sub = (fData: {}) => {
    console.log('submit');
    console.log(fData);
  };

  const tagsSelect = (
    <Select
      mode="tags"
      style={{ width: '10%' }}
      placeholder="Select Genres"
      allowClear
      maxTagCount={1}
      maxTagTextLength={3}
    >
      {tags.map((tag) => {
        return (
          <Option value={tag.name} key={tag.name}>
            {tag.name}
          </Option>
        );
      })}
    </Select>
  );

  const genresSelect = (
    <Select
      mode="tags"
      style={{ width: '10%' }}
      placeholder="Select Tags"
      allowClear
      maxTagCount={1}
      maxTagTextLength={3}
    >
      {genres.map((genre) => {
        return (
          <Option value={genre} key={genre}>
            {genre}
          </Option>
        );
      })}
    </Select>
  );

  const formatsSelect = (
    <Select style={{ width: '15%' }} allowClear>
      {formats.map((format) => {
        return (
          <Option value={format} key={format}>
            {format}
          </Option>
        );
      })}
    </Select>
  );

  const statusSelect = (
    <Select style={{ width: '15%' }} allowClear>
      {status.map((statu) => {
        return (
          <Option value={statu} key={statu}>
            {statu}
          </Option>
        );
      })}
    </Select>
  );

  return (
    <div>
      <Controller as={tagsSelect} name="tag_in" control={control} />
      <Controller as={genresSelect} name="genre_in" control={control} />
      <Controller as={statusSelect} name="status" control={control} />
      <Controller as={formatsSelect} name="format" control={control} />
      <Controller as={<Input style={{ width: '15%' }} />} name="text" control={control} />

      <input type="button" onClick={handleSubmit(sub)} />
    </div>
  );
};

export default SearchAnimeForm;
