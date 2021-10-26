import React from 'react';
import styled from 'styled-components';
import Qna from '../components/Qna';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import EmailInput from '../components/EmailInput';

const OurStoryCard = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 0 0;
    color: #fff;
    background-color: black;
    
`;

const OurStoryHeaderWrapper = styled.div`
    background-color: transparent;
    transition: background-color .5s;
    position: relative;
    max-width: 1920px;
    margin: 0 auto;
    padding-top: 20px;
    width: 100%;
    top: 0;
    border: 0;
    right: 0;
    left: 0;
    z-index: 10;
    @media only screen and (min-width: 550px) and (max-width: 949px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
        height: 45px;
    }
`;

const OurStoryHeader = styled.div`
    position: relative;
    display: flex;
    height: auto;
    padding-top: .5rem;
    align-items: flex-start;
    justify-content: flex-start;

    margin: 0 3.5rem;

    @media only screen and (min-width: 550px) and (max-width: 949px){
        margin: 0 45px;
    }
    @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
        margin: 0 5%;
    }

`;

export const Mainlogo = styled.img`
    width: 180px;
    margin-right: auto;
    @media only screen and (min-width: 550px) and (max-width: 949px){
        width: 150px;
    }
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px), only screen and (min-width: 400px) and (max-width: 549px){
        width: 100px;
    }
`;

const LoginButton = styled.a`
    background-color: #e50914;
    color: #fff;
    border-radius: 3px;
    padding: 7px 17px;
    font-weight: 400;
    font-size: 1rem;
    cursor: pointer;
    @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px){
        font-size: .9rem;
        padding: .25rem, .5rem;
    }
    
`;

const OurStoryHero = styled.div`
    z-index: 0;
    position: relative;
    top: -50px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    height: 80%;
    max-height: 850px;
    margin-top: 30px;
    border-bottom: 8px solid #222;
    display: flex;
    @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
        top: -100px;
    }
`;

const ConcordImgWrapper = styled.div`
    height: 100%;
    @media only screen and (min-width: 550px) and (max-width: 949px), only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px){
        max-width: 100%;
        height: auto;
    }
`;
const ConcordImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ConcordImgGradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    border: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0, .4);
    background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);

`;
const OurStoryCardText = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding: 75px 0;
    max-width: 950px;
    margin: auto;
    text-align: center;
    z-index: 1;

    @media only screen and (min-width: 350px) and (max-width: 399px){
        width: 85%;
        padding: 75px 0;
    }

`;
const OurStoryHeroTitle = styled.h1`
    display: block;
    font-size: 1.75rem;
    line-height: 1.1;
    margin-bottom: .5rem;
    max-width: 640px;
    margin: 0 auto;
    line-height: normal;

    @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
        font-size: 4rem;
    }
    
`;

const OurStoryHeroSubTitle = styled.h2`
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: 400;
    margin: 1rem auto;
    margin-bottom: 0;
    font-size: 1.625rem;

    @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
        font-size: 1.125rem;
    }

`;

const EmailForm = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
        max-width: 950px;
        padding-top: .85rem;
    }
`;

const EmailTitle = styled.h3`
    font-weight: 400;
    font-size: 18px;

    @media screen and (min-width: 740px) {
        font-size: 23px;
        max-width: 450px;
    }

    @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
        padding: 0 5%;
        max-width: none;
        font-size: 1.2rem;
    }
`;

const EmailWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        flex-direction: column;
    }
`;


const EmailButton = styled.button`
    background-color: #e50914;
    font-size: 1em;
    color: #fff;
    border: 0;
    outline: 0;
    border-radius: 2px;
    min-width: 74px;
    min-height: 60px;
    width: 200px;
    height: 69px;
    cursor: pointer;
    @media only screen and (min-width: 950px) and (max-width: 1449px) {
        font-size: 1.625rem;
        min-height: 60px;
    }
    
    @media only screen and (min-width: 1450px) {
        font-size: 1.875rem;
        min-height: 48px;
    }

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        font-size: 1em;
        width: 100px;
        height: 40px;
        margin: 0 auto;
        margin-top: 40px;
    }
`;

const OurStoryTv = styled.div`
    position: relative;
    z-index: 0;
    width: 100%;
    border-bottom: 8px solid #222;
    background-color: black;
`;

const TVwrapper = styled.div`   
    display: flex;
    flex-direction: row;
    z-index: 0;
    max-width: 1100px;
    margin: 0 auto;
    top: 0;
    margin-bottom: 50px;

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        flex-direction: column;
        text-align: center;
    }
`;

const TVContext = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    flex: 0 1 auto;
    /* padding: 0 3rem 0 0; */
    z-index: 3;

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        margin: 0 auto;
        width: 80%;
    }
`;

const TVrightWrapper = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    margin-left: 80px;
    top: -10px;
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        margin: 0 auto;
        width: 80%;
    }
`;

const TVvideoWrapper = styled.div`
    position: relative;
    
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        /* width: ; */
    }
