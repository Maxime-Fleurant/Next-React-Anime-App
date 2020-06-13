// IMPORT

import React, { FunctionComponent, useEffect } from 'react';
import { Select, Input, Form } from 'antd';
import { FormProps } from 'antd/lib/form/Form';
import _ from 'lodash';

import { tags, genres, formats, status } from '../../../common/scrap/const';

// TYPE DEFINITION
type TsearchAnimeForm = FunctionComponent<{
  changeHandler: (values: any) => void;
  initialForm?: any;
}>;

// REACT
const GlobalForm: TsearchAnimeForm = ({ changeHandler, initialForm }) => {
  const { Option } = Select;
  const { Item } = Form;
  const [form] = Form.useForm();

  let timeOut: any;

  const change: FormProps['onValuesChange'] = (changedValue, allVallues) => {
    if (changedValue.text) {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        changeHandler(allVallues);
      }, 1000);
    } else {
      changeHandler(allVallues);
    }
  };

  const selectOptionsHelper = (items: string[]) => {
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
      <Item name="text" style={{ width: '18%' }} initialValue={initialForm.text}>
        <Input.Search placeholder="Search" />
      </Item>
      <Item name="genre_in" style={{ width: '18%' }} initialValue={initialForm.genre_in}>
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
      <Item name="tag_in" style={{ width: '18%' }} initialValue={initialForm.tag_in}>
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
      <Item name="format" style={{ width: '18%' }} initialValue={initialForm.format}>
        <Select placeholder="Format" allowClear>
          {selectOptionsHelper(formats)}
        </Select>
      </Item>
      <Item name="status" style={{ width: '18%' }} initialValue={initialForm.status}>
        <Select placeholder="Status" allowClear>
          {selectOptionsHelper(status)}
        </Select>
      </Item>
    </Form>
  );
};

export default GlobalForm;
