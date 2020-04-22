import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';
import SimpleBar from "simplebar-react";

import Grid from "@material-ui/core/Grid";

import top100img from './top100.jpg';
import { AlbumList } from "@/components/";
import {getFilteredAlbums, getAlbumsPending} from "@/redux/selectors";
import { Operations } from "@/redux/reducers/albums";
import { EnhancedButton, EnhancedReactSVG } from "@/components/styled-components/";

import iconArrowBottom from './icon-arrow-down.svg';

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
  padding: 40px;
  border-radius: 14px;
  box-shadow: -16px -16px 40px rgba(255, 255, 255, 0.8), 4px 16px 64px rgba(18, 61, 101, 0.2), inset -8px -6px 80px rgba(255, 255, 255, 0.18);
`;

const WrapAlbumList = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
`;

const LoadMoreBtn = styled(EnhancedButton)`
  margin-top: auto !important;
`;

const HomePage = () => {
  const dispatch = useDispatch();
  const albums = useSelector(getFilteredAlbums);
  const pending = useSelector(getAlbumsPending);

  useEffect(() => {
    dispatch(Operations.fetchAlbums());
  }, [dispatch]);

  return <Section>
    <Grid container spacing={5}>
      <Grid item xs={12} md={4}>
        <Image src={top100img} alt="top 100 image" />
      </Grid>
      <Grid item xs={12} md={8}>
        <WrapAlbumList>
          <Title>Top 100</Title>
          <SubTitle>iTunes Albums</SubTitle>
          <SimpleBar style={{height: '500px', marginBottom: '50px'}}>
            <AlbumList items={albums} isLoading={pending} />
          </SimpleBar>
          <LoadMoreBtn endIcon={<EnhancedReactSVG src={iconArrowBottom}/>} fullWidth>Показать еще</LoadMoreBtn>
        </WrapAlbumList>
      </Grid>
    </Grid>
  </Section>
};

export default HomePage;
