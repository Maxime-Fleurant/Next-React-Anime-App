// IMPORT
import React, { FunctionComponent, useState, useEffect } from 'react';
import { Form } from 'antd';

import { css } from '@emotion/core';

import {
  tags as constTags,
  genres as constGenre,
  formats,
  status as statusConst,
} from '../../../../common/const';
import { Cell } from '../../../../common/components/cell';
import { subGrid } from '../../../layout/style';
import { titleLineHeight, font20, helveticaRegular } from '../../../../common/globalStyle';
import { inputText, selectStyle, inputLabel } from './style';

// TYPE DEFINITION
type TsearchAnimeForm = FunctionComponent<{
  changeHandler: (values: any) => void;
  initialForm?: any;
}>;

interface IFormState {
  text?: string;
  genresIn?: string[];
  tagsIn?: string[];
  format?: string;
  status?: string;
}

// REACT
const GlobalForm: TsearchAnimeForm = ({ changeHandler, initialForm }) => {
  let timeOut: any;

  const [formState, updateFormState] = useState<IFormState>({});

  useEffect(() => {
    changeHandler(formState);
  }, [formState]);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    clearTimeout(timeOut);
    e.persist();
    timeOut = setTimeout(() => {
      const targetVal = e.target.value;
      if (!targetVal) {
        const { text, ...newFormState } = formState;

        updateFormState(newFormState);
        return;
      }

      updateFormState({ ...formState, text: targetVal });
    }, 1000);
  };

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    switch (e.target.name) {
      case 'genre': {
        const targetVal = e.target.options[e.target.selectedIndex].value;

        if (!targetVal) {
          const { genresIn, ...newFormState } = formState;

          updateFormState(newFormState);
          return;
        }

        updateFormState({
          ...formState,
          genresIn: [e.target.options[e.target.selectedIndex].value],
        });
        return;
      }

      case 'tag': {
        const targetVal = e.target.options[e.target.selectedIndex].value;

        if (!targetVal) {
          const { tagsIn, ...newFormState } = formState;

          updateFormState(newFormState);
          return;
        }

        updateFormState({ ...formState, tagsIn: [e.target.options[e.target.selectedIndex].value] });
        return;
      }

      case 'format': {
        const targetVal = e.target.options[e.target.selectedIndex].value;

        if (!targetVal) {
          const { format, ...newFormState } = formState;

          updateFormState(newFormState);
          return;
        }

        updateFormState({ ...formState, format: e.target.options[e.target.selectedIndex].value });
        return;
      }

      case 'status': {
        const targetVal = e.target.options[e.target.selectedIndex].value;

        if (!targetVal) {
          const { status, ...newFormState } = formState;

          updateFormState(newFormState);
          return;
        }

        updateFormState({ ...formState, status: e.target.options[e.target.selectedIndex].value });
        break;
      }

      default:
        break;
    }
  };

  const selectOptionsHelper = (items: string[]) => {
    return items.map((item) => {
      return (
        <option value={item} key={item}>
          {item}
        </option>
      );
    });
  };

  return (
    <>
      <Cell
        deskPos={{ rowStart: 4, rowEnd: 6, columnStart: 1, columnEnd: 25 }}
        tabPos={{ rowStart: 4, rowEnd: 6, columnStart: 1, columnEnd: 25 }}
      >
        <Form name="animeSearchForm" css={subGrid}>
          <Cell
            deskPos={{ rowStart: 1, rowEnd: 2, columnStart: 1, columnEnd: 5 }}
            tabPos={{ rowStart: 1, rowEnd: 2, columnStart: 1, columnEnd: 25 }}
            extraCss={[inputLabel]}
          >
            Title&nbsp;
            <span css={css([font20, titleLineHeight, helveticaRegular])}>題名</span>
          </Cell>

          <Cell
            deskPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 5 }}
            tabPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
          >
            <input
              name="title"
              onChange={inputHandler}
              type="text"
              placeholder="Search Title"
              css={inputText}
            />
          </Cell>

          <Cell
            deskPos={{ rowStart: 1, rowEnd: 2, columnStart: 6, columnEnd: 10 }}
            tabPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
            extraCss={[inputLabel]}
          >
            Genre&nbsp;
            <span css={css([font20, titleLineHeight, helveticaRegular])}>カテゴリ</span>
          </Cell>

          <Cell
            deskPos={{ rowStart: 2, rowEnd: 3, columnStart: 6, columnEnd: 10 }}
            tabPos={{ rowStart: 4, rowEnd: 5, columnStart: 1, columnEnd: 25 }}
          >
            <select onChange={selectHandler} name="genre" css={selectStyle}>
              <option value="">Select Genre</option>
              {selectOptionsHelper(constGenre)}
            </select>
          </Cell>

          <Cell
            deskPos={{ rowStart: 1, rowEnd: 2, columnStart: 11, columnEnd: 15 }}
            tabPos={{ rowStart: 5, rowEnd: 6, columnStart: 1, columnEnd: 25 }}
            extraCss={[inputLabel]}
          >
            Tag&nbsp;
            <span css={css([font20, titleLineHeight, helveticaRegular])}>付箋</span>
          </Cell>

          <Cell
            deskPos={{ rowStart: 2, rowEnd: 3, columnStart: 11, columnEnd: 15 }}
            tabPos={{ rowStart: 6, rowEnd: 7, columnStart: 1, columnEnd: 25 }}
          >
            <select onChange={selectHandler} name="tag" css={selectStyle}>
              <option value="">Select Tag</option>
              {selectOptionsHelper(
                constTags.map((tag) => {
                  return tag.name;
                })
              )}
            </select>
          </Cell>

          <Cell
            deskPos={{ rowStart: 1, rowEnd: 2, columnStart: 16, columnEnd: 20 }}
            tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
            extraCss={[inputLabel]}
          >
            Format&nbsp;
            <span css={css([font20, titleLineHeight, helveticaRegular])}>体裁</span>
          </Cell>

          <Cell
            deskPos={{ rowStart: 2, rowEnd: 3, columnStart: 16, columnEnd: 20 }}
            tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
          >
            <select onChange={selectHandler} name="format" css={selectStyle}>
              <option value="">Select Format</option>
              {selectOptionsHelper(formats)}
            </select>
          </Cell>

          <Cell
            deskPos={{ rowStart: 1, rowEnd: 2, columnStart: 21, columnEnd: 25 }}
            tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 1, columnEnd: 25 }}
            extraCss={[inputLabel]}
          >
            Status&nbsp;
            <span css={css([font20, titleLineHeight, helveticaRegular])}>分</span>
          </Cell>

          <Cell
            deskPos={{ rowStart: 2, rowEnd: 3, columnStart: 21, columnEnd: 25 }}
            tabPos={{ rowStart: 10, rowEnd: 11, columnStart: 1, columnEnd: 25 }}
          >
            <select onChange={selectHandler} name="status" css={selectStyle} placeholder="any">
              <option value="">Select Status</option>
              {selectOptionsHelper(statusConst)}
            </select>
          </Cell>
        </Form>
      </Cell>
    </>
  );
};
export default GlobalForm;
