import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import styled from "styled-components";
import Navbar from '../components/Navbar';
import shortid from "shortid"
import List from '../components/Newlist';
import Loading from "../components/Loading/index"
import { ReactQueryDevtools } from 'react-query-devtools';


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

const fetchGlobal = async () => {
  const res = await fetch ('https://newsapi.org/v2/everything?q=covid&apiKey=4055e2c89faa40e384b1dd16c0daef44');
  return res.json()
  // console.log('datanya', res)
}

const global = () => {
  const {data,status,error} = useQuery('globals',fetchGlobal,
  {
    staleTime: 1000,
    cacheTime: 10,
    onSuccess: () => console.log('data fetched with no problems'),}
  )
  console.log(data);

  if (status === 'loading') {
    return <Loading></Loading>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  return (
    <>
    <Container>
      <Navbar />
      <Header>Covid News - Global</Header>
      {
        data.articles.map(global => (
          <Wrapper>
            <Link href={global.url} target="_blank">
              <List
                key={shortid.generate()}
                imgSrc={global.urlToImage}
                title={global.title}
                desc={global.description}
                href={global.url}
                source={global.source.name}
              />
            </Link>
          </Wrapper>
        ))
      }
    </Container>
    <ReactQueryDevtools initialIsOpen /> 
    </>
  )
}


export default global;