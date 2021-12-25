//비동기 테스트를 해보자
const fetchProduct = require('../async.js');

describe('Async', () => {
  //아래 코드는 toEqual의 값이 잘못되어도 테스트 성공으로 뜬다.
  //이유는 fetchProject함수가 비동기이기 때문에, fetchProject가 끝나길 기다리지 않고
  //expect를 거치지 않고 끝나버린다.
  /* it('async', () => {
    fetchProject().then((item) => {
      expect(item).toEqual({item: 'low', price: 200});
    });
  }); */

  //비동기를 테스트하는 방법 1.
  //it에서 done을 인자로 받아, then안쪽 로직의 마지막에 넣어주면 된다.
  //하지만 이 방버은 done이 async함수가 끝나길 기다린 뒤 실행되기 때문에 시간이 오래걸려
  //종종 time exceeded로 테스트에 실패한다.
  it('async - done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({item: 'Milk', price: 200});
      done();
    });
  });

  //방법 2. : 그냥 함수 자체를 return한다. 코드도 더 깔끔하고 시간도 훨씬 짧게 걸림
  it('async - return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({item: 'Milk', price: 200});
    });
  });

  //방법 3. : async - await 사용
  it('async - await', async () => {
    const project = await fetchProduct();
    expect(project).toEqual({item: 'Milk', price: 200});
  });

  //방법 4
  it('async - resolves', async () => {
    return expect(fetchProduct()).resolves.toEqual({item: 'Milk', price: 200});
  });

  it('async - rejects', async () => {
    return expect(fetchProduct('error')).rejects.toEqual('network error');
  });
});
