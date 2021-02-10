export const isNull = value => (value === null);

export const isUndefined = value => (value === undefined);

export const isEmpty = value => (isNull(value) || isUndefined(value) || value.length < 1);

export const noop = () => {};

export const isObject = value => (typeof value === 'object');
