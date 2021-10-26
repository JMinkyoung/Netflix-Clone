import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import {CaretRightOutlined ,InfoCircleOutlined ,SoundOutlined} from '@ant-design/icons';

import TVContentModal from './TVContentModal';

const MainTopWrapper = styled.div`
    width: 100%;
    height: 100%;
    z-index: 0;
`;

const TrailerWrapper = styled.div`
    position: absolute;
    width: auto;
    height: 1100px;
    left: 0;
    top: 0;
    right: 0;
    background-color: black;

`;

const MainTopLeft = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50%;
    z-index: 2;
    top: 20%;
    left: 3%;
    color: white;
`;

const LogoWrapper = styled.div`
    width: ${props=> props.change === true ? "54%" : "90%"};
    margin-top: ${props=> props.change === true ? "30%" : "15%"};

    transition: width, margin-top 2s;
    transition-property: width, margin-top;
    transition-duration: 2s;
    transition-timing-function: ease;
    transition-delay: 0s;
`;

const MainContentLogo = styled.img`
    width: 100%;
`;

const MainContentDesc = styled.div`
    width: auto;
    display: ${props=> props.change === true ? "none" : "block"};

    transition: height 2s;
    transition-property: height;
    transition-duration: 2s;
    transition-timing-function: ease;
    transition-delay: 0s;

    font-size: 1.4vw;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);

    margin-top: 10px;
`;

const ButtonWrapper = styled.div`
    width: 70%;
    height: 11%;
    display: flex;
    position: relative;
    margin-top: 25px;
`;

const MainButton = styled.button`
    font-size: 1.5em;
    font-weight: 600;
    padding: 4% 6% 4% 4%;
    border-radius: 4px;
    border: 0;
    outline: 0;
    cursor: pointer;
    display: flex;
    text-align: center;
    align-items: center;

    margin-right: 15px;

    :hover{
        background-color: grey;
    }
`;

const MainTopRight = styled.div`
    position: absolute;
    right: 0;
    bottom: 28%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

const ExtraContent = styled.div`
    border: solid 3px #dcdcdc;
    border-style: none none none solid;
    background-color: rgba(51,51,51,.6);
    padding: 0.2vw 4vw 0vw 1vw;

    height: auto;
`;

const MuteButton = styled.button`

    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.7);
    color: white;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    
    margin-right: 15px;

    cursor: pointer;

    :hover{
        background-color: rgba(109,109,110,0.7);
    }
`;

const TrailerVideo = styled(ReactPlayer)`
    position: absolute;
    top:-100px;
    visibility: ${props=> props.ended === true ? "hidden" : "visible"};
`;

const BackgroundImage = styled.img`
    position: absolute;
    top:0;
    width: 100%;
    display: ${props=> props.ended === true ? "block" : "none"};
`;

const MainTopContent = ({setMediaType, setModalOpend, setContentId}) => {
    const [muted, setMuted] = useState(true);
    const [change, setChange] = useState(false);
    const [ended, setEnded] = useState(false);

    const onClickMute = ()=>{
        setMuted(!muted);
    };

    const videoEnded = () => {
        setEnded(true);
    };

    const modalOpen = () => {
        setModalOpend(true);
        setContentId(66732);
        setMediaType("tv");
    };

    setTimeout(()=>{
        setChange(true);
    },5000);

    useEffect(()=>{
        return () => {
            setChange(false);
            setMuted(true);
            setEnded(true);
        }
    },[]);


    return(
        <MainTopWrapper>
            <TrailerWrapper>
                <TrailerVideo 
                    url={"https://www.youtube.com/watch?v=rt1D_W2fxqw"}
                    playing={true}
                    controls={false}
                    width="100%"
                    height="100%"
                    muted={muted}
                    onEnded={(()=> videoEnded())}
                />
                <BackgroundImage ended={ended} src="/images/strangeBack.jpg"/>
            </TrailerWrapper>
            <MainTopLeft>
                <LogoWrapper change={change} ><MainContentLogo alt="기묘한이야기" src="/images/strangelogo.png"/></LogoWrapper>
                <MainContentDesc change={change} >
                    사랑이 싹트는 계절, 새로 문을 여는 쇼핑몰.<br></br>
                    생기 넘치는 1985년 호킨스.<br></br>
                    하지만 광란의 쥐 떼가 질주하면서 어둠이 입을 벌린다.<br></br>
                    이번 여름, 모든 것이 기묘해진다.
                </MainContentDesc>
                <ButtonWrapper>
                    <MainButton>
                        <CaretRightOutlined style={{fontSize:"2.5rem"}} /> 
                        <div>재생</div>
                    </MainButton>
                    <MainButton onClick={modalOpen} style={{color:"white", backgroundColor:"rgba(109,109,110,0.7)"}}>
                        <InfoCircleOutlined style={{fontSize:"1.7rem"}} /> 
                        <div style={{ width:"100%", marginLeft:"10px"}}>상세정보</div>
                    </MainButton>
                </ButtonWrapper>
            </MainTopLeft>
            <MainTopRight>
                <MuteButton onClick={onClickMute}><SoundOutlined style={{fontSize:"1.5rem"}}/></MuteButton>
                <ExtraContent>
                    <img style={{width:"100%"}} src={"/images/rating.png"}/>
                </ExtraContent>
            </MainTopRight>
        </MainTopWrapper>
    );  
};

export default MainTopContent;