function path(root, sublink) {
  return `${root}/${sublink}`;
}

// ----------------------------------------------------------------------

export const TEST_ROOT = '/test';
export const TEST_ONE = 'test-1';
export const TEST_TWO = 'test-2';
export const TEST_THREE = 'test-3';

export const PATH_TEST = {
  root: TEST_ROOT,
  pageOne: path(TEST_ROOT, TEST_ONE),
  pageTwo: path(TEST_ROOT, TEST_TWO),
  pageThree: path(TEST_ROOT, TEST_THREE),
};
