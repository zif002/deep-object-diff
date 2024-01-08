import { isEmpty, isObject, hasOwnProperty, makeObjectWithoutPrototype } from './utils.js';

const addedDiff = (lhs, rhs) => {

  if (lhs === rhs || !isObject(lhs) || !isObject(rhs)) return {};


  return Object.keys(rhs).reduce((acc, key) => {
    if (hasOwnProperty(lhs, key)) {
      const difference = addedDiff(lhs[key], rhs[key]);

      if (isObject(difference) && isEmpty(difference)) return acc;

      acc[key] = difference;
      return acc;
    }

    acc[key] = rhs[key];
    return acc;
  }, makeObjectWithoutPrototype());
};

export const addedDiffWithKey = (lhs, rhs, identificator) => {

  if (lhs === rhs || !isObject(lhs) || !isObject(rhs)) return {};
  if (hasOwnProperty(lhs, identificator)) {
    if (lhs[identificator] !== rhs[identificator]) {
      return rhs;
    } else {
      return {};
    }
  }
  return Object.keys(rhs).reduce((acc, key) => {
    if (hasOwnProperty(lhs, key)) {
      const difference = addedDiffWithKey(lhs[key], rhs[key], identificator);

      if (isObject(difference) && isEmpty(difference)) return acc;
      acc[key] = difference;
      return acc;
    }

    acc[key] = rhs[key];
    return acc;
  }, makeObjectWithoutPrototype());

};

export default addedDiff;
