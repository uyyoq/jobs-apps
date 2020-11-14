import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar';
import shortid from "shortid"
import List from '../components/Newlist';
import { useQuery } from 'react-query';
import Loading from "../components/Loading/index"

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
padding-top: 50px;
width: 100%;
`
const Wrapper = styled.div`
  width: 55%;
  text-align: center;
  padding: 10px;
`;

const Header = styled.p`
color: #343333;
font-family: Arial, Helvetica, sans-serif;
font-size: 30px;
font-weight: 550;
`
const Link = styled.a`
  color: #343333;
  text-decoration: none;
`;

const fetchIndonesia = async () => {
  const res = await fetch("https://newsapi.org/v2/top-headlines?q=covid&country=id&apiKey=4055e2c89faa40e384b1dd16c0daef44");
  return res.json()
}

const indonesia = () => {
  const { data, status, error } = useQuery('indonesia', fetchIndonesia)
  console.log("INI DATANYA",data)
  
  if (status === 'loading') {
    return <Loading></Loading>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  return (
    <Container>
      <Navbar />
      <Header>Covid News - Indonesia</Header>
      {
        data.articles.map(data => (
          <Wrapper>
            <Link href={data.url} target="_blank">
              <List
                key={shortid.generate()}
                imgSrc={data.urlToImage}
                title={data.title}
                desc={data.description}
                href={data.url}
                source={data.source.name}
              />
            </Link>
          </Wrapper>
        ))
      }
    </Container>
  )
}

// export const getServerSideProps = async () => {
//   try {
//     const res = await fetch("https://newsapi.org/v2/top-headlines?q=covid&country=id&apiKey=4055e2c89faa40e384b1dd16c0daef44")
//     const data = await res.json()
//     return {
//       props:
//         { data }
//     }
//   } catch (error) {
//     return {
//       props: {}
//     }
//   }
// }

// export async function getStaticProps() {
//   const res = await fetch('https://newsapi.org/v2/top-headlines?q=covid&country=id&apiKey=4055e2c89faa40e384b1dd16c0daef44')
//   const data = await res.json()
//   return {
//     props: {
//       data,
//     },
//   }
// }

export default indonesia;

