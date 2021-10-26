import React,{ useState, useEffect , useRef} from 'react';
import styled from 'styled-components';
import {  useSelector } from 'react-redux';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import RankElement from './RankElement';

const PaginationWrapper = styled.div`
    position: absolute;
    right: 5%;
    bottom: 0;
    display: flex;
    visibility: hidden;
`;

const PaginationItem = styled.div`
    width: 10px;
    height: 2px;
    background-color: ${props => props.id === props.selected ? "white" : "grey"};
    margin-left: 1px;
`;

const SliderTitleMore = styled.div`
    display: none;
`;

const ContentSliderWrapper = styled.div`
    position: relative;
    height: 350px;
    overflow: hidden;
    :hover {
        ${PaginationWrapper}{
            visibility: visible;
        }

        ${SliderTitleMore}{
            display: block;
        }
    }
`;

const SliderTitleWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin: 2% 4% .5em 3%;
    display: flex;
    align-items: center;
`;

const SliderTitle = styled.a`
    color: white;
    font-size: 1.8em;
    font-weight: bolder;
`;



const SliderContentWrapper = styled.div`
    position: relative;
    height: auto;
    display:flex;
    text-align:center;
    margin-left: 2%;
    width: ${props => props.width}px;
    transform : translate3d(${props => props.test}%, 0px, 0px);
    transition: transform 1s;

`;

const LeftButton = styled(LeftOutlined)`
    color: white;
    font-size: 50px;
    visibility: hidden;
`;


const SliderLeftButton = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    height: 70%;
    top: 24%;
    left: 0;
    cursor: pointer;
    border-radius: 4px;
    :hover{
        background: rgba(20,20,20,.5);       
        ${LeftButton}{
            visibility: ${props => !props.started ? "hidden" : "visible"};
        }
    }
`;

const RightButton = styled(RightOutlined)`
    color: white;
    font-size: 50px;
    visibility: hidden;
    transition: transform .1s ease-out 0s;
`;

const SliderRightButton = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    height: 70%;
    top: 24%;
    right: 0;
    cursor: pointer;
    border-radius: 4px;
    :hover{
        background: rgba(20,20,20,.5);       
        ${RightButton}{
            visibility: visible;
        }
    }
`;

const RankContentSlider = ({setModalOpend ,setContentId, setMediaType, title}) => {
    const container = useRef();
    const [started, setStarted] = useState(false);
    const [position, setPosition] = useState(-2);
    const [idx, setIdx] = useState(1);


    const onClickLeft = () => {
        if(idx-1 === 0){    // 첫번째 슬라이드 일때
            setIdx(2);
            setTimeout(function(){
                setPosition(-66);
                container.current.style.transition = `${0}s ease-out`; 
            },500);
        }else{
            container.current.style.transition = `transform 1s`; 
            setIdx(idx-1);
            setPosition(position+64);
        }
    }

    const onClickRight = () => {
        if(!started){
            setStarted(true);
        }
        if(idx+1 === 2){ // 일반적인 이동
            setPosition(position-64);
            setIdx((idx+1));
            container.current.style.transition = `transform 1s`; 
        }else{  // 마지막 슬라이드 일때
            setIdx(1);
            setTimeout(function(){
                setPosition(-2);
                container.current.style.transition = `${0}s ease-out`; 
            },500);
        }
    }
    const ranks = useSelector((state) => state.saved.ranks);

    const TotalLength = container && container.current && container.current.offsetWidth;

    return(
        <>
        <ContentSliderWrapper>
            <SliderTitleWrapper>
                <SliderTitle>{title}</SliderTitle>
                <PaginationWrapper>
                    <PaginationItem id={1} selected={idx}/>
                    <PaginationItem id={2} selected={idx}/>
                </PaginationWrapper>
            </SliderTitleWrapper>
            <SliderContentWrapper width={TotalLength} test={position}ref={container}>
                {ranks.map((v, index)=>{
                    return(
                        <RankElement setContentId={setContentId} setModalOpend={setModalOpend} setMediaType={setMediaType} key={index} id={index} data={v} />
                    )
                })}
            </SliderContentWrapper>
            <SliderLeftButton started={started} onClick={onClickLeft}>
                <LeftButton/>
            </SliderLeftButton>
            <SliderRightButton onClick={onClickRight}>
                <RightButton/>
            </SliderRightButton>
        </ContentSliderWrapper>
        
        </>
    );
};

export default RankContentSlider;