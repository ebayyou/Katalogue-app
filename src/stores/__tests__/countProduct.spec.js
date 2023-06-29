import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import useCountProductStore from '../countProduct';

describe('Count Product store test', () => {
  let store = null;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useCountProductStore();
  });

  it('initialized with value one', () => {
    expect(store.countProduct).toEqual(1);
  });

  it('test nextProductCount should increment countProduct state', () => {
    store.nextProductCount();

    expect(store.countProduct).toEqual(2);
  });

  it('test previousProductCount should increment countProduct state', () => {
    store.previousProductCount();

    expect(store.countProduct).toEqual(20);
  });

  it('the updateCountByParamsId test should replace the value of countProduct with the given parameters', () => {
    store.updateCountByParamsId(10);

    expect(store.countProduct).toEqual(10);
  });

  it('test clearCountProduct should return countProduct state with an initialized value', () => {
    store.nextProductCount();
    store.nextProductCount();
    expect(store.countProduct).toEqual(3);

    store.clearCountProduct();
    expect(store.countProduct).toEqual(1);
  });
});
