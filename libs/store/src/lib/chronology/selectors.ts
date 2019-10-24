/** @format */

import { createSelector } from 'reselect';

import { ChronologyState, GroupedMovements } from './types';
import {
  ChronologyMovement,
  OperationTypes,
  Category,
  ChronologyCategory,
  CategoriesObj,
} from '../types';
import { MainState } from '../rootReducer';

export const selectorChronology = (state: MainState): ChronologyState => {
  return state.chronologyReducer.chronology;
};

// #region SELECTOR CHRONOLOGY MOVEMENTS
/**
 * Returns array of movements by category
 * @param {Category[]} categories
 * @returns {GroupedMovements[]}
 */
export const selectorChronologyMovementsByCategory = createSelector(
  selectorChronology,
  (state: MainState, props: { categories?: Category[] }) =>
    props && props.categories,
  (chronology: ChronologyState, categories): GroupedMovements[] => {
    if (
      chronology &&
      chronology.data &&
      chronology.data.movements &&
      categories
    ) {
      const { movements } = chronology.data;

      const categoriesObj: CategoriesObj = categories.reduce(
        (accumulator: CategoriesObj, category): CategoriesObj => {
          accumulator[category.alias] = category;

          return accumulator;
        },
        {},
      );

      const groupedMovements: GroupedMovements[] = [];

      movements.forEach((movement): null => {
        if (categoriesObj[movement.category]) {
          const index = groupedMovements.findIndex(
            (item): boolean =>
              item.category === categoriesObj[movement.category].shortName,
          );

          if (index !== -1) {
            const updateMovements: ChronologyMovement[] = [
              ...groupedMovements[index].movements,
              ...[movement],
            ];
            groupedMovements[index] = {
              category: categoriesObj[movement.category].shortName,
              movements: updateMovements,
            };
            return;
          }
          groupedMovements.push({
            category: categoriesObj[movement.category].shortName,
            movements: [movement],
          });
        }
      });
      return groupedMovements;
    }
    return [];
  },
);
// #endregion

// #region SELECTOR CHRONOLOGY MOVEMENTS
/**
 * Returns one object with categoryName null and array of all movements
 * @returns {GroupedMovements[]} {null, movements[]}[]
 */
export const selectorChronologyMovements = createSelector(
  selectorChronology,
  (chronology: ChronologyState): GroupedMovements[] => {
    if (chronology && chronology.data) {
      return [{ category: null, movements: chronology.data.movements }];
    }
    return [];
  },
);
// #endregion

// #region SELECTOR CHRONOLOGY CATEGORY
/**
 * Returns {array}
 * @returns {ChronologyCategory[]}
 */
export const selectorChronologyCategories = createSelector(
  selectorChronology,
  (chronology: ChronologyState): ChronologyCategory[] => {
    if (chronology && chronology.data) {
      return chronology.data.categories;
    }
    return [];
  },
);
// #endregion

// #region SELECTOR CHRONOLOGY OPERATION TYPE
/**
 * Returns {array}
 * @returns {OperationTypes[]} []
 */
export const selectorChronologyOperationTypes = createSelector(
  selectorChronology,
  (chronology: ChronologyState): OperationTypes[] => {
    if (chronology && chronology.data) {
      return chronology.data.operationTypes;
    }
    return [];
  },
);
// #endregion

// #region SELECTOR CHRONOLOGY LOADER
/**
 * Returns {boolean}
 * @returns {boolean}
 */
export const selectorChronologyLoader = createSelector(
  selectorChronology,
  (chronology: ChronologyState): boolean => chronology.isLoading,
);
// #endregion

// #region SELECTOR CHRONOLOGY LOADER
/**
 * Returns {boolean}
 * @returns {boolean}
 */
export const selectorChronologyLoaded = createSelector(
  selectorChronology,
  (chronology: ChronologyState): boolean => chronology.isLoaded,
);
// #endregion
