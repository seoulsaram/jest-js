//아주 좋지 않은 경우의 예제 : mock함수의 남용

const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');

//네트워크 상태에 의존하는 테스트코드는 좋지 않다!!
//ProductService 클래스가 내부적으로 ProjectClient를 사용하고 있기 때문에, 단일 단위테스트를 할 수 없고,
//ProjectClient는 서버로부터 데이터를 받아오는데, 이 때 네트워크 상태가 좋지 않거나, ProjectClient에 문제가 있으면 ProjectService의 테스트도
//실패하게 되는 문제가 생김.
//때문에, product_client.js는 jest에서 제공하는 mock을 쓸거야 라고 아래와 같이 선언해준다.
jest.mock('../product_client.js');

describe('ProductService', () => {
  //fetchItems도 jest의 mock함수를 이용하여 정의한다. 아래의 함수는
  //비동기로 배열오브젝트를 리턴하는 함수.
  const fetchItems = jest.fn(async () => [
    {item: 'Milk', available: true},
    {item: '🍎', available: false},
  ]);

  //ProductClient클래스에 fetchItems를 연결해주는 부분. mockImplementation을 사용하여
  //위에 직접 작성한 fetchItems를 오브젝트로 리턴한다.
  ProductClient.mockImplementation(() => {
    return {
      fetchItems: fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
    //주의 사항 : jest.config.js에서 clearMocks: true를 clearMocks: false로 설정해둔다면
    //mock함수를 사용하고 mock함수가 초기화되지 않기 때문에 mock함수에 대해 한 가지 이상의 단위테스트를 하게 된다면
    //beforeEach에서 아래와 같이 수동으로 clear를 해줘야 함.
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{item: 'Milk', available: true}]);
  });
});
