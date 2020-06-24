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
import { itemSelect, selectAnt, globalAnt } from './style';

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
      <Global styles={globalAnt} />
      <Cell
        deskPos={{ rowStart: 4, rowEnd: 6, columnStart: 1, columnEnd: 25 }}
        tabPos={{ rowStart: 4, rowEnd: 12, columnStart: 1, columnEnd: 11 }}
      >
        <Form form={form} name="animeSearchForm" onValuesChange={change} css={subGrid}>
          <Cell
            deskPos={{ rowStart: 1, rowEnd: 2, columnStart: 1, columnEnd: 7 }}
            tabPos={{ rowStart: 4, rowEnd: 12, columnStart: 1, columnEnd: 11 }}
            extraCss={[font40, titleLineHeight, helveticaMedium]}
          >
            Title&nbsp;
            <span css={css([font20, titleLineHeight, helveticaRegular])}>題名</span>
          </Cell>

          <Cell
            deskPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 7 }}
            tabPos={{ rowStart: 4, rowEnd: 12, columnStart: 1, columnEnd: 11 }}
          >
            <Item
              name="genre_in"
              initialValue={initialForm.genre_in}
              css={[itemSelect, css('ant-input{font-size: 1rem}')]}
            >
              <Input.Search placeholder="Search" css={css('ant-input{font-size: 1rem}')} />
            </Item>
          </Cell>

          <Cell
            deskPos={{ rowStart: 1, rowEnd: 2, columnStart: 7, columnEnd: 11 }}
            tabPos={{ rowStart: 4, rowEnd: 12, columnStart: 1, columnEnd: 11 }}
            extraCss={[font40, titleLineHeight, helveticaMedium]}
          >
            Title&nbsp;
            <span css={css([font20, titleLineHeight, helveticaRegular])}>題名</span>
          </Cell>

          <Cell
            deskPos={{ rowStart: 2, rowEnd: 3, columnStart: 7, columnEnd: 11 }}
            tabPos={{ rowStart: 4, rowEnd: 12, columnStart: 1, columnEnd: 11 }}
          >
            <Item name="genre_in" initialValue={initialForm.genre_in} css={[itemSelect]}>
              <Select
                mode="multiple"
                placeholder="Genres"
                allowClear
                maxTagCount={1}
                maxTagTextLength={3}
                showArrow
                css={selectAnt}
              >
                {selectOptionsHelper(genres)}
              </Select>
            </Item>
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
