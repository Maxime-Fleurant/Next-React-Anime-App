// IMPORT
import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { Select, Input, Form } from 'antd';
import { FormProps } from 'antd/lib/form/Form';
import { tags, genres, formats, status } from '../scrap/const';

// TYPE DEFINITION
export type TsearchAnimeForm = FunctionComponent<{
  submitAction: (formData: Record<string, any>) => void;
}>;

type IselectOptionsHelper = (items: string[]) => JSX.Element[];

// REACT
const SearchAnimeForm: TsearchAnimeForm = ({ submitAction }) => {
  const { Option } = Select;
  const { Item } = Form;
  const [form] = Form.useForm();

  const change: FormProps['onValuesChange'] = (changedValue, allVallues) => {
    submitAction(_.mapValues(allVallues, (value) => (value.length ? value : undefined)));
  };

  const selectOptionsHelper: IselectOptionsHelper = (items) => {
    return items.map((item) => {
      return (
        <Option value={item} key={item}>
          {item}
        </Option>
      );
    });
  };

  return (
    <Form form={form} name="animeSearchForm" onValuesChange={change} layout="inline">
      <Item name="text" style={{ width: '18%' }}>
        <Input placeholder="Search" />
      </Item>
      <Item name="genre_in" style={{ width: '18%' }}>
        <Select
          mode="multiple"
          placeholder="Genres"
          allowClear
          maxTagCount={1}
          maxTagTextLength={3}
          showArrow
        >
          {selectOptionsHelper(genres)}
        </Select>
      </Item>
      <Item name="tag_in" style={{ width: '18%' }}>
        <Select
          mode="multiple"
          placeholder="Tags"
          allowClear
          maxTagCount={1}
          maxTagTextLength={3}
          showArrow
        >
          {tags.map((tag) => {
            return (
              <Option value={tag.name} key={tag.name}>
                {tag.name}
              </Option>
            );
          })}
        </Select>
      </Item>
      <Item name="format" style={{ width: '18%' }}>
        <Select allowClear>{selectOptionsHelper(formats)}</Select>
      </Item>
      <Item name="status" style={{ width: '18%' }}>
        <Select allowClear>{selectOptionsHelper(status)}</Select>
      </Item>
    </Form>
  );
};

export default SearchAnimeForm;
