import React from 'react'
import Link from 'next/link'
import styled from "styled-components";

const Container = styled.div`
 display: flex;
 top: 0;
 right: 0;
 left: 0;
 position: fixed;
 width: 100%;
 margin: 0 auto;
 background-color: white;
 border-bottom: 0.1px solid #F4ECEC;
`

const Menu = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 align-items:center;
 justify-content: center;   
`

const List = styled.p`
 font-size: 16px;
 font-weight: 530;
 color: #767070;;
 font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
 cursor: pointer;

 &:hover{
   font-weight: bold;
   color: #343333;
 }
`

function Navbar(props) {
  return (
    <Container>
      <Menu>
        <Link href="/indonesia">
          <List>INDONESIA</List>
        </Link>
      </Menu>
      <Menu>
        <Link href="/global">
          <List>GLOBAL</List>
        </Link>
      </Menu>
    </Container>
  )
}

export default Navbar;
