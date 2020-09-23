import React from 'react'
import styled from "styled-components";

const Container = styled.div`
 display: flex;
 top: 0;
 right: 0;
 left: 0;
 position: fixed;
 width: 100%;
 margin: 0 auto;
 margin-bottom: 20px;
 background-color: rgb(176, 162, 189);
`

const Menu = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 align-items:center;
 justify-content: center;
 margin: 0 auto;   
`

const List = styled.p`
 font-size: 18px;
 font-weight: bold;
 cursor: pointer;

 &:hover{
   font-weight: bold;
 }
`

function Navbar() {
  return (
    <Container>
      <Menu>
        <List>Beranda</List>
      </Menu>
      <Menu>
        <List>Cari Lowongan</List>
      </Menu>
    </Container>
  )
}

export default Navbar;
