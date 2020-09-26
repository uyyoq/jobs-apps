import React from 'react'
import styled from "styled-components"

const ContNewslist = styled.div`
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin: 0 auto;
      width: 100%;
      padding: 20px;
      border-bottom: 1px solid rgb(66, 65, 65, 0.20);
`;

const ImgWrapper = styled.div`
  width: 170px;
  height: auto;

`;

const ImgContent = styled.img`
  width: 170px;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
`;

const TitleNewsList = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 20px;
    margin-bottom: 15px;
    width: 100%;
    font-size: 0.9em;
    font-family: Arial, Helvetica, sans-serif;
`;

const TitleText = styled.h3`
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.28;
    width: 100%;
    cursor: pointer;
    overflow: hidden;
`;

const DescText = styled.p`
    line-height: 1.28;
    overflow: hidden;
    font-size: 10px;
    margin-top: 6px;


`;

const Source = styled.p`
  font-size: 9px;
  color: #7E7979;
  font-style: italic;
  line-height: 1.28;
  overflow: hidden;
  margin-top: 5px;
`;

const Link = styled.a`
  color: #343333;
  text-decoration: none;
  text-align: left;
`;

const List = (props) => {
  return (
    <ContNewslist>
      <ImgWrapper>
        <ImgContent src={props.imgSrc} alt={props.title}></ImgContent>
      </ImgWrapper>
      <TitleNewsList>
        <Link href={props.href} target="_blank">
          <TitleText>{props.title}</TitleText>
          <DescText>{props.desc}</DescText>
          <Source>{props.source}</Source>
        </Link>
      </TitleNewsList>
    </ContNewslist>
  )
}


export default List;
