import React,{useEffect, useState}from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import MainTopContent from '../components/MainTopContent';

import TvContentSlider from '../components/TvContentSlider';
import TVContentModal from '../components/TVContentModal';

import MovieContentSlider from '../components/MovieContentSlider';
import MovieContentModal from '../components/MovieContentModal';

import RankContentSlider from '../components/RankContentSlider';
import Footer from '../components/Footer';
import Head from 'next/head';

const SliderWrapper = styled.div`
    position: relative;
    margin-top: 780px;
`;

const browse = ({selected, setSelected}) => {
    const [isModalOpend, setModalOpend] = useState(false);
    const [mediaType, setMediaType] = useState("tv");
    const [contendId, setContentId] = useState(66732);

    useEffect(()=>{
        isModalOpend ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
    },[isModalOpend]);

    return (
        <>
        <Head>
            <title>홈 - 넷플릭스</title>
        </Head>
        <MainHeader selected={selected} setSelected={setSelected}/>
        <MainTopContent setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId}/>
        <SliderWrapper>
            <TvContentSlider  type="trend" setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"지금 뜨는 드라마"}/>
            <MovieContentSlider type="trend" setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"지금 뜨는 영화"}/>
            <RankContentSlider setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"오늘 한국의 TOP 10 콘텐츠"} />
        </SliderWrapper>

        {mediaType === "tv" ? <TVContentModal isOpen={isModalOpend} setModalOpend={setModalOpend} contentId={contendId} mediaType={mediaType}/> : null}
        {mediaType === "movie" ? <MovieContentModal isOpen={isModalOpend} setModalOpend={setModalOpend} contentId={contendId} mediaType={mediaType}/> : null}
        
        <Footer />
        </>
    );
};


export default browse;