import { Row, Col, Container } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'
import Spinner from '../img/spinner.gif'

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LoadingText = styled.div`
  font: 1rem 'Noto Sans KR';
  text-align: center;
`

function Products(props) {
  let [getNum, setGetNum] = useState(1)
  let [loading, setLoading] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          let sortedInfos = [...props.bears]
          sortedInfos.sort(function (a, b) {
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
            else if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
            else return 0
          })
          props.setBears(sortedInfos)
        }}>
        가나다순 정렬
      </button>

      <Container>
        <Row>
          {props.bears.map((a, i) => (
            <Col
              sm
              key={i}>
              <div
                onClick={() => {
                  props.navigate(`/detail/${props.bears[i].id}`)
                }}>
                <img
                  // src={process.env.PUBLIC_URL + `/img/bear${props.bears[i].id}.jpg`}
                  src={`https://codingapple1.github.io/shop/shoes${props.bears[i].id + 1}.jpg`}
                  width="70%"
                  alt=""
                />
                <h4>{props.bears[i].title}</h4>
                <p>{props.bears[i].price}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      {loading === true ? (
        <LoadingUI />
      ) : (
        <button
          onClick={() => {
            setLoading(true)
            setGetNum((getNum += 1))

            axios
              .get(`https://codingapple1.github.io/shop/data${getNum}.json`)
              .then(info => {
                let moreBears = [...props.bears, ...info.data]
                props.setBears(moreBears)
                setLoading(false)
              })
              .catch(() => {
                console.log('실패')
                setLoading(false)
              })
          }}>
          더보기
        </button>
      )}
    </>
  )
}

function LoadingUI() {
  return (
    <Background>
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
      <img
        src={Spinner}
        alt="로딩중"
        width="5%"
      />
    </Background>
  )
}

export default Products
