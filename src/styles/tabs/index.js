// styled
import styled from 'styled-components'

const Title = styled.div`
  padding: 13px 20px
  min-width: 40px
  cursor: pointer
  text-align: center
  margin-right: 0px
  transition: all 0.5s
  padding-top: 20px
  padding-bottom: 20px
  color: ${({ color }) => color}
  &:hover {
    background-color: ${({ primary }) => (primary ? '#aaa' : '#aaa')}
    color: ${({ color }) => color}
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 15px;
  box-shadow: 0px 1px 3px 0px #999
  z-index: -1;
  text-align: center;
  margin-top: 10px;
  background-color: ${({ background }) => background /*? '#ccc' : '#eaeaea'*/}
  color: ${({ color }) => color}
`

const TabNav = styled.div`
  display: flex
  flex-direction: row
  justify-content: flex-start;
  box-shadow: 0px 1px 3px 0px #999
  background-color: ${({ background }) => background /*? '#eaeaea' : '#eaeaea'*/};
  z-index: 1;
`

const Wrapper = styled.div`
  position: relative;
  min-width: 320px;
  max-width: 60%;
  margin: 0 auto
  padding: 25px 0px
`

export { Wrapper, TabNav, Content, Title }
