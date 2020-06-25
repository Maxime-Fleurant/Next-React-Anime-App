// IMPORT

import React, { FunctionComponent } from 'react';
import { Select, Input, Form } from 'antd';
import { FormProps } from 'antd/lib/form/Form';
import _ from 'lodash';
import { css, Global } from '@emotion/core';

import { tags, genres, formats, status } from '../../../../common/const';
import { Cell } from '../../../../common/components/cell';
import { gridCss, subGrid } from '../../../layout/style';
import {
  fontRegular,
  pointSize24,
  baseHelveticaRegular,
  backgroundColor400,
  baseColor400,
  baseColor200,
  pointSize1,
  pointSize4,
  font40,
  titleLineHeight,
  helveticaMedium,
  font20,
  helveticaRegular,
} from '../../../../common/globalStyle';
import { inputText, selectStyle } from './style';

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
    <>
      <Cell
        deskPos={{ rowStart: 4, rowEnd: 6, columnStart: 1, columnEnd: 25 }}
        tabPos={{ rowStart: 4, rowEnd: 6, columnStart: 1, columnEnd: 25 }}
      >
        <Form form={form} name="animeSearchForm" onValuesChange={change} css={subGrid}>
          <Cell
            deskPos={{ rowStart: 1, rowEnd: 2, columnStart: 1, columnEnd: 5 }}
            tabPos={{ rowStart: 1, rowEnd: 2, columnStart: 1, columnEnd: 25 }}
            extraCss={[font40, titleLineHeight, helveticaMedium]}
          >
            Title&nbsp;
            <span css={css([font20, titleLineHeight, helveticaRegular])}>題名</span>
          </Cell>

          <Cell
            deskPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 5 }}
            tabPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
          >
            <input type="text" placeholder="Search Title" css={inputText} />
          </Cell>

          <Cell
            deskPos={{ rowStart: 1, rowEnd: 2, columnStart: 6, columnEnd: 10 }}
            tabPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
            extraCss={[font40, titleLineHeight, helveticaMedium]}
          >
            Genre&nbsp;
            <span css={css([font20, titleLineHeight, helveticaRegular])}>カテゴリ</span>
          </Cell>

          <Cell
            deskPos={{ rowStart: 2, rowEnd: 3, columnStart: 6, columnEnd: 10 }}
            tabPos={{ rowStart: 4, rowEnd: 5, columnStart: 1, columnEnd: 25 }}
          >
            <select name="" id="" css={selectStyle}>
              <option value="">Select Genre</option>
              <option value="">fldk</option>
              <option value="">fldk</option>
            </select>
          </Cell>

          <Cell
            deskPos={{ rowStart: 1, rowEnd: 2, columnStart: 11, columnEnd: 15 }}
            tabPos={{ rowStart: 5, rowEnd: 6, columnStart: 1, columnEnd: 25 }}
            extraCss={[font40, titleLineHeight, helveticaMedium]}
          >
            Tag&nbsp;
            <span css={css([font20, titleLineHeight, helveticaRegular])}>付箋</span>
          </Cell>

          <Cell
            deskPos={{ rowStart: 2, rowEnd: 3, columnStart: 11, columnEnd: 15 }}
            tabPos={{ rowStart: 6, rowEnd: 7, columnStart: 1, columnEnd: 25 }}
          >
            <select name="" id="" css={selectStyle}>
              <option value="">Select Tag</option>
              <option value="">fldk</option>
              <option value="">fldk</option>
            </select>
          </Cell>

          <Cell
            deskPos={{ rowStart: 1, rowEnd: 2, columnStart: 16, columnEnd: 20 }}
            tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
            extraCss={[font40, titleLineHeight, helveticaMedium]}
          >
            Format&nbsp;
            <span css={css([font20, titleLineHeight, helveticaRegular])}>体裁</span>
          </Cell>

          <Cell
            deskPos={{ rowStart: 2, rowEnd: 3, columnStart: 16, columnEnd: 20 }}
            tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
          >
            <select name="" id="" css={selectStyle}>
              <option value="">Select Format</option>
              <option value="">fldk</option>
              <option value="">fldk</option>
            </select>
          </Cell>

          <Cell
            deskPos={{ rowStart: 1, rowEnd: 2, columnStart: 21, columnEnd: 25 }}
            tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 1, columnEnd: 25 }}
            extraCss={[font40, titleLineHeight, helveticaMedium]}
          >
            Status&nbsp;
            <span css={css([font20, titleLineHeight, helveticaRegular])}>分</span>
          </Cell>

          <Cell
            deskPos={{ rowStart: 2, rowEnd: 3, columnStart: 21, columnEnd: 25 }}
            tabPos={{ rowStart: 10, rowEnd: 11, columnStart: 1, columnEnd: 25 }}
          >
            <select name="" id="" css={selectStyle} placeholder="any">
              <option value="">Select Status</option>
              <option value="">fldk</option>
              <option value="">fldk</option>
            </select>
          </Cell>
        </Form>
      </Cell>
    </>
  );
};

export default GlobalForm;

// <Form form={form} name="animeSearchForm" onValuesChange={change} layout="inline">
//       <Item name="text" style={{ width: '18%' }} initialValue={initialForm.text}>
//         <Input.Search placeholder="Search" />
//       </Item>
//       <Item name="genre_in" style={{ width: '18%' }} initialValue={initialForm.genre_in}>
//         <Select
//           mode="multiple"
//           placeholder="Genres"
//           allowClear
//           maxTagCount={1}
//           maxTagTextLength={3}
//           showArrow
//         >
//           {selectOptionsHelper(genres)}
//         </Select>
//       </Item>
//       <Item name="tag_in" style={{ width: '18%' }} initialValue={initialForm.tag_in}>
//         <Select
//           mode="multiple"
//           placeholder="Tags"
//           allowClear
//           maxTagCount={1}
//           maxTagTextLength={3}
//           showArrow
//         >
//           {tags.map((tag) => {
//             return (
//               <Option value={tag.name} key={tag.name}>
//                 {tag.name}
//               </Option>
//             );
//           })}
//         </Select>
//       </Item>
//       <Item name="format" style={{ width: '18%' }} initialValue={initialForm.format}>
//         <Select placeholder="Format" allowClear>
//           {selectOptionsHelper(formats)}
//         </Select>
//       </Item>
//       <Item name="status" style={{ width: '18%' }} initialValue={initialForm.status}>
//         <Select placeholder="Status" allowClear>
//           {selectOptionsHelper(status)}
//         </Select>
//       </Item>
//     </Form>
