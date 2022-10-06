import { configureStore, createSlice } from '@reduxjs/toolkit'
// import fruit from './store/userSlice'

let newData = [
  { id: 0, name: 'White and Black', count: 1 },
  { id: 1, name: 'Grey Yordan', count: 2 },
  { id: 2, name: 'Bear', count: 3 },
  { id: 3, name: 'Red', count: 4 },
  { id: 4, name: 'Fish', count: 5 },
]

let cartInfo = createSlice({
  name: '장바구니 정보',
  initialState: newData,
  reducers: {
    // 수량 증가 함수
    changeCount(state, action) {
      let thisIndex = state.findIndex(x => x.id === action.payload)
      state[thisIndex].count += 1
    },
    // 중복상품 존재 시 count 증가하는 함수
    existProduct(state, action) {
      let productExist = state.find(x => x.name === action.payload)
      let addCart = { id: state.length, name: action.payload, count: 1 }
      // 중복상품 존재 ? count를 증가 : 상품 추가
      productExist ? productExist.count++ : state.push(addCart)
    },
    // 상품 삭제
    deleteProduct(state, action) {
      let thisIndex = state.findIndex(x => x.id === action.payload)
      state.splice(thisIndex, 1)
    },
    // 정렬 함수
    changeSequence(state, action) {
      return (state = action.payload)
      // return action.payload
    },
  },
})

export let { changeCount, existProduct, deleteProduct, changeSequence } = cartInfo.actions

export default configureStore({
  reducer: {
    cartInfo: cartInfo.reducer,
    // fruit: fruit.reducer,
  },
})
