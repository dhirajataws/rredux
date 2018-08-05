import fetchAddress from './fetchAddress';
import assert from 'assert';

describe('test ', () => {
  let localStorageMock
  beforeEach(() => {
    localStorageMock = (function () {
      let store = {addressList: JSON.stringify([{firstName: 'test', lastName: 'test', phoneNo: 'test', seqNo: '1'}])}
      return {
        getItem: function (key) {
          return store[key] || null
        },
        setItem: function (key, value) {
          store[key] = value.toString()
        },
        clear: () => (store = {})
      }
    })()

    Object.defineProperty(global, 'localStorage', {
      value: localStorageMock,
    })
  })

  it('fetchAddress return empty array when local storage fetch fails', () => {
    fetchAddress().then((item) => {
      assert(item) === null
    })
  })
  it('fetchAddress from local storage with valid array list', () => {
    localStorageMock.clear();
    fetchAddress().then((item) => {
      assert(item) === [{firstName: 'test', lastName: 'test', phoneNo: 'test', seqNo: '1'}]
    })
  })
})


