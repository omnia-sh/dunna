import integer from './integer';

function choice<T>(choices: T[]) {
  return choices[integer({ max: choices.length })];
}

export default choice;
