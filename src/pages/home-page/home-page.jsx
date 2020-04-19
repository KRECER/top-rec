import React from 'react';
import Grid from "@material-ui/core/Grid";
import styled from 'styled-components';

import top100img from './top100.jpg';
import AlbumList from "../../components/molecules/album-list/album-list";

const Image = styled.img`
  display:inline-block;
  vertical-align: middle;
  max-width: 100%;
`;

const Title = styled.h2`
  margin: 0;
  color: #70808F;
  font-weight: 700;
  font-size: 23px;
`;

const SubTitle = styled.div`
  margin-bottom: 50px;
  font-size: 23px;
  color: rgba(112, 128, 143, 0.8);
`;

const Section = styled.section`
  min-height: 694px;
  padding: 40px;
  border-radius: 14px;
  box-shadow: -16px -16px 40px rgba(255, 255, 255, 0.8), 4px 16px 64px rgba(18, 61, 101, 0.2), inset -8px -6px 80px rgba(255, 255, 255, 0.18);
`;

const WrapAlbumList = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    height: 125px;
    background: linear-gradient(180deg, rgba(225, 233, 236, 0) 0%, #E2EAED 100%);
    pointer-events: none;
  }
`;

const HomePage = () => {
  return <Section>
    <Grid container spacing={5}>
      <Grid item xs={12} md={4}>
        <Image src={top100img} alt="top 100 image" />
      </Grid>
      <Grid item xs={12} md={8}>
        <Title>Top 100</Title>
        <SubTitle>iTunes Albums</SubTitle>
        <WrapAlbumList>
          <AlbumList />
        </WrapAlbumList>
      </Grid>
    </Grid>
  </Section>
};

export default HomePage;
