import React,{useEffect, useState}from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import Head from 'next/head';

import MovieContentSlider from '../components/MovieContentSlider';
import MovieContentModal from '../components/MovieContentModal';

import Footer from '../components/Footer';

const SliderWrapper = styled.div`
    position: relative;
    margin-top: 80px;
`;

const movie = ({selected, setSelected}) => {

    const [isModalOpend, setModalOpend] = useState(false);
    const [mediaType, setMediaType] = useState("tv");
    const [contendId, setContentId] = useState(66732);

    useEffect(()=>{
        isModalOpend ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
    },[isModalOpend]);

    return (
        <>
            <Head>
                <title>영화 - 넷플릭스</title>
            </Head>
            <MainHeader selected={selected} setSelected={setSelected}/>
            <SliderWrapper>
                <MovieContentSlider type={"trend"} setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"지금 뜨는 영화"}/>
                <MovieContentSlider type={"popular"} setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"최고 인기 영화"}/>
                <MovieContentSlider type={"nowplaying"} setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"현재 상영 영화"}/>
                <MovieContentSlider type={"upcoming"} setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"개봉 예정 영화"}/>
            </SliderWrapper>


            {mediaType === "movie" ? <MovieContentModal isOpen={isModalOpend} setModalOpend={setModalOpend} contentId={contendId} mediaType={mediaType}/> : null}
            <Footer/>
        </>
        

    );
};

export default movie;