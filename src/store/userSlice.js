import { createSlice } from '@reduxjs/toolkit'

// store.js의 state를 분리 연습
let fruit = createSlice({
  name: '아무이름A',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    // changeState(state) {
    //   state.name = 'pakr'
    // },
    changeAge(state, action) {
      state.age += action.payload
      console.log(state.age)
    },
  },
})

export let { changeAge } = fruit.actions

export default fruit
