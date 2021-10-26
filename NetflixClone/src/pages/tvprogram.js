import React,{useEffect, useState}from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import Head from 'next/head';

import TvContentSlider from '../components/TvContentSlider';
import TVContentModal from '../components/TVContentModal';
import Footer from '../components/Footer';

const SliderWrapper = styled.div`
    position: relative;
    margin-top: 80px;
`;

const tvprogram = ({selected, setSelected}) => {

    const [isModalOpend, setModalOpend] = useState(false);
    const [mediaType, setMediaType] = useState("tv");
    const [contendId, setContentId] = useState(66732);

    useEffect(()=>{
        isModalOpend ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
    },[isModalOpend]);

    return (
        <>
            <Head>
                <title>TV 프로그램 - 넷플릭스</title>
            </Head>
            <MainHeader selected={selected} setSelected={setSelected}/>
            <SliderWrapper>
                <TvContentSlider type="trend"setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"지금 뜨는 드라마"}/>
                <TvContentSlider type="toprated"setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"최고 인기 TV 컨텐츠"}/>
                <TvContentSlider type="popular"setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"지금 뜨는 TV 컨텐츠"}/>
                <TvContentSlider type="onair"setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"현재 방영중인 TV 컨텐츠"}/>
            </SliderWrapper>


            {mediaType === "tv" ? <TVContentModal isOpen={isModalOpend} setModalOpend={setModalOpend} contentId={contendId} mediaType={mediaType}/> : null}
            <Footer/>
        </>
        

    );
};

export default tvprogram;