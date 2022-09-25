import type { NextPage } from 'next'
import styled from 'styled-components'

const Title = styled.h1``
const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
const Home: NextPage = () => {
  return (
    <Container>
      <Title>Hi, Welcome Back</Title>
    </Container>
  )
}

export default Home
