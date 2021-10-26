import React,{useEffect, useState}from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import Head from 'next/head';

import TvContentSlider from '../components/TvContentSlider';
import RankContentSlider from '../components/RankContentSlider';

import TVContentModal from '../components/TVContentModal';
import MovieContentModal from '../components/MovieContentModal';

import Footer from '../components/Footer';

const SliderWrapper = styled.div`
    position: relative;
    margin-top: 80px;
`;

const latest = ({selected, setSelected}) => {
    const [isModalOpend, setModalOpend] = useState(false);
    const [mediaType, setMediaType] = useState("tv");
    const [contendId, setContentId] = useState(66732);

    useEffect(()=>{
        isModalOpend ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
    },[isModalOpend]);

    return (
        <>
            <Head>
                <title>넷플릭스</title>
            </Head>
            <MainHeader selected={selected} setSelected={setSelected}/>
            <SliderWrapper>
                <RankContentSlider setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"오늘 한국의 TOP 10 콘텐츠"} />
                <TvContentSlider type="trendingweek"setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"이번주 인기 콘텐츠"}/>
                <TvContentSlider type="trendingday"setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"오늘의 인기 콘텐츠"}/>
            </SliderWrapper>

            {mediaType === "tv" ? <TVContentModal isOpen={isModalOpend} setModalOpend={setModalOpend} contentId={contendId} mediaType={mediaType}/> : null}
            {mediaType === "movie" ? <MovieContentModal isOpen={isModalOpend} setModalOpend={setModalOpend} contentId={contendId} mediaType={mediaType}/> : null}
            <Footer />
        </>
    );
};

export default latest;