import React, {useEffect, useState, useCallback} from 'react';
import styled from 'styled-components';
import {SearchOutlined, BellFilled,CaretDownOutlined} from '@ant-design/icons';
import { useRouter } from 'next/router';
import tvprogram from '../pages/tvprogram';

const HeaderWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0;
    top: 0;
    right: 0;
    background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
    z-index: 500;
`;

const HeaderContainer = styled.div`
    position: relative;
    height: 100%;
    top: 0px;
    transition: background-color .4s;
    transition-property: background-color;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    transition-delay: 0s;
    background-color: ${props => props.scroll === "change" ? "rgb(20, 20, 20)" : "transparent"};
`;

const LeftNavigation = styled.div`
    position: absolute;
    align-items: center;
    top: 0;
    height: 100%;
    display: flex;
    margin-left: 55px;
    
`;

const RightNavigation = styled.div`
    position: absolute;
    height: 100%;
    display: flex;
    cursor: pointer;
    right: 4%;
    top: 0;
    align-items: center;
`;

const NaviElement = styled.div`
    display: flex;
    margin-left: 22px;
    align-items: center;
    font-size: 0.9rem;
`;

const Navilist = styled.div`
    display: inline-block;
    margin-right: 20px;
    color: white;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: ${props => props.id === props.selected  ? "bolder" : null};

    transition: color .4s;
    transition-property: color;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    transition-delay: 0s;

    :hover{
        color: #e5e5e5;
    }
`;

const AvatarArrow = styled(CaretDownOutlined)`
    position: absolute;
    align-items: center;
    font-size: 13px;
    color: white;
    margin-left: 40px;
`;

const MainHeader = ({selected, setSelected}) => {

    const [scroll, setScroll] = useState(0);
    const router = useRouter();


    const updateScroll = () => {
        setScroll(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    return(
        <HeaderWrapper>
            <HeaderContainer scroll={scroll > 1 ? "change" : "original"}>
                <LeftNavigation>
                    <img style={{float:"left",width:"100px", cursor:"pointer"}} src="/images/netflix-logo-png-2562.png" onClick={()=>{
                                router.push('/browse');
                                setSelected(1);
                            }} />
                        <ul>
                            <Navilist id={1} selected={selected} onClick={()=>{
                                router.push('/browse');
                                setSelected(1);
                            }}>홈</Navilist>
                            <Navilist id={2} selected={selected} onClick={()=>{
                                setSelected(2);
                                router.push('/tvprogram');
                            }}>TV 프로그램</Navilist>
                            <Navilist id={3} selected={selected} onClick={()=>{
                                router.push('/movie');
                                setSelected(3);
                            }}>영화</Navilist>
                            <Navilist id={4} selected={selected} onClick={()=>{
                                router.push('/latest');
                                setSelected(4);
                            }}>NEW! 요즘 대세 콘텐츠</Navilist>
                        </ul>
                </LeftNavigation>
                <RightNavigation>
                    <NaviElement><SearchOutlined style={{color:"white", fontSize:"20px"}}/></NaviElement>
                    <NaviElement style={{color:"white"}}>키즈</NaviElement>
                    <NaviElement><BellFilled style={{color:"white", fontSize:"25px"}} /></NaviElement>
                    <NaviElement>
                        <img style={{width:"32px", borderRadius:"5px"}} src="/images/avatar.png"/>
                        <AvatarArrow/>
                    </NaviElement>
                </RightNavigation>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default MainHeader;