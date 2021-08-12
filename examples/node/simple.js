const { timedBench, trial } = require('@zimmed/bench/node');

function slowSplit(str = '', reg = /\s/g) {
  const result = [];
  let m;
  let i = 0;

  while ((m = reg.exec(str))) {
    result.push(str.slice(i, m.index));
    i = m.index + 1;
  }
  if (i < str.length) result.push(str.slice(i));
  return result;
}

timedBench(
  'Splitting a string',
  () => {
    const str = 'The quick brown fox jumps over the lazy dog.';
    let result;

    trial('String.prototype.split(string)', () => {
      result = str.split(' ');
    });

    trial('String.prototype.split(RegExp)', () => {
      result = str.split(/\s/g);
    });

    trial('Unnecessarily naive implementation', () => {
      result = slowSplit(str, /\s/g);
    });
  },
  3000
);
