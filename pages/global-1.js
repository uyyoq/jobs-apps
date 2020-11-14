import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components";
import List from '../components/Newlist';
import shortid from "shortid"
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroller';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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

const global1 = () => {
  // const [data, setData] = useState([])
  const [dataFake, setDataFake] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  // const fetchData = async () => {
  //   const res = await axios(
  //     'https://newsapi.org/v2/top-headlines?q=health&apiKey=4055e2c89faa40e384b1dd16c0daef44&page=1&pageSize=20',
  //   );
  //   setData(res.data.articles);
  // };

  // const fetchConcat = async () => {
  //   const res = await axios(
  //     'https://newsapi.org/v2/top-headlines?q=health&apiKey=4055e2c89faa40e384b1dd16c0daef44&page=2&pageSize=20',
  //   );
  //   // setData({
  //   //   data: data.concat(res.data.articles)
  //   // });
  //   console.log("data", res)
  // };




  useEffect(() => {
    fetchData();

  }, [])

  const fetchMoreData = () => {

    setTimeout(() => {
      setDataFake(dataFake.concat([1,24,2,4,5,8,1,4,5,6,7,8,6,4,3,2]))
    }, 1500);
    // axios.get("https://newsapi.org/v2/top-headlines?q=health&apiKey=4055e2c89faa40e384b1dd16c0daef44&page=2&pageSize=20")
    // .then((res)=> {
    //   console.log("indra", res)
    // })
  };

  return (
    <Container>
      <Navbar />
      <Header>Covid News - Global</Header>

      <InfiniteScroll
        dataLength={dataFake.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {
          dataFake.map((i, index) => (
            <div key={index}>
              div - #{i}
            </div>
          ))
        }
      </InfiniteScroll>
    </Container>
  )
}


// export async function getStaticProps() {
//   const res = await fetch('https://newsapi.org/v2/everything?q=covid&apiKey=4055e2c89faa40e384b1dd16c0daef44')
//   const data = await res.json()
//   return {
//     props: {
//       data,
//     },
//   }
// }

export default global1
