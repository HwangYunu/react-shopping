import { Nav } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { existProduct } from '../store'
import { useDispatch } from 'react-redux'

function Detail(props) {
  // 유저가 URL 파라미터에 입력한  값을 저장하는 함수
  let { id } = useParams()
  // 정렬 후 상세페이지 값 고정시키기 위함
  let thisProductId = props.bears.find(x => x.id === id * 1)
  // let state = useSelector(state => state.cartInfo)
  let dispatch = useDispatch()
  let [detailLoad, setDetailLoad] = useState('start')
  let [tabs, setTabs] = useState(0)

  useEffect(() => {
    setDetailLoad('end')
    return () => {
      setDetailLoad('')
    }
  }, [])

  return thisProductId ? (
    <div className={`container ${detailLoad}`}>
      {
        //alert === true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : <></>
      }

      <div className="row">
        <div className="col-md-6">
          <img
            // src={process.env.PUBLIC_URL + `/img/bear${thisProductId.id}.jpg`}
            src={`https://codingapple1.github.io/shop/shoes${thisProductId.id + 1}.jpg`}
            width="100%"
            alt=""
          />
        </div>

        <div className="col-md-6">
          <h4 className="pt-5">{thisProductId.title}</h4>
          <p>{thisProductId.content}</p>
          <p>{thisProductId.price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              let addThis = `${thisProductId.title}`
              dispatch(existProduct(addThis))
            }}>
            장바구니 담기
          </button>
        </div>
      </div>

      <Nav
        variant="tabs"
        defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTabs(0)
            }}>
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTabs(1)
            }}>
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTabs(2)
            }}>
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tabs={tabs} />
    </div>
  ) : (
    <div className="container">
      <div>존재하지 않는 상품입니다.</div>
    </div>
  )
}

function TabContent(props) {
  let [fade, setFade] = useState('')

  useEffect(() => {
    let a = setTimeout(() => {
      setFade('end')
    }, 100)

    return () => {
      clearTimeout(a)
      setFade('')
    }
  }, [props.tabs])

  return <div className={`start ${fade}`}>{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tabs]}</div>

  // if (props.tabs === 0) {
  //   return <div>내용0</div>
  // }
  // if (props.tabs === 1) {
  //   return <div>내용1</div>
  // }
  // if (props.tabs === 2) {
  //   return <div>내용2</div>
  // }
}

export default Detail