`;

const TVImg = styled.img`
    position: relative;
    z-index: 2;
    max-width: 100%;
    height: auto;
    border: 0;
`;

const TVVideo = styled.div`

    position: absolute;
    top: 5%;
    left: 12%;
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        left: 0;
    }
`;

const CardTitle = styled.h1`
    line-height: normal;
    font-size: 3.125rem;
    margin-bottom: .5rem;

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        font-size: 1.625rem;
    }
`;

const CardSubTitle = styled.h2`
    font-size: 1.625rem;
    font-weight: 400;

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        font-size: 1.125rem;
    }
`;

const OurStoryOffline = styled.div`
    position: relative;
    z-index: 0;
    width: 100%;
    border-bottom: 8px solid #222;
    background-color: black;

    
`;

const OfflineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    z-index: 0;
    max-width: 1100px;
    margin: 0 auto;
    margin-bottom: 50px;
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        flex-direction: column-reverse;
        text-align: center;
        padding-top: 50px;
        margin: 0 auto;
        width: 90%;
        margin-bottom: 50px;
    }
`;

const OfflineLeft = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100px;
    width: 50%;
    margin-top: 40px;
    margin-right: 150px;
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        margin: 0 auto;
        width: 45%;
    }
`;

const OfflineRight = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 55%;
    height: 100%;
    margin-top: 50px;

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        margin: 0 auto;
        width: 100%;
    }
`;

const PhoneImgWrapper = styled.div`
    width: 60%;
    margin: 0 auto;
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        margin: 0 auto;
        width: 100%;
    }
    
`;

const PhoneImg = styled.img`
    position: relative;
    z-index: 0;
    max-width: 100%;
    height: auto;
    border: 0;
`;


const OfflineDownload = styled.div`
    position: absolute;
    left: 50%;
    bottom: 8%;
    transform: translateX(-50%);
    margin: 0 auto;
    background: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    height: 23%;
    min-width: 15em;
    padding: .3em .7em;
    border: 2px solid rgba(255,255,255,.25);
    box-shadow: 0 0 2em 0 #000;
    border-radius: .75em;
    z-index: 3;
    ::after{
        width: 3em;
        height: 3em;
        outline: 2px solid #000;
        outline-offset: -2px;
        display: block;
        background: url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif")center center;
        background-size: 100%;
        content: '';
        flex-grow: 0;
        flex-shrink: 0;
    }

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        margin: 0 auto;
        left: 50%;
        bottom: 9%;     
    }
`;

const OfflineText = styled.div`
    position: relative;
    left: 0;
    flex-grow: 1;
    width:60%;
    height:50%;
    margin:.3em 0;

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        margin-bottom: 10px;
        text-align: left;
    }
`;

const OurStoryDevice = styled.div`
    position: relative;
    z-index: 0;
    width: 100%;
    border-bottom: 8px solid #222;
    background-color: black;
`;

const DeviceContext = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    flex: 0 1 auto;
    z-index: 3;
    padding-top: 100px;
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        margin: 0 auto;
        width: 80%;
        padding-top: 50px;
    }
`;

const DevicerightWrapper = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    margin-left: 80px;
    top: -10px;
    padding-top: 70px;
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        margin: 0 auto;
        width: 80%;
        padding-top: 0px
    }
`;
const DevicevideoWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const DeviceVideo = styled.div`

    position: absolute;
    top: 10%;
    left: 20%;

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        width: 80%;
        left: 10%;
    }
`;

const DeviceImg = styled.img`
    position: relative;
    z-index: 2;
    max-width: 100%;
    height: auto;
    border: 0;
`;

const KidLeft = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100px;
    width: 50%;
    margin-top: 80px;
    margin-right: 150px;
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        margin: 0 auto;
        width: 100%;
    }
`;


const KidImgWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        margin: 0 auto;
        width: 100%;
    }  
`;

const QnaWrapper = styled.div`
    font-weight: 400;
    display: flex;
    flex-direction: column;
    z-index: 0;
    max-width: 1100px;
    margin: 0 auto;
    margin-bottom: 50px;
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        text-align: center;
        margin: 0 auto;
        width: 100%;
        margin-bottom: 50px;
    }
`;

const QnaList = styled.ul`
    width: 75%;
    margin: 0 auto;
    
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        text-align: center;
        margin-left: 10px;
        width: 100%;
        margin: 0;
        padding: 0;
    }
`;


