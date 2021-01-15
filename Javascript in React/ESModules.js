export default function add(a, b) {
  return a + b;
}

export const foo = 'bar';

export function subtract(a, b) {
  return a - b;
}
export const now = new Date();

// dynamic imports
import('./some-module').then(
  allModuleExports => {

  },
  error => {
  },
);

// in React:
import React, {Suspense, Fragment} from 'react';

// dynamic import of a React component
const BigComponent = React.lazy(() => import('./big-component'));
