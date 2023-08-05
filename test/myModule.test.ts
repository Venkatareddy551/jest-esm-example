// test/myModule.test.ts
import { add, multiply, result } from '../dist/myModule';

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});

describe('result', () => {
  it('should be some value', async () => {
    let results = await result();
    console.log(results)
    expect(results)
  });
});