const index = () => {
    const qnas = useSelector((state) => state.saved.qnas);
    const router = useRouter();

    return(
        <OurStoryCard>
            <OurStoryHeaderWrapper>
                <OurStoryHeader>
                    <Mainlogo src="/images/netflix-logo-png-2562.png"/>
                    <LoginButton onClick={()=>router.push('/browse')}>로그인</LoginButton>
                </OurStoryHeader>
            </OurStoryHeaderWrapper>
            <OurStoryHero>
                <ConcordImgWrapper>
                    <ConcordImg src="/images/small.jpg" srcSet="/images/small.jpg 1000w, /images/medium.jpg 1500w, /images/large.jpg 1800w"/>
                    <ConcordImgGradient/> 
                </ConcordImgWrapper>
                <OurStoryCardText>
                    <OurStoryHeroTitle>영화, TV 프로그램을 무제한으로.</OurStoryHeroTitle>
                    <OurStoryHeroSubTitle>다양한 디바이스에서 시청하세요. 언제든지 해지하실 수 있습니다.</OurStoryHeroSubTitle>
                    <EmailForm>
                        <EmailTitle>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</EmailTitle>
                        <EmailWrapper>
                            <EmailInput/>
                            <EmailButton onClick={()=>router.push('/browse')}>시작하기</EmailButton>
                        </EmailWrapper>
                    </EmailForm>
                </OurStoryCardText>
            </OurStoryHero>
            <OurStoryTv>
                <TVwrapper>
                    <TVContext>
                        <CardTitle>TV로 즐기세요.</CardTitle>
                        <CardSubTitle>스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</CardSubTitle>
                    </TVContext>
                    <TVrightWrapper>
                        <TVvideoWrapper>
                            <TVImg src="/images/tv.png"/>
                            <TVVideo>
                                <video width="90%" autoPlay playsInline muted loop>
                                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
                                </video>
                            </TVVideo>
                        </TVvideoWrapper>
                    </TVrightWrapper>
                </TVwrapper>
            </OurStoryTv>
            <OurStoryOffline>
                <OfflineWrapper>
                    <OfflineLeft>
                        <PhoneImgWrapper>
                            <PhoneImg src="/images/mobile-08192.jpg"/>
                        </PhoneImgWrapper>
                        <OfflineDownload>
                            <div style={{width:"17%", margin:"0 1em 0 0"}}>
                                <img style={{maxWidth:"100%", wheight:"3em"}}src="/images/boxshot.png"/>
                            </div>
                            <OfflineText>
                                <div style={{fontWeight:"600", fontSize:".9em"}}>기묘한 이야기</div>
                                <div style={{fontWeight:"400", fontSize:".75em", color:"#0071eb"}}>저장 중...</div>
                            </OfflineText>
                        </OfflineDownload>
                    </OfflineLeft>
                    <OfflineRight>
                        <CardTitle>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.</CardTitle>
                        <CardSubTitle>간편하게 저장하고 빈틈없이 즐겨보세요.</CardSubTitle>
                    </OfflineRight>
                </OfflineWrapper>
            </OurStoryOffline>
            <OurStoryDevice>
                <TVwrapper>
                        <DeviceContext>
                            <CardTitle>다양한 디바이스에서</CardTitle>
                            <CardSubTitle>각종 영화와 TV 프로그램을 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.</CardSubTitle>
                        </DeviceContext>
                        <DevicerightWrapper>
                            <DevicevideoWrapper>
                                <DeviceImg src="/images/device-pile.png"/>
                                <DeviceVideo>
                                    <video width="78%" autoPlay playsInline muted loop>
                                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"/>
                                    </video>
                                </DeviceVideo>
                            </DevicevideoWrapper>
                        </DevicerightWrapper>
                </TVwrapper>
            </OurStoryDevice>
            <OurStoryOffline>
                <OfflineWrapper>
                    <KidLeft>
                        <KidImgWrapper>
                            <PhoneImg src="/images/kid.png"/>
                        </KidImgWrapper>
                    </KidLeft>
                    <OfflineRight>
                        <CardTitle>어린이 전용 프로필을 만들어 보세요.</CardTitle>
                        <CardSubTitle>자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.</CardSubTitle>
                    </OfflineRight>
                </OfflineWrapper>
            </OurStoryOffline>
            <OurStoryOffline>
                <QnaWrapper>
                    <CardTitle style={{textAlign:"center", margin:"80px 0 50px 0"}}>자주 묻는 질문</CardTitle>
                    <QnaList>
                        {qnas.map((qna)=>{
                            return <Qna key={qna.id} id={qna.id} question={qna.question} answer={qna.answer} />
                        })}
                    </QnaList>
                    <EmailForm style={{margin:"0 auto"}}>
                        <EmailTitle style={{width:"100%", marginRight:"50px"}}>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</EmailTitle>
                        <EmailWrapper>
                            <EmailInput />
                            <EmailButton onClick={()=>router.push('/browse')}>시작하기</EmailButton>
                        </EmailWrapper>
                    </EmailForm>
                </QnaWrapper>
            </OurStoryOffline>
        </OurStoryCard>
    );
};

export default index;

export const getServerSideProps = async ctx => {

    // get the cookies
    const cookieString = ctx.req ? ctx.req.headers.cookie : '';
    
    ctx.res.setHeader('set-cookie', ['same-site-cookie=foo; SameSite=Strict', 'cross-site-cookie=bar; SameSite=None; Secure'])
      return {
        props: {},
    };
  }