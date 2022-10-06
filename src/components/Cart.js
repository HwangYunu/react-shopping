import { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeCount, deleteProduct, changeSequence } from '../store'
// import { changeAge } from '../store/userSlice'

function Cart() {
  let state = useSelector(state => state.cartInfo)
  // store - userSlice 다른컴포넌트 분리 연습
  // let state2 = useSelector(state => state.fruit)
  let dispatch = useDispatch()

  useEffect(() => {})
  return (
    <div>
      <button
        onClick={() => {
          let sortedInfos = [...state]
          sortedInfos.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
            else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
            else return 0
          })
          dispatch(changeSequence(sortedInfos))
        }}>
        가나다순 정렬
      </button>
      {/* {state2.name} 입니다. age는 {state2.age}
      <button onClick={() => dispatch(changeAge(1))}>버튼</button> */}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>수량추가</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.map((a, i) => (
            <tr key={i}>
              <td>{state[i].id}</td>
              <td>{state[i].name}</td>
              <td>{state[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    let thidProductId = state[i].id
                    dispatch(changeCount(thidProductId))
                    // dispatch(changeCount(i))
                  }}>
                  추가
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    let thidProductId = state[i].id
                    dispatch(deleteProduct(thidProductId))
                  }}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Cart
